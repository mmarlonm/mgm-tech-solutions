import React, { useState } from 'react';
import { NavSection } from '../types';
import { AVATAR_URL } from '../data/mockData';
import { Menu, X, Sparkles, ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { getAssetUrl } from '../utils/assetPath';

interface Props {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<Props> = ({ currentSection, onNavigate, onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavSection; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'portafolio', label: 'Portafolio' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b1929]/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <img src={getAssetUrl('/mgm-logo.png')} alt="MGM Tech Solutions Logo" className="h-12 w-auto group-hover:scale-105 transition-transform object-contain" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0f2137]/90 p-1.5 rounded-full border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-[#0a2218] bg-[#34b563] shadow-[0_0_20px_rgba(109,254,156,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA and Avatar */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-full bg-[#34b563] hover:bg-[#2a9d52] text-[#0a2218] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(109,254,156,0.35)] transition-all hover:scale-105"
          >
            <span>Consultar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* User Profile avatar */}
          <div className="relative group cursor-pointer" onClick={() => onNavigate('inicio')}>
            <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#34b563] to-[#5a9bd5] overflow-hidden shadow-lg">
              <img
                src={AVATAR_URL}
                alt="Avatar MGM"
                className="w-full h-full rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#34b563] border-2 border-[#0b1929]" />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConsultation}
            className="px-3 py-1.5 rounded-full bg-[#34b563] text-[#0a2218] font-bold text-[11px] uppercase tracking-wider"
          >
            Consultar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#0f2137] border-b border-white/10 space-y-2 animate-fade-in">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                  isActive
                    ? 'bg-[#34b563] text-[#0a2218] font-bold shadow-[0_0_15px_rgba(109,254,156,0.3)]'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs">●</span>}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
