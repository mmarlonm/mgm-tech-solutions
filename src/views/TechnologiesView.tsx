import React, { useState } from 'react';
import { NavSection, TechItem } from '../types';
import { TECH_STACK } from '../data/mockData';
import { SynapticNetworkCanvas } from '../components/SynapticNetworkCanvas';
import {
  Code,
  FileCode,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Zap,
  Activity,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Share2,
} from 'lucide-react';

interface Props {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const TechnologiesView: React.FC<Props> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Bases de Datos' },
    { id: 'cloud', label: 'Cloud & Serverless' },
  ];

  const filteredTechs =
    selectedCategory === 'all'
      ? TECH_STACK
      : TECH_STACK.filter((t) => t.category === selectedCategory);

  const getTechIcon = (id: string) => {
    switch (id) {
      case 'angular':
      case 'react':
        return <Code className="w-6 h-6" />;
      case 'nodejs':
        return <Terminal className="w-6 h-6" />;
      case 'dotnet':
        return <Cpu className="w-6 h-6" />;
      case 'sqlserver':
      case 'mongodb':
        return <Database className="w-6 h-6" />;
      case 'azurefunctions':
        return <Cloud className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f3d2a]/50 border border-[#34b563]/40 text-[#34b563] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(109,254,156,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#34b563] animate-ping" />
            <span>Ecosistema Digital</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Núcleo Tecnológico
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Especialización de alto nivel en las herramientas que definen el estándar de la industria. Diseñado para rendimiento, seguridad y escalabilidad.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#34b563] text-[#0a2218] shadow-[0_0_15px_rgba(109,254,156,0.3)] font-bold'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredTechs.map((tech) => (
            <div
              key={tech.id}
              className="group p-6 rounded-3xl bg-[#0f2137]/70 hover:bg-[#0f2137] border border-white/10 hover:border-[#34b563]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-[#34b563] group-hover:border-[#34b563]/40 transition-colors">
                    {getTechIcon(tech.id)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-2 flex items-center gap-2">
                  {tech.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light mb-4 leading-relaxed">
                  {tech.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-3 border-t border-white/5 mb-4">
                  {tech.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34b563] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 bg-white/[0.02] p-3 rounded-2xl">
                {tech.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <span className="text-[10px] text-slate-400 block">{m.label}</span>
                    <span className="text-xs font-bold text-[#34b563]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION: Arquitectura Sináptica (Synaptic Network Canvas) */}
        <div className="mb-20 space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3a5c]/40 border border-[#5a9bd5]/30 text-[#7db3d9] text-xs font-semibold uppercase tracking-widest">
              <Share2 className="w-3.5 h-3.5" />
              Integración Continua
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Montserrat']">
              Arquitectura Sináptica
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Nuestras soluciones no operan en silos. Diseñamos ecosistemas interconectados donde cada tecnología actúa como una neurona, transmitiendo datos y lógica con latencia cero.
            </p>
          </div>

          {/* Canvas Component */}
          <SynapticNetworkCanvas />

          {/* 3 Synaptic Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-[#0f2137]/40 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#0f3d2a] text-[#34b563] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-['Montserrat'] mb-1">
                Sincronización en Tiempo Real
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Pipelines de datos basados en eventos que replican el estado transaccional entre servicios sin bloqueos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f2137]/40 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#004178] text-[#7db3d9] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-['Montserrat'] mb-1">
                Orquestación Modular
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Contenedores y funciones Serverless independientes que escalan automáticamente según la demanda del negocio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0f2137]/40 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-['Montserrat'] mb-1">
                Resiliencia Activa
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Circuit breakers, health checks automáticos y conmutación por error para garantizar 99.999% de disponibilidad.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#0f2137] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-['Montserrat'] mb-1">
              ¿Listo para modernizar su infraestructura?
            </h3>
            <p className="text-sm text-slate-400">
              Evaluamos su stack actual y proponemos un roadmap de arquitectura sináptica de alto impacto.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-7 py-3.5 rounded-full bg-[#34b563] text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(109,254,156,0.3)]"
          >
            <span>Agendar Diagnóstico</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
