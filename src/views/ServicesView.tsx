import React from 'react';
import { NavSection, ServiceItem } from '../types';
import { SERVICES_LIST } from '../data/mockData';
import { OmnichannelSimulator } from '../components/OmnichannelSimulator';
import { Cpu, Smartphone, Cloud, ArrowRight, CheckCircle2, Layers, Sparkles, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const ServicesView: React.FC<Props> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f3d2a]/50 border border-[#34b563]/40 text-[#34b563] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(109,254,156,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#34b563] animate-ping" />
            <span>Soluciones Enterprise</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Ingeniería Dinámica
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Desarrollamos soluciones digitales robustas, escalables y seguras, adaptadas con precisión quirúrgica a la lógica operativa de su negocio.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SERVICES_LIST.map((service, idx) => {
            const isFirst = idx === 0;
            const isSecond = idx === 1;
            const isThird = idx === 2;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-[#0f2137]/70 hover:bg-[#0f2137] border border-white/10 hover:border-[#34b563]/40 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Glow accent in background */}
                <div
                  className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40 ${
                    isFirst ? 'bg-[#34b563]' : isSecond ? 'bg-[#5a9bd5]' : 'bg-[#7db3d9]'
                  }`}
                />

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all ${
                      isFirst
                        ? 'bg-[#0f3d2a] border-[#34b563]/40 text-[#34b563] shadow-[0_0_20px_rgba(109,254,156,0.3)]'
                        : isSecond
                        ? 'bg-[#1a3a5c] border-[#5a9bd5]/40 text-[#5a9bd5] shadow-[0_0_20px_rgba(112,175,255,0.3)]'
                        : 'bg-[#1e293b] border-[#7db3d9]/40 text-[#7db3d9] shadow-[0_0_20px_rgba(164,201,255,0.3)]'
                    }`}
                  >
                    {isFirst && <Layers className="w-7 h-7" />}
                    {isSecond && <Smartphone className="w-7 h-7" />}
                    {isThird && <Cloud className="w-7 h-7" />}
                  </div>

                  {/* Subtitle */}
                  <span className="text-[11px] font-bold text-[#34b563] uppercase tracking-widest block mb-1">
                    {service.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white font-['Montserrat'] mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#34b563] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tags & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#34b563] text-white hover:text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 hover:border-[#34b563] transition-all"
                  >
                    <span>Cotizar Solución</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Omnichannel Communication Module with Simulator */}
        <OmnichannelSimulator />

        {/* Bottom Banner CTA */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0f3d2a]/40 via-[#0f2137] to-[#1a3a5c]/40 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-['Montserrat']">
              ¿Tiene un Requerimiento Técnico Complejo?
            </h3>
            <p className="text-sm text-slate-300 font-light">
              Nuestros ingenieros senior están listos para diseñar la arquitectura óptima, estimar recursos y acelerar su ciclo de entrega.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="shrink-0 px-8 py-4 rounded-full bg-[#34b563] hover:bg-[#2a9d52] text-[#0a2218] font-black text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(109,254,156,0.4)] transition-all hover:scale-105"
          >
            Iniciar Consulta Técnica
          </button>
        </div>
      </div>
    </div>
  );
};
