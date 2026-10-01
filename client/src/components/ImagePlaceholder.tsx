import React, { useState } from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto" | "wide";
  className?: string;
  badgeLabel?: string;
  caption?: string;
  onClick?: () => void;
  priority?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  aspectRatio = "auto",
  className = "",
  badgeLabel,
  caption,
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]",
    auto: "",
  }[aspectRatio];

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 transition-all duration-300 ${
        onClick ? "cursor-pointer hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/10" : ""
      } ${aspectClasses} ${className}`}
    >
      {/* Imagem real quando carregada com sucesso */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Placeholder elegante quando o arquivo ainda não existe ou está carregando */}
      {(hasError || !isLoaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-slate-900/95 via-slate-950 to-slate-900/90">
          <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-800/60 shadow-inner group-hover:border-sky-500/40 group-hover:bg-sky-500/10 transition-colors">
            <ImageIcon className="h-7 w-7 text-sky-400/80 group-hover:text-sky-300 transition-colors" />
            <Sparkles className="absolute -top-1 -right-1 h-3.5 w-3.5 text-purple-400" />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-sky-300 mb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            {badgeLabel || "IMAGEM A ADICIONAR"}
          </div>

          <p className="max-w-[85%] text-xs text-slate-400 font-mono line-clamp-2">
            {alt}
          </p>

          <span className="mt-2 text-[10px] text-slate-500 font-mono tracking-tight">
            pasta: <code className="text-slate-400">{src.replace("/images/", "images/")}</code>
          </span>
        </div>
      )}

      {/* Legenda opcional na parte inferior */}
      {caption && isLoaded && !hasError && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-3 pt-6 text-xs text-slate-300 font-medium">
          {caption}
        </div>
      )}
    </div>
  );
};
