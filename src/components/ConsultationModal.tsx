import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldAlert, Cpu, Terminal, ArrowRight, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Sistemas a la Medida (CRM / ERP)',
    timeline: '3 - 6 meses',
    budget: '$25,000 - $60,000 USD',
    selectedTechs: ['React', 'Node.js', 'Azure Functions'],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleTech = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTechs: prev.selectedTechs.includes(tech)
        ? prev.selectedTechs.filter((t) => t !== tech)
        : [...prev.selectedTechs, tech],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/marlon93gm@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.fullName,
          Correo: formData.email,
          Empresa: formData.company,
          TipoProyecto: formData.projectType,
          TiempoEstimado: formData.timeline,
          Presupuesto: formData.budget,
          Tecnologias: formData.selectedTechs.join(', '),
          Mensaje: formData.message,
          _subject: 'Nueva Cotización de Proyecto'
        })
      });
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#34b563', '#5a9bd5', '#ffffff'],
      });
    } catch (error) {
      console.error('Error al enviar el formulario', error);
      setIsSubmitting(false);
      // Aun así mostramos la pantalla de éxito como fallback
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0f2137] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#34b563]/10 text-[#34b563] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#34b563]/20">
              <span className="w-2 h-2 rounded-full bg-[#34b563] animate-pulse" />
              Diagnóstico & Arquitectura
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white font-['Montserrat']">
              Iniciar Consulta Técnica
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#34b563] hover:text-[#0a2218] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#0f3d2a] border-2 border-[#34b563] text-[#34b563] flex items-center justify-center shadow-[0_0_30px_rgba(109,254,156,0.4)] animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2 max-w-md">
                <h3 className="text-2xl font-bold text-white font-['Montserrat']">
                  ¡Solicitud Técnica Recibida!
                </h3>
                <p className="text-sm text-slate-300">
                  Nuestro equipo de arquitectos de software analizará sus requerimientos para{' '}
                  <strong className="text-[#34b563]">{formData.company || 'su empresa'}</strong> y le contactará en menos de 4 horas hábiles.
                </p>
              </div>

              {/* Summary card */}
              <div className="w-full bg-[#0b1929] rounded-2xl p-5 border border-white/10 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Contacto:</span>
                  <span className="text-white font-medium">{formData.fullName} ({formData.email})</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Tipo de Proyecto:</span>
                  <span className="text-[#34b563] font-medium">{formData.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Stack Preliminar:</span>
                  <span className="text-slate-200">{formData.selectedTechs.join(', ')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href={`https://wa.me/5212381356972?text=${encodeURIComponent(
                    `Hola Marlon, he solicitado una consulta técnica para ${formData.company || 'mi proyecto'}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#34b563] text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-110"
                >
                  <MessageSquare className="w-4 h-4" />
                  Abrir WhatsApp Directo
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type of Project */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  1. Tipo de Solución Requerida
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Sistemas a la Medida (CRM / ERP)',
                    'Aplicaciones Móviles (iOS / Android)',
                    'Infraestructura Cloud & DevOps',
                    'Módulo Omnicanal & Mensajería',
                    'Auditoría & Refactorización de Arquitectura',
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`text-left p-3 rounded-xl text-xs font-medium border transition-all ${
                        formData.projectType === type
                          ? 'bg-[#1a3a5c]/40 border-[#34b563] text-white shadow-[0_0_15px_rgba(109,254,156,0.15)]'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tech Stack Picker */}
              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                  2. Tecnologías de Interés (Seleccione las aplicables)
                </label>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Angular', 'Node.js', '.NET', 'SQL Server', 'MongoDB', 'Azure Functions', 'AWS', 'Docker / K8s'].map(
                    (tech) => {
                      const isSelected = formData.selectedTechs.includes(tech);
                      return (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => toggleTech(tech)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                            isSelected
                              ? 'bg-[#34b563]/20 border-[#34b563] text-[#34b563]'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          {tech} {isSelected ? '✓' : '+'}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Ing. Carlos Mendoza"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#0b1929] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#34b563] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Correo Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0b1929] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#34b563] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Empresa / Organización
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Nova Logistics Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0b1929] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#34b563] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                    Tiempo Estimado de Entrega
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-[#0b1929] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#34b563] transition-colors"
                  >
                    <option value="1 - 3 meses">1 - 3 meses (Sprint Acelerado)</option>
                    <option value="3 - 6 meses">3 - 6 meses (Enterprise Ecosistema)</option>
                    <option value="6+ meses">6+ meses (Transformación Completa)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1.5">
                  Descripción Breve del Desafío Técnico
                </label>
                <textarea
                  rows={3}
                  placeholder="Detalles sobre volumen de usuarios, requerimientos de escalabilidad, integraciones existentes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0b1929] border border-white/15 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#34b563] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-[#34b563] text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-[0_0_25px_rgba(109,254,156,0.3)] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Procesando Solicitud...</span>
                ) : (
                  <>
                    <span>Enviar Solicitud a Arquitectura</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
