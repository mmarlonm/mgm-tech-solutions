import React, { useEffect, useRef, useState } from 'react';
import { Activity, Zap, Cpu, Server, Database, Radio, CheckCircle2 } from 'lucide-react';

interface SynapticNode {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  icon: string;
  color: string;
  active: boolean;
  throughput: string;
  latency: string;
}

export const SynapticNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<string>('node-gateway');
  const [activeSpeed, setActiveSpeed] = useState<'normal' | 'turbo'>('normal');

  const nodes: SynapticNode[] = [
    { id: 'node-client', name: 'Frontend React / Angular', type: 'Client Edge', x: 0.15, y: 0.5, icon: 'code', color: '#5a9bd5', active: true, throughput: '12.4k req/s', latency: '0.8ms' },
    { id: 'node-gateway', name: 'API Gateway & Auth', type: 'Zero-Trust Proxy', x: 0.38, y: 0.3, icon: 'shield', color: '#34b563', active: true, throughput: '38.2k req/s', latency: '1.2ms' },
    { id: 'node-services', name: 'Microservicios .NET / Node', type: 'Core Compute', x: 0.62, y: 0.45, icon: 'cpu', color: '#7db3d9', active: true, throughput: '45.0k req/s', latency: '2.1ms' },
    { id: 'node-cache', name: 'Cluster Redis In-Memory', type: 'Sub-millisecond Cache', x: 0.45, y: 0.78, icon: 'zap', color: '#34b563', active: true, throughput: '85.6k ops/s', latency: '0.4ms' },
    { id: 'node-db', name: 'SQL & MongoDB Sharded', type: 'Persistence Layer', x: 0.85, y: 0.6, icon: 'database', color: '#2a9d52', active: true, throughput: '22.8k iops', latency: '3.5ms' },
    { id: 'node-events', name: 'Event Bus & Kafka', type: 'Async Streaming', x: 0.75, y: 0.2, icon: 'radio', color: '#34b563', active: true, throughput: '120k msg/s', latency: '0.9ms' },
  ];

  const connections = [
    ['node-client', 'node-gateway'],
    ['node-gateway', 'node-services'],
    ['node-gateway', 'node-cache'],
    ['node-services', 'node-cache'],
    ['node-services', 'node-events'],
    ['node-services', 'node-db'],
    ['node-events', 'node-db'],
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    interface Packet {
      from: string;
      to: string;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: Packet[] = [];
    connections.forEach(([from, to]) => {
      packets.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.008,
        color: Math.random() > 0.4 ? '#34b563' : '#5a9bd5',
      });
      packets.push({
        from,
        to,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.006,
        color: '#34b563',
      });
    });

    const render = () => {
      time += 0.02;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Background subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Connections (synaptic axon lines)
      connections.forEach(([fromId, toId]) => {
        const fromNode = nodes.find((n) => n.id === fromId);
        const toNode = nodes.find((n) => n.id === toId);
        if (!fromNode || !toNode) return;

        const x1 = fromNode.x * w;
        const y1 = fromNode.y * h;
        const x2 = toNode.x * w;
        const y2 = toNode.y * h;

        // Gradient line
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, 'rgba(109, 254, 156, 0.25)');
        grad.addColorStop(0.5, 'rgba(112, 175, 255, 0.35)');
        grad.addColorStop(1, 'rgba(109, 254, 156, 0.25)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.lineDashOffset = -time * 20;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Update & Draw Packets (synaptic pulses)
      const speedMultiplier = activeSpeed === 'turbo' ? 2.2 : 1;
      packets.forEach((p) => {
        p.progress += p.speed * speedMultiplier;
        if (p.progress >= 1) p.progress = 0;

        const fromNode = nodes.find((n) => n.id === p.from);
        const toNode = nodes.find((n) => n.id === p.to);
        if (!fromNode || !toNode) return;

        const px = (fromNode.x + (toNode.x - fromNode.x) * p.progress) * w;
        const py = (fromNode.y + (toNode.y - fromNode.y) * p.progress) * h;

        // Glow ring around packet
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;
        const isSelected = selectedNode === node.id;

        // Outer pulse
        const pulseSize = 20 + Math.sin(time * 3 + node.x * 10) * 4;
        ctx.beginPath();
        ctx.arc(nx, ny, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? 'rgba(109, 254, 156, 0.25)' : 'rgba(255, 255, 255, 0.04)';
        ctx.fill();

        // Node base
        ctx.beginPath();
        ctx.arc(nx, ny, 14, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#0f2137' : '#0b1929';
        ctx.strokeStyle = isSelected ? '#34b563' : 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = isSelected ? 2.5 : 1.5;
        ctx.shadowColor = isSelected ? '#34b563' : 'transparent';
        ctx.shadowBlur = isSelected ? 15 : 0;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Center dot
        ctx.beginPath();
        ctx.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#34b563' : '#5a9bd5';
        ctx.fill();

        // Node Label
        ctx.font = '600 11px Montserrat, sans-serif';
        ctx.fillStyle = isSelected ? '#34b563' : '#cbd5e1';
        ctx.textAlign = 'center';
        ctx.fillText(node.name.split(' ')[0], nx, ny + 28);
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) / rect.width;
      const clickY = (e.clientY - rect.top) / rect.height;

      nodes.forEach((n) => {
        const dist = Math.hypot(n.x - clickX, n.y - clickY);
        if (dist < 0.08) {
          setSelectedNode(n.id);
        }
      });
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [selectedNode, activeSpeed]);

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <div className="w-full relative rounded-3xl overflow-hidden bg-[#0f2137]/60 backdrop-blur-md border border-white/10 shadow-[0_0_50px_rgba(109,254,156,0.08)] flex flex-col">
      {/* Top Bar Controls */}
      <div className="px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#34b563] animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#34b563]">
            Topología Sináptica Activa
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSpeed(activeSpeed === 'normal' ? 'turbo' : 'normal')}
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeSpeed === 'turbo'
                ? 'bg-[#34b563] text-[#0a2218] shadow-[0_0_15px_rgba(109,254,156,0.5)]'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            {activeSpeed === 'turbo' ? 'Modo Turbo Activo' : 'Acelerar Flujo'}
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="relative w-full h-[340px] md:h-[420px] bg-gradient-to-b from-[#0b1929]/80 to-[#0f2137]/90">
        <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />

        {/* Selected Node Floating HUD */}
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 p-4 rounded-2xl bg-[#0b1929]/90 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#34b563] font-semibold">
                Neurona Seleccionada
              </span>
              <h4 className="text-sm font-bold text-white font-['Montserrat']">{activeNodeData.name}</h4>
              <p className="text-xs text-white/60">{activeNodeData.type}</p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-[#34b563]/10 border border-[#34b563]/30 flex items-center justify-center text-[#34b563]">
              <Cpu className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
            <div className="bg-white/5 rounded-lg p-2">
              <span className="text-[10px] text-white/50 block">Rendimiento</span>
              <span className="text-xs font-bold text-[#34b563]">{activeNodeData.throughput}</span>
            </div>
            <div className="bg-white/5 rounded-lg p-2">
              <span className="text-[10px] text-white/50 block">Latencia Red</span>
              <span className="text-xs font-bold text-[#7db3d9]">{activeNodeData.latency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
