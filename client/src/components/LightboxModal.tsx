import React, { useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  tag?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  tag,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Card Modal */}
      <div className="relative z-10 flex flex-col max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <ZoomIn className="h-4 w-4 text-sky-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
              Visualização de Arquivo
            </span>
            {tag && (
              <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-[10px] font-mono text-purple-300 border border-purple-500/30">
                {tag}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Visualizador de Imagem com suporte a fallback */}
        <div className="flex-1 min-h-[300px] max-h-[65vh] p-4 flex items-center justify-center bg-black/40">
          <ImagePlaceholder
            src={imageSrc}
            alt={title}
            className="w-full h-full max-h-[60vh] object-contain rounded-xl"
            badgeLabel="ARQUIVO DE IMAGEM"
          />
        </div>

        {/* Rodapé com detalhes */}
        <div className="border-t border-white/10 p-5 bg-slate-950/80">
          <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
          {caption && <p className="text-sm text-slate-300">{caption}</p>}
          <p className="mt-2 text-[11px] font-mono text-slate-500">
            Caminho: <code className="text-slate-400">{imageSrc}</code>
          </p>
        </div>
      </div>
    </div>
  );
};
