import React from "react";
import { ShieldAlert, Zap, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/siteData";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface TccRescueProps {
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

export const TccRescue: React.FC<TccRescueProps> = ({ onOpenLightbox }) => {
  const steps = [
    { icon: "🚨", label: "Aluno em pânico às 23h" },
    { icon: "📲", label: "Mensagem no Teams" },
    { icon: "🧠", label: "Cruz analisa a lógica" },
    { icon: "🤖", label: "Adriano alinha a IA" },
    { icon: "✅", label: "TCC salvo. Turma respira." },
  ];

  return (
    <section id="resgate-tcc" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-8 sm:p-12 relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-rose-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ShieldAlert className="h-6 w-6 text-rose-400 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-widest text-rose-400 uppercase">
              Operação Emergencial // Resgate de TCC
            </span>
            <ShieldAlert className="h-6 w-6 text-rose-400 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-3 tracking-tight">
            🚨 <span className="text-rose-400">Resgate de TCC</span>
          </h2>
          <p className="text-center text-slate-300 max-w-xl mx-auto mb-10 text-sm">
            Quando o prazo chegava e o desespero batia, a dupla dinâmica entrava em ação.
            Cruz consertava a lógica. Adriano alinhava a IA. A turma sobrevivia.
          </p>

          {/* Fluxo de resgate */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {steps.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center gap-1.5 rounded-xl border border-rose-500/20 bg-slate-900/60 px-4 py-3 text-center min-w-[100px]">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-[11px] font-mono text-slate-300">{step.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <Zap className="h-4 w-4 text-rose-400 shrink-0 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Imagem + checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden">
              <ImagePlaceholder
                src={siteConfig.images.tccRescue}
                alt="Operação Resgate de TCC"
                aspectRatio="video"
                badgeLabel="RESGATE EM AÇÃO"
                onClick={() => onOpenLightbox?.(siteConfig.images.tccRescue, "Resgate de TCC", "A dupla dinâmica em ação")}
              />
            </div>

            <div className="space-y-3">
              {[
                "Disponíveis no Teams fora do horário",
                "Paciência infinita com bugs de última hora",
                "Explicação clara mesmo sob pressão",
                "Nenhum TCC foi abandonado sob sua guarda",
                "Dupla imbatível em qualquer emergência",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
