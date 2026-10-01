import React, { useState } from "react";
import { MessageSquareQuote, Lock, Unlock } from "lucide-react";
import { siteConfig } from "../config/siteData";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface QuoteCardsProps {
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

export const QuoteCards: React.FC<QuoteCardsProps> = ({ onOpenLightbox }) => {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="frases" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 font-mono text-xs text-slate-400 mb-4">
          <MessageSquareQuote className="h-3.5 w-3.5 text-purple-400" />
          ARQUIVO DE FRASES // LENDAS DA TURMA
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Frases que <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">entraram para a história</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {siteConfig.quotes.map((quote) => {
          const isSecret = quote.isEasterEgg || quote.isInteractive;
          const isOpen = revealed[quote.id];

          return (
            <div
              key={quote.id}
              className={`relative rounded-2xl border bg-slate-900/70 p-5 transition-all duration-300 ${
                quote.isAmazonQ
                  ? "border-amber-500/30 hover:border-amber-400/50"
                  : isSecret
                  ? "border-rose-500/20 hover:border-rose-400/40"
                  : "border-white/8 hover:border-purple-500/30"
              }`}
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-800/60 px-2.5 py-0.5 text-[10px] font-mono text-slate-400 mb-3">
                {isSecret ? (isOpen ? <Unlock className="h-3 w-3 text-emerald-400" /> : <Lock className="h-3 w-3 text-rose-400" />) : null}
                {quote.badge}
              </span>

              {/* Frase */}
              <blockquote className="text-lg font-bold text-white mb-1 leading-snug">
                "{quote.text}"
              </blockquote>
              <p className="text-xs font-mono text-slate-400 mb-3">— {quote.author}</p>

              {/* Descrição */}
              {(!isSecret || isOpen) && (
                <p className="text-sm text-slate-300 leading-relaxed mb-3 animate-in fade-in duration-300">
                  {quote.description}
                </p>
              )}

              {/* Imagem secreta */}
              {quote.hasImage && quote.imageKey && isOpen && (
                <div className="aspect-video rounded-xl overflow-hidden mb-3 animate-in fade-in duration-300">
                  <ImagePlaceholder
                    src={siteConfig.images[quote.imageKey as keyof typeof siteConfig.images]}
                    alt={quote.text}
                    aspectRatio="video"
                    badgeLabel="ARQUIVO SECRETO"
                    onClick={() =>
                      onOpenLightbox?.(
                        siteConfig.images[quote.imageKey as keyof typeof siteConfig.images],
                        quote.text,
                        quote.description
                      )
                    }
                  />
                </div>
              )}

              {/* Botão revelar */}
              {isSecret && (
                <button
                  onClick={() => toggle(quote.id)}
                  className={`w-full rounded-lg border px-3 py-2 text-xs font-mono font-bold transition-colors ${
                    isOpen
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                      : "border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20"
                  }`}
                >
                  {isOpen ? "▲ OCULTAR ARQUIVO" : "▼ REVELAR ARQUIVO SECRETO"}
                </button>
              )}

              {/* Amazon Q badge especial */}
              {quote.isAmazonQ && (
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-amber-400">
                  <span>🤖</span> Powered by Amazon Q Developer
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
