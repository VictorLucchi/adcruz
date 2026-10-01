import React from "react";
import { siteConfig } from "../config/siteData";

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="jornada" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 font-mono text-xs text-slate-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          LINHA DO TEMPO // JORNADA DA TURMA
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Nossa <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">Jornada</span>
        </h2>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Linha vertical */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-purple-500/30 to-transparent hidden sm:block" />

        <div className="space-y-6">
          {siteConfig.timelineSteps.map((step, i) => {
            const isSpecial = step.code.includes("🚨") || step.code.includes("❤️");
            return (
              <div key={step.step} className="flex gap-5 items-start group">
                {/* Número */}
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border font-mono text-sm font-bold transition-all duration-300 group-hover:scale-110 ${
                    isSpecial
                      ? "border-rose-500/40 bg-rose-950/40 text-rose-300"
                      : "border-sky-500/30 bg-slate-900 text-sky-300"
                  }`}
                >
                  {step.step}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 rounded-xl border border-white/8 bg-slate-900/60 p-4 group-hover:border-white/15 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                        isSpecial
                          ? "border-rose-500/30 bg-rose-500/10 text-rose-300"
                          : "border-sky-500/20 bg-sky-500/10 text-sky-300"
                      }`}
                    >
                      {step.code}
                    </span>
                    <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
