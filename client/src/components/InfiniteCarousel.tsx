import React from "react";
import { siteConfig, GalleryImage } from "../config/siteData";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface TrackProps {
  images: GalleryImage[];
  direction: "left" | "right";
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

const Track: React.FC<TrackProps> = ({ images, direction, onOpenLightbox }) => {
  const doubled = [...images, ...images];
  const cls = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className={`${cls} gap-4`}>
      {doubled.map((img, i) => (
        <div
          key={`${img.id}-${i}`}
          className="relative w-64 shrink-0 rounded-xl overflow-hidden border border-white/8 bg-slate-900/60 cursor-pointer group"
          onClick={() => onOpenLightbox?.(img.src, img.alt, img.caption)}
        >
          <div className="aspect-video">
            <ImagePlaceholder
              src={img.src}
              alt={img.alt}
              aspectRatio="video"
              badgeLabel={img.tag}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-xs text-slate-200 font-mono line-clamp-2">{img.caption}</p>
          </div>
          {img.tag && (
            <span className="absolute top-2 left-2 rounded-full bg-sky-500/20 border border-sky-500/30 px-2 py-0.5 text-[10px] font-mono text-sky-300">
              {img.tag}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

interface InfiniteCarouselProps {
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ onOpenLightbox }) => {
  return (
    <section id="galeria" className="py-20 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 font-mono text-xs text-slate-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          GALERIA // ARQUIVO DE MEMÓRIAS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Momentos que <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">ficaram</span>
        </h2>
      </div>

      <div className="pause-on-hover space-y-4">
        <div className="overflow-hidden">
          <Track images={siteConfig.carouselTrack1} direction="left" onOpenLightbox={onOpenLightbox} />
        </div>
        <div className="overflow-hidden">
          <Track images={siteConfig.carouselTrack2} direction="right" onOpenLightbox={onOpenLightbox} />
        </div>
      </div>
    </section>
  );
};
