import React, { useState } from 'react';
import { MessageSquare, Mail, Send, Bell, CheckCircle2, RefreshCw, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const OmnichannelSimulator: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'email' | 'telegram'>('whatsapp');
  const [isSending, setIsSending] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);

  const simulateDispatch = () => {
    setIsSending(true);
    setDeliveryStatus('Enrutando paquete con latencia 4ms...');
    setTimeout(() => {
      setIsSending(false);
      setDeliveryStatus('✓ Entregado con confirmación criptográfica en 12ms');
    }, 900);
  };

  return (
    <div className="mt-8 w-full rounded-3xl bg-[#0f2137]/40 backdrop-blur-md border border-white/10 overflow-hidden relative flex flex-col lg:flex-row shadow-2xl">
      {/* Left Column: Information & Controls */}
      <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3a5c]/40 border border-[#5a9bd5]/30 text-[#7db3d9] text-xs font-semibold uppercase tracking-widest w-max mb-6">
          <span className="w-2 h-2 rounded-full bg-[#34b563] animate-pulse" />
          Módulo de Comunicaciones
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-['Montserrat'] mb-4">
          Servicios de Notificación Omnicanal
        </h2>
        <p className="text-sm md:text-base text-slate-300 font-light mb-8 leading-relaxed">
          Integre alertas críticas, notificaciones transaccionales y campañas automatizadas directamente en los canales preferidos de sus usuarios con latencia ultra baja.
        </p>

        <div className="flex flex-col gap-4">
          {/* WhatsApp Channel Selector */}
          <button
            onClick={() => {
              setActiveChannel('whatsapp');
              setDeliveryStatus(null);
            }}
            className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
              activeChannel === 'whatsapp'
                ? 'bg-[#0f3d2a]/30 border-[#34b563]/60 shadow-[0_0_20px_rgba(109,254,156,0.15)]'
                : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeChannel === 'whatsapp'
                  ? 'bg-[#0f3d2a] text-[#34b563] shadow-[0_0_15px_rgba(109,254,156,0.4)]'
                  : 'bg-white/10 text-white'
              }`}
            >
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">WhatsApp Business API</h4>
                <span className="text-[10px] text-[#34b563] bg-[#34b563]/10 px-2 py-0.5 rounded-full border border-[#34b563]/20">
                  99.8% Open Rate
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Mensajería bidireccional automatizada y soporte al cliente.</p>
            </div>
          </button>

          {/* Email Channel Selector */}
          <button
            onClick={() => {
              setActiveChannel('email');
              setDeliveryStatus(null);
            }}
            className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
              activeChannel === 'email'
                ? 'bg-[#1a3a5c]/30 border-[#5a9bd5]/60 shadow-[0_0_20px_rgba(112,175,255,0.15)]'
                : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeChannel === 'email'
                  ? 'bg-[#004178] text-[#7db3d9] shadow-[0_0_15px_rgba(164,201,255,0.4)]'
                  : 'bg-white/10 text-white'
              }`}
            >
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">Email Transaccional</h4>
                <span className="text-[10px] text-[#7db3d9] bg-[#5a9bd5]/10 px-2 py-0.5 rounded-full border border-[#5a9bd5]/20">
                  DKIM & SPF Strict
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Entrega garantizada con tracking avanzado y plantillas dinámicas.</p>
            </div>
          </button>

          {/* Telegram Channel Selector */}
          <button
            onClick={() => {
              setActiveChannel('telegram');
              setDeliveryStatus(null);
            }}
            className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
              activeChannel === 'telegram'
                ? 'bg-white/15 border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                activeChannel === 'telegram'
                  ? 'bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  : 'bg-white/10 text-white'
              }`}
            >
              <Send className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">Integración Telegram</h4>
                <span className="text-[10px] text-slate-200 bg-white/10 px-2 py-0.5 rounded-full border border-white/20">
                  Sub-10ms Webhooks
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Bots interactivos para alertas de sistema y comunidades.</p>
            </div>
          </button>
        </div>
      </div>

      {/* Right Column: Live Radar Visualizer & Sandbox */}
      <div className="relative min-h-[380px] lg:h-auto lg:w-1/2 overflow-hidden bg-[#0b1929]/80 flex flex-col items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-white/10">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34b563_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Radar Concentric Circles */}
        <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-[#34b563]/20 shadow-[inset_0_0_40px_rgba(109,254,156,0.08)] animate-radar-spin" />
          
          {/* Middle ring */}
          <div className="absolute w-3/4 h-3/4 rounded-full border border-[#5a9bd5]/30 shadow-[0_0_30px_rgba(112,175,255,0.1)] animate-radar-spin-reverse" />
          
          {/* Inner ring */}
          <div className="absolute w-1/2 h-1/2 rounded-full border border-[#34b563]/50 shadow-[0_0_20px_rgba(109,254,156,0.25)] bg-[#0f2137]/70 backdrop-blur-xl flex items-center justify-center">
            <Bell className="w-9 h-9 text-[#34b563] animate-pulse drop-shadow-[0_0_15px_rgba(109,254,156,0.8)]" />
          </div>

          {/* Orbiting Channel Indicator */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0b1929] border border-[#34b563]/40 text-[#34b563] text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34b563] animate-ping" />
            {activeChannel === 'whatsapp' ? 'WhatsApp API Online' : activeChannel === 'email' ? 'SMTP Relay Online' : 'Telegram Bot API Online'}
          </div>
        </div>

        {/* Live Simulator Action Box */}
        <div className="relative z-20 mt-6 w-full max-w-sm p-4 rounded-2xl bg-[#0f2137]/90 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="flex items-center justify-between text-xs text-white/80 mb-2">
            <span className="font-semibold text-[#34b563] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              Simulador de Disparo
            </span>
            <span className="text-white/40">Sandbox v2.4</span>
          </div>

          <div className="bg-black/40 rounded-xl p-3 text-xs font-mono text-slate-300 border border-white/5 mb-3">
            {activeChannel === 'whatsapp' && (
              <span>POST /v1/messages {"->"} {"{\"to\": \"+52...\", \"template\": \"auth_otp\"}"}</span>
            )}
            {activeChannel === 'email' && (
              <span>POST /v2/smtp/send {"->"} {"{\"template\": \"invoice_ready\", \"priority\": \"high\"}"}</span>
            )}
            {activeChannel === 'telegram' && (
              <span>POST /bot/sendMessage {"->"} {"{\"chat_id\": \"@alerts\", \"parse_mode\": \"HTML\"}"}</span>
            )}
          </div>

          <button
            onClick={simulateDispatch}
            disabled={isSending}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#34b563] to-[#2a9d52] hover:brightness-110 text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(109,254,156,0.3)] disabled:opacity-50"
          >
            {isSending ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Transmitiendo Paquete...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Ejecutar Notificación de Prueba
              </>
            )}
          </button>

          {deliveryStatus && (
            <div className="mt-2 text-center text-[11px] font-mono text-[#34b563] animate-fade-in">
              {deliveryStatus}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
