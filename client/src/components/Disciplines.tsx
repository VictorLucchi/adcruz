import React, { useState } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { siteConfig } from "../config/siteData";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface DisciplinesProps {
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

export const Disciplines: React.FC<DisciplinesProps> = ({ onOpenLightbox }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="disciplinas" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 font-mono text-xs text-slate-400 mb-4">
          <BookOpen className="h-3.5 w-3.5 text-sky-400" />
          MÓDULOS CURSADOS // ARQUIVO TÉCNICO
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          As <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Disciplinas</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
          Cada matéria foi um capítulo da nossa jornada.
        </p>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {siteConfig.disciplines.map((disc) => {
          const isOpen = expanded === disc.id;
          return (
            <div
              key={disc.id}
              className="rounded-xl border border-white/8 bg-slate-900/60 overflow-hidden transition-all duration-300"
              style={{ borderColor: isOpen ? disc.accentColor + "50" : undefined }}
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
                onClick={() => setExpanded(isOpen ? null : disc.id)}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg border"
                    style={{ color: disc.accentColor, borderColor: disc.accentColor + "40", background: disc.accentColor + "15" }}
                  >
                    {disc.code}
                  </span>
                  <div>
                    <p className="font-semibold text-white text-sm">{disc.name}</p>
                    <p className="text-xs text-slate-400 font-mono">{disc.tagline}</p>
                  </div>
                </div>
                {isOpen
                  ? <ChevronUp className="h-4 w-4 text-slate-400 shrink-0" />
                  : <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                }
              </button>

              {isOpen && (
                <div className="px-5 pb-5 border-t border-white/5 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{disc.description}</p>
                    <ul className="space-y-1.5">
                      {disc.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: disc.accentColor }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    id={disc.id}
                    className="aspect-video rounded-xl overflow-hidden"
                  >
                    <ImagePlaceholder
                      src={disc.image}
                      alt={disc.imageAlt}
                      aspectRatio="video"
                      badgeLabel={disc.code}
                      onClick={() => onOpenLightbox?.(disc.image, disc.name, disc.tagline)}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
