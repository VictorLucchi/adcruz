import React, { useState } from "react";
import { Terminal, Menu, X, ShieldAlert, Heart, Image as GalleryIcon, UserCheck } from "lucide-react";
import { siteConfig } from "../config/siteData";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "PBD", href: "#pbd", desc: "Banco de Dados" },
    { label: "DSA1", href: "#dsa1", desc: "Início do Código" },
    { label: "DSA2", href: "#dsa2", desc: "Aprofundamento" },
    { label: "DSA3", href: "#dsa3", desc: "Sistemas Reais" },
    { label: "LIP3", href: "#lip3", desc: "Lógica e Paradigmas" },
  ];

  const quickLinks = [
    { label: "Os Professores", href: "#professores", icon: UserCheck },
    { label: "Resgate de TCC", href: "#resgate-tcc", icon: ShieldAlert },
    { label: "Galeria", href: "#galeria", icon: GalleryIcon },
    { label: "Obrigado", href: "#obrigado", icon: Heart },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Monograma */}
          <a
            href="#topo"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-500/20 via-slate-900 to-purple-500/20 text-sky-400 shadow-inner group-hover:border-sky-400/60 transition-colors">
              <span className="font-mono text-sm font-bold tracking-tighter">A&C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-white group-hover:text-sky-300 transition-colors">
                {siteConfig.title}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-slate-400">
                {siteConfig.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Nav - Disciplinas requeridas */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-slate-900/60 p-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold text-slate-300 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/30 transition-all border border-transparent"
                title={item.desc}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Atalhos Rápidos */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#resgate-tcc"
              className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-mono font-medium text-red-300 hover:bg-red-500/20 hover:border-red-400/50 transition-colors"
            >
              <ShieldAlert className="h-3.5 w-3.5 animate-pulse text-red-400" />
              Resgate TCC
            </a>
            <a
              href="#obrigado"
              className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-mono font-medium text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50 transition-colors"
            >
              <Heart className="h-3.5 w-3.5 text-pink-400" />
              Homenagem
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-slate-950/95 px-4 pt-2 pb-6 space-y-3 backdrop-blur-2xl">
          <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider px-2 pt-1">
            Disciplinas Técnicas
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col p-2.5 rounded-lg border border-white/5 bg-slate-900/60 font-mono text-sm text-slate-200 hover:bg-sky-500/20 hover:border-sky-500/40"
              >
                <span className="font-bold text-sky-400">{item.label}</span>
                <span className="text-[10px] text-slate-400">{item.desc}</span>
              </a>
            ))}
          </div>

          <div className="font-mono text-[11px] text-slate-500 uppercase tracking-wider px-2 pt-2">
            Seções Principais
          </div>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((q) => {
              const Icon = q.icon;
              return (
                <a
                  key={q.label}
                  href={q.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg border border-white/5 bg-slate-900/40 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5 text-sky-400" />
                  {q.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
