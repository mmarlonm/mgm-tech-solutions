import React, { useState, useEffect } from 'react';
import { NavSection } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { TechnologiesView } from './views/TechnologiesView';
import { PortfolioView } from './views/PortfolioView';
import { ConsultationModal } from './components/ConsultationModal';
import { Sparkles, Layers, Cpu, Briefcase, Home, Shield } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('inicio');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Sync with window hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavSection;
      if (['inicio', 'servicios', 'tecnologias', 'portafolio'].includes(hash)) {
        setCurrentSection(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.location.hash = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b1929] text-[#f8fafc] flex flex-col selection:bg-[#34b563]/30 selection:text-[#34b563]">
      {/* Navigation Header */}
      <Header
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Screen Views */}
      <main className="flex-grow">
        {currentSection === 'inicio' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {currentSection === 'servicios' && (
          <ServicesView
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {currentSection === 'tecnologias' && (
          <TechnologiesView
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
        {currentSection === 'portafolio' && (
          <PortfolioView
            onNavigate={handleNavigate}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
      </main>

      {/* Floating Screen Switcher Dock */}
      <aside aria-label="Navegación de Pantallas" className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#0f2137]/90 backdrop-blur-xl border border-white/15 px-3 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-1">
        <button
          onClick={() => handleNavigate('inicio')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentSection === 'inicio'
              ? 'bg-[#34b563] text-[#0a2218] shadow-[0_0_15px_rgba(109,254,156,0.4)]'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
          title="Pantalla Inicio"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Inicio</span>
        </button>

        <button
          onClick={() => handleNavigate('servicios')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentSection === 'servicios'
              ? 'bg-[#34b563] text-[#0a2218] shadow-[0_0_15px_rgba(109,254,156,0.4)]'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
          title="Pantalla Servicios Enterprise"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Servicios</span>
        </button>

        <button
          onClick={() => handleNavigate('tecnologias')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentSection === 'tecnologias'
              ? 'bg-[#34b563] text-[#0a2218] shadow-[0_0_15px_rgba(109,254,156,0.4)]'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
          title="Pantalla Núcleo Tecnológico"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Tecnologías</span>
        </button>

        <button
          onClick={() => handleNavigate('portafolio')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
            currentSection === 'portafolio'
              ? 'bg-[#34b563] text-[#0a2218] shadow-[0_0_15px_rgba(109,254,156,0.4)]'
              : 'text-slate-300 hover:text-white hover:bg-white/5'
          }`}
          title="Pantalla Casos de Éxito / Portafolio"
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Portafolio</span>
        </button>
      </aside>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Consultation & Architecture Request Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
