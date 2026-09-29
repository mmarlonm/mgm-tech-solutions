import React, { useState } from 'react';
import { PortfolioProject } from '../types';
import { X, ExternalLink, Cpu, Layers, CheckCircle2, TrendingUp, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface Props {
  project: PortfolioProject | null;
  onClose: () => void;
  onConsult: () => void;
}

export const ProjectDetailModal: React.FC<Props> = ({ project, onClose, onConsult }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f2137] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl flex flex-col">
        {/* Header Image with Gradient */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2137] via-[#0f2137]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#34b563] hover:text-[#0a2218] transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-[#34b563]/20 text-[#34b563] text-xs font-semibold uppercase backdrop-blur-md border border-[#34b563]/30"
                >
                  {tag}
                </span>
              ))}
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase backdrop-blur-md border border-white/20">
                {project.clientIndustry}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-['Montserrat']">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 flex flex-col gap-8">
          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <div>
              <span className="text-xs text-slate-400 block uppercase tracking-wider">{project.metrics.primaryLabel}</span>
              <span className="text-2xl font-black text-[#34b563] font-['Montserrat']">{project.metrics.primaryValue}</span>
            </div>
            {project.metrics.secondaryLabel && (
              <div>
                <span className="text-xs text-slate-400 block uppercase tracking-wider">{project.metrics.secondaryLabel}</span>
                <span className="text-2xl font-black text-[#5a9bd5] font-['Montserrat']">{project.metrics.secondaryValue}</span>
              </div>
            )}
            <div>
              <span className="text-xs text-slate-400 block uppercase tracking-wider">Año de Entrega</span>
              <span className="text-2xl font-bold text-white font-['Montserrat']">{project.deliveryYear}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 block uppercase tracking-wider">Disponibilidad SLA</span>
              <span className="text-2xl font-bold text-[#34b563] font-['Montserrat']">99.99%</span>
            </div>
          </div>

          {/* Description & Overview */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-['Montserrat'] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#34b563]" />
              Resumen Ejecutivo y Desafío Técnico
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              {project.description}
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              {project.fullOverview}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-['Montserrat'] flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#5a9bd5]" />
              Pilares de la Arquitectura
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.architectureDetails.map((detail, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0b1929] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#34b563] shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-slate-300">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Tecnologías Implementadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/15 text-sm font-medium text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Module */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-white font-['Montserrat'] flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-[#34b563]" />
                Capturas del Sistema
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedImage(img)}
                    className="w-full text-left rounded-xl overflow-hidden border border-white/10 hover:border-[#34b563]/50 transition-all block bg-black group relative focus:outline-none"
                  >
                    <img src={img} alt={`${project.title} - Captura ${idx + 1}`} className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#34b563]/0 group-hover:bg-[#34b563]/10 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* CTA Footer in Modal */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white">¿Requiere una arquitectura con especificaciones similares?</p>
              <p className="text-xs text-slate-400">Nuestros arquitectos de software le proporcionarán un diagnóstico detallado.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onConsult();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#34b563] text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(109,254,156,0.3)] hover:brightness-110 transition-all"
            >
              Iniciar Consulta Técnica
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md animate-fade-in cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#34b563] hover:text-[#0a2218] transition-all z-[70]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Captura ampliada" 
            className="max-w-full max-h-full object-contain rounded-xl border border-white/10 shadow-2xl cursor-default" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
