import React from 'react';
import { NavSection } from '../types';
import { HERO_OFFICE_IMG, AVATAR_URL } from '../data/mockData';
import { HomeHero3D } from '../components/HomeHero3D';
import { MessageSquare, Mail, Send, ArrowRight, ShieldCheck, Cpu, Sparkles, Layers, ChevronRight, Zap } from 'lucide-react';

interface Props {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const HomeView: React.FC<Props> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="relative min-h-screen">
      {/* HERO SECTION with 3D WebGL Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-16 lg:py-24">
        <HomeHero3D />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0f3d2a]/50 border border-[#34b563]/40 text-[#34b563] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(109,254,156,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#34b563] animate-ping" />
              <span>Innovación Constante</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Montserrat'] leading-[1.15]">
              Soluciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34b563] via-[#2a9d52] to-[#5a9bd5]">
                Tecnológicas
              </span>{' '}
              a la Medida
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
              Transformamos desafíos complejos en software escalable y robusto. Arquitectura moderna, alto rendimiento y soluciones personalizadas para su empresa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('servicios')}
                className="px-7 py-3.5 rounded-full bg-[#34b563] hover:bg-[#2a9d52] text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(109,254,156,0.35)] transition-all hover:scale-105"
              >
                <span>Explorar Servicios</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-full bg-[#0f2137]/80 hover:bg-[#1e293b] text-white border border-white/20 font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all hover:border-[#34b563]/50 flex items-center gap-2"
              >
                <span>Iniciar Proyecto</span>
                <Sparkles className="w-4 h-4 text-[#34b563]" />
              </button>
            </div>

            {/* Key Metrics quick strip */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-lg">
              <div>
                <span className="text-2xl lg:text-3xl font-black text-white font-['Montserrat']">99.99%</span>
                <span className="text-xs text-slate-400 block mt-0.5">Uptime Garantizado</span>
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-black text-[#34b563] font-['Montserrat']">&lt; 10ms</span>
                <span className="text-xs text-slate-400 block mt-0.5">Latencia de Red</span>
              </div>
              <div>
                <span className="text-2xl lg:text-3xl font-black text-[#5a9bd5] font-['Montserrat']">100%</span>
                <span className="text-xs text-slate-400 block mt-0.5">Código a Medida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO GRID: Omnichannel Channels & Stack Overview */}
      <section className="py-16 bg-[#081420] relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#34b563]">
                Capacidades Integradas
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-['Montserrat'] mt-1">
                Ecosistemas Digitales Omnicanal
              </h2>
            </div>
            <button
              onClick={() => onNavigate('servicios')}
              className="text-xs font-bold uppercase tracking-wider text-[#34b563] flex items-center gap-1 hover:underline"
            >
              Ver todas las soluciones <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* WhatsApp Card */}
            <div
              onClick={() => onNavigate('servicios')}
              className="group p-8 rounded-3xl bg-[#0f2137]/70 hover:bg-[#0f2137] border border-white/10 hover:border-[#34b563]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-white/10 group-hover:text-[#34b563]/20 transition-colors">
                <MessageSquare className="w-20 h-20" />
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0f3d2a] text-[#34b563] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(109,254,156,0.3)]">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-2">WhatsApp Business</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Mensajería instantánea, chatbots inteligentes y automatizaciones transaccionales para potenciar su atención al cliente.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#34b563] font-semibold">+120% Retención</span>
                <span className="text-white/60 flex items-center gap-1 group-hover:text-white">
                  Explorar <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div
              onClick={() => onNavigate('servicios')}
              className="group p-8 rounded-3xl bg-[#0f2137]/70 hover:bg-[#0f2137] border border-white/10 hover:border-[#5a9bd5]/40 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-white/10 group-hover:text-[#5a9bd5]/20 transition-colors">
                <Mail className="w-20 h-20" />
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004178] text-[#7db3d9] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(164,201,255,0.3)]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-2">Email Transaccional</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Campañas segmentadas, notificaciones automatizadas y alta entregabilidad con infraestructura SMTP dedicada.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#5a9bd5] font-semibold">99.8% Entregabilidad</span>
                <span className="text-white/60 flex items-center gap-1 group-hover:text-white">
                  Explorar <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Telegram Card */}
            <div
              onClick={() => onNavigate('servicios')}
              className="group p-8 rounded-3xl bg-[#0f2137]/70 hover:bg-[#0f2137] border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-white/10 group-hover:text-white/20 transition-colors">
                <Send className="w-20 h-20" />
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Montserrat'] mb-2">Telegram Integration</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  Alertas en tiempo real, canales corporativos seguros y bots interactivos para flujos operativos internos.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white font-semibold">0ms Latencia Push</span>
                <span className="text-white/60 flex items-center gap-1 group-hover:text-white">
                  Explorar <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Large Bento Card: Team & Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl bg-[#0f2137]/80 border border-white/10 overflow-hidden shadow-2xl">
            {/* Image Col */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
              <img
                src={HERO_OFFICE_IMG}
                alt="Ingeniería y arquitectura de software MGM"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2137] via-[#0f2137]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f2137]" />
              <div className="absolute bottom-6 left-6 p-3 rounded-2xl bg-[#0b1929]/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34b563] animate-pulse" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Silicon Valley Engineering
                  </span>
                </div>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3a5c]/40 border border-[#5a9bd5]/30 text-[#7db3d9] text-xs font-semibold uppercase tracking-widest mb-4">
                  <Cpu className="w-3.5 h-3.5" />
                  Stack Tecnológico de Vanguardia
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Montserrat'] mb-4">
                  Arquitecturas Diseñadas para Alto Rendimiento
                </h3>
                <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed mb-6">
                  Frontend reactivo, Backend resiliente, Bases de datos de alta disponibilidad y Despliegue continuo en la nube. Seleccionamos el stack idóneo para cada desafío.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Angular', 'React', 'Node.js', '.NET Core', 'SQL Server', 'MongoDB', 'Azure Functions', 'AWS Cloud', 'Docker'].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  ¿Necesita asesoría sobre la arquitectura ideal para su proyecto?
                </div>
                <button
                  onClick={() => onNavigate('tecnologias')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#34b563] text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                >
                  Ver Núcleo Tecnológico
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-[#0f3d2a]/30 via-[#0f2137] to-[#1a3a5c]/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#34b563] shrink-0 bg-white">
                <img src="/jr-logo.png" alt="JR Ingeniería Eléctrica avatar" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <p className="text-sm md:text-base italic text-slate-200 font-light">
                  "El ecosistema desarrollado por MGM Tech optimizó nuestro análisis de ventas y el seguimiento de cada proyecto mediante notificaciones automáticas."
                </p>
                <span className="text-xs font-semibold text-[#34b563] block mt-1">
                  Dirección General — JR Ingeniería Eléctrica
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('portafolio')}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              Ver Casos de Éxito
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
