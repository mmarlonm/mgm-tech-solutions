import React from 'react';
import { NavSection } from '../types';
import { Layers, Mail, MapPin, MessageSquare, Facebook, Globe, Github, Linkedin, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="w-full bg-[#081420] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400">
      {/* Glow highlight */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#34b563]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/mgm-logo.png" alt="MGM Tech Solutions Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Innovación dinámica para entornos empresariales de alto nivel. Arquitectura de software, sistemas distribuidos, omnicanalidad y desarrollo a la medida.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/5212381356972?text=Hola%20MGM%20Tech"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#34b563] hover:border-[#34b563]/40 transition-all"
                title="WhatsApp Business"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576442086905"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#1877F2] hover:border-[#1877F2]/40 transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/marlongarciamendez/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#34b563] hover:border-[#34b563]/40 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-['Montserrat']">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-[#34b563] transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicios')} className="hover:text-[#34b563] transition-colors">
                  Servicios Enterprise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tecnologias')} className="hover:text-[#34b563] transition-colors">
                  Núcleo Tecnológico
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portafolio')} className="hover:text-[#34b563] transition-colors">
                  Casos de Éxito
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Soluciones */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-['Montserrat']">
              Soluciones
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('servicios')} className="hover:text-[#34b563] transition-colors">
                  Sistemas CRM & ERP
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicios')} className="hover:text-[#34b563] transition-colors">
                  Apps Móviles React Native
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicios')} className="hover:text-[#34b563] transition-colors">
                  Cloud AWS / Azure / GCP
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicios')} className="hover:text-[#34b563] transition-colors">
                  Notificaciones Omnicanal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 font-['Montserrat']">
              Contacto Técnico
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#34b563]" />
                <span className="text-slate-300">marlon93gm@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#5a9bd5]" />
                <span className="text-slate-300">Tehuacán, Puebla, México</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2 px-4 rounded-xl bg-white/10 hover:bg-[#34b563] hover:text-[#0a2218] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Agendar Llamada
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} MGM Tech Solutions. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacidad & Seguridad</span>
            <span className="hover:text-slate-400 cursor-pointer">Términos de Servicio</span>
            <span className="hover:text-slate-400 cursor-pointer">SOC2 / HIPAA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
