import React from "react";
import { Github, Bot, Music, Coffee, AlertTriangle, MessageSquare } from "lucide-react";
import { siteConfig } from "../config/siteData";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  teams: <MessageSquare className="h-5 w-5" />,
  bot: <Bot className="h-5 w-5" />,
  music: <Music className="h-5 w-5" />,
  coffee: <Coffee className="h-5 w-5" />,
  alert: <AlertTriangle className="h-5 w-5" />,
};

export const TechSkills: React.FC = () => {
  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 font-mono text-xs text-slate-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          MÉTRICAS DO LABORATÓRIO // DADOS REAIS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tecnologias & <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Estatísticas</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
          Os números que definiram nossa jornada técnica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {siteConfig.techStats.map((stat) => (
          <div
            key={stat.name}
            className="rounded-2xl border border-white/8 bg-slate-900/60 p-5 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-slate-950 shadow-lg`}>
                {iconMap[stat.icon] ?? <Bot className="h-5 w-5" />}
              </div>
              <div>
                <p className="font-mono text-sm font-bold text-white">{stat.name}</p>
                <p className="text-[11px] text-slate-400">{stat.desc}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-slate-400">Nível</span>
              <span className="text-xs font-mono font-bold text-white">{stat.percent}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                style={{ width: `${stat.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
