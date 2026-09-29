import React, { useState } from 'react';
import { NavSection, PortfolioProject } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { ArrowRight, Layers, Sparkles, TrendingUp, Cpu, CheckCircle2, ShieldCheck, Filter } from 'lucide-react';

interface Props {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const PortfolioView: React.FC<Props> = ({ onNavigate, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'crm', label: 'Sistemas CRM' },
    { id: 'erp', label: 'Plataformas ERP' },
    { id: 'healthtech', label: 'HealthTech' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f3d2a]/50 border border-[#34b563]/40 text-[#34b563] text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(109,254,156,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#34b563] animate-ping" />
            <span>Casos de Éxito</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Ingeniería de Software de Alto Impacto
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Explore cómo transformamos retos técnicos complejos en soluciones de software de clase mundial para líderes de la industria.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#34b563] text-[#0a2218] font-bold shadow-[0_0_15px_rgba(109,254,156,0.3)]'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, idx) => {
            const isWide = project.featured && selectedCategory === 'all';

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`group relative rounded-3xl bg-[#0f2137]/70 hover:bg-[#0f2137] border border-white/10 hover:border-[#34b563]/40 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between cursor-pointer ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                {/* Image Section */}
                <div className={`relative w-full overflow-hidden ${isWide ? 'h-72 md:h-96' : 'h-64'}`}>
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2137] via-[#0f2137]/40 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full bg-[#0b1929]/80 backdrop-blur-md border border-[#34b563]/30 text-[#34b563] text-xs font-semibold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Action Floating Button */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#0b1929]/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#34b563] group-hover:text-[#0a2218] group-hover:border-[#34b563] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Montserrat'] mb-3 group-hover:text-[#34b563] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics Footer Bar */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                          {project.metrics.primaryLabel}
                        </span>
                        <span className="text-xl font-black text-[#34b563] font-['Montserrat']">
                          {project.metrics.primaryValue}
                        </span>
                      </div>
                      {project.metrics.secondaryLabel && (
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                            {project.metrics.secondaryLabel}
                          </span>
                          <span className="text-xl font-black text-[#5a9bd5] font-['Montserrat']">
                            {project.metrics.secondaryValue}
                          </span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#34b563] text-white hover:text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 border border-white/10 transition-all"
                    >
                      <span>Ver Arquitectura</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#0f3d2a]/30 via-[#0f2137] to-[#1a3a5c]/30 border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-['Montserrat']">
              Desarrollemos su Próximo Caso de Éxito
            </h3>
            <p className="text-sm text-slate-300 font-light">
              Nuestra metodología de ingeniería ágil y arquitectura modular garantiza entregas predecibles y escalabilidad sin compromisos.
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

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onConsult={() => {
          setActiveProject(null);
          onOpenConsultation();
        }}
      />
    </div>
  );
};
