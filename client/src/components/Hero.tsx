import React from "react";
import { Bot, Brain, ShieldAlert, ChevronDown, Sparkles, Terminal } from "lucide-react";
import { siteConfig } from "../config/siteData";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface HeroProps {
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLightbox }) => {
  return (
    <section id="topo" className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden">
      {/* Luzes de fundo ambientais sutis */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Tagline superior estilo status de sistema */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-950/40 px-4 py-1.5 backdrop-blur-md shadow-sm">
            <Terminal className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-mono text-xs font-medium text-sky-300">
              REPOSITÓRIO DA TURMA // HOMENAGEM OFICIAL
            </span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>

        {/* Título Principal de Impacto */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              {siteConfig.title}
            </span>
          </h1>
          <p className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-sky-400 mb-6 uppercase">
            {siteConfig.subtitle}
          </p>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            "{siteConfig.heroQuote}"
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto italic">
            "{siteConfig.tagline}"
          </p>
        </div>

        {/* Indicadores requeridos: IA, LÓGICA, RESGATE DE TCC */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8">
          <div className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-950/30 px-4 py-2 font-mono text-xs sm:text-sm text-purple-200 shadow-sm backdrop-blur-sm">
            <span className="text-lg">🤖</span>
            <span className="font-bold tracking-wider">IA</span>
            <span className="text-[10px] text-purple-400 font-mono hidden sm:inline">[ADRIANO]</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-sky-950/30 px-4 py-2 font-mono text-xs sm:text-sm text-sky-200 shadow-sm backdrop-blur-sm">
            <span className="text-lg">🧠</span>
            <span className="font-bold tracking-wider">LÓGICA</span>
            <span className="text-[10px] text-sky-400 font-mono hidden sm:inline">[CRUZ]</span>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-950/30 px-4 py-2 font-mono text-xs sm:text-sm text-rose-200 shadow-sm backdrop-blur-sm">
            <span className="text-lg">🚨</span>
            <span className="font-bold tracking-wider">RESGATE DE TCC</span>
            <span className="text-[10px] text-rose-400 font-mono hidden sm:inline">[DUPLA DINÂMICA]</span>
          </div>
        </div>

        {/* Imagem Principal: Os Papais do T.I. juntos */}
        <div className="max-w-3xl mx-auto my-8">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={siteConfig.images.papaisHero}
              alt="Adriano & Cruz — Os Papais do T.I."
              className="w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => onOpenLightbox?.(siteConfig.images.papaisHero, "Os Papais do T.I.", "Adriano & Cruz — a dupla dinâmica")}
            />
          </div>
        </div>

        {/* Dois Espaços Principais para Fotos: Adriano e Cruz */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto my-10">
          {/* Foto Adriano */}
          <div className="group relative rounded-2xl border border-purple-500/30 bg-slate-900/80 p-4 shadow-xl transition-all duration-300 hover:border-purple-400/60 hover:shadow-purple-500/10">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-300">
                  PROFESSOR ADRIANO
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">IA & GAITA</span>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
              <ImagePlaceholder
                src={siteConfig.images.adrianoHero}
                alt="Foto do Professor Adriano"
                aspectRatio="auto"
                badgeLabel="FOTO DO ADRIANO"
                className="w-full h-full"
                onClick={() => onOpenLightbox?.(siteConfig.images.adrianoHero, "Professor Adriano", "Especialista em IA e mestre da gaita")}
              />
            </div>
            
            <div className="mt-3 text-center">
              <p className="text-xs font-mono text-slate-400">
                Arquivo: <code className="text-purple-300">images/adriano.jpg</code>
              </p>
            </div>
          </div>

          {/* Foto Cruz */}
          <div className="group relative rounded-2xl border border-sky-500/30 bg-slate-900/80 p-4 shadow-xl transition-all duration-300 hover:border-sky-400/60 hover:shadow-sky-500/10">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-300">
                  PROFESSOR CRUZ
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">LÓGICA & FAZ TUDO</span>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
              <ImagePlaceholder
                src={siteConfig.images.cruzHero}
                alt="Foto do Professor Cruz"
                aspectRatio="auto"
                badgeLabel="FOTO DO CRUZ"
                className="w-full h-full"
                onClick={() => onOpenLightbox?.(siteConfig.images.cruzHero, "Professor Cruz", "Especialista em lógica e solução de problemas")}
              />
            </div>

            <div className="mt-3 text-center">
              <p className="text-xs font-mono text-slate-400">
                Arquivo: <code className="text-sky-300">images/cruz.jpg</code>
              </p>
            </div>
          </div>
        </div>

        {/* Botão de Ação: ENTRAR NO ARQUIVO */}
        <div className="flex flex-col items-center justify-center mt-6">
          <a
            href="#professores"
            className="group relative inline-flex items-center gap-3 rounded-2xl border border-sky-400/40 bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-base font-mono font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-sky-500/40 hover:from-sky-400 hover:to-indigo-500"
          >
            <Sparkles className="h-5 w-5 text-slate-950 transition-transform group-hover:rotate-12" />
            <span>ENTRAR NO ARQUIVO</span>
            <ChevronDown className="h-5 w-5 text-slate-950 transition-transform group-hover:translate-y-1" />
          </a>
          <span className="mt-3 text-[11px] font-mono text-slate-500">
            Clique para descer até as fichas de personagens e disciplinas
          </span>
        </div>
      </div>
    </section>
  );
};
