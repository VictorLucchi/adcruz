import React from "react";
import { Heart } from "lucide-react";
import { siteConfig } from "../config/siteData";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface TributeFinalProps {
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

export const TributeFinal: React.FC<TributeFinalProps> = ({ onOpenLightbox }) => {
  const { title, paragraphs, signature } = siteConfig.tributeFinalText;

  return (
    <section id="obrigado" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="h-5 w-5 text-pink-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Homenagem Final</span>
          <Heart className="h-5 w-5 text-pink-400 animate-pulse" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10 tracking-tight">
          {title}
        </h2>

        {/* Foto final */}
        <div className="aspect-video max-w-lg mx-auto rounded-2xl overflow-hidden mb-10 border border-pink-500/20">
          <ImagePlaceholder
            src={siteConfig.images.finalTribute}
            alt="Adriano e Cruz — Os Papais do T.I."
            aspectRatio="video"
            badgeLabel="FOTO FINAL"
            onClick={() => onOpenLightbox?.(siteConfig.images.finalTribute, "Adriano & Cruz", "Os Papais do T.I.")}
          />
        </div>

        {/* Texto */}
        <div className="space-y-4 mb-10">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`leading-relaxed ${
                i === 0
                  ? "text-xl font-bold text-white"
                  : i === paragraphs.length - 1
                  ? "text-base text-slate-300 italic"
                  : "text-base text-slate-300"
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Assinatura */}
        <div className="inline-block rounded-2xl border border-pink-500/20 bg-pink-950/10 px-8 py-5">
          <pre className="font-mono text-sm text-pink-300 whitespace-pre-wrap text-center">{signature}</pre>
        </div>

        {/* Badges finais */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {["Teams ✓", "GitHub ✓", "Amazon Q ✓", "Gaita ✓", "Café ✓"].map((b) => (
            <span
              key={b}
              className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-mono text-slate-400"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
