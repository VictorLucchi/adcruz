import React, { useState, useEffect } from "react";
import { Terminal, ShieldCheck, ArrowRight } from "lucide-react";

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const lines = [
    { text: "INICIANDO SISTEMA...", status: "", color: "text-sky-400 font-bold" },
    { text: "Carregando professores........", status: "OK", color: "text-emerald-400" },
    { text: "Carregando aulas..............", status: "OK", color: "text-emerald-400" },
    { text: "Carregando TCCs...............", status: "███████░░", color: "text-amber-400" },
    { text: "Carregando paciência..........", status: "ERRO", color: "text-rose-400 font-bold" },
    { text: "Carregando memórias...........", status: "OK", color: "text-emerald-400" },
    { text: "ADRIANO & CRUZ DETECTADOS.", status: "", color: "text-purple-400 font-bold tracking-wider" },
    { text: "Bem-vindo.", status: "", color: "text-white font-semibold" },
  ];

  useEffect(() => {
    if (stepIndex < lines.length) {
      const timer = setTimeout(() => {
        setStepIndex((prev) => prev + 1);
      }, 420);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 900);
      return () => clearTimeout(finishTimer);
    }
  }, [stepIndex, lines.length, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 p-4 font-mono select-none">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0,transparent_70%)] pointer-events-none" />

      {/* Terminal Window */}
      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-sky-400" />
              boot.sh — adriano_cruz_os_v1.0
            </span>
          </div>

          <button
            onClick={onComplete}
            className="group flex items-center gap-1 text-[11px] text-slate-400 hover:text-sky-300 transition-colors"
          >
            Pular boot
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Console Log Area */}
        <div className="min-h-[220px] space-y-2.5 text-sm">
          {lines.slice(0, stepIndex + 1).map((line, idx) => (
            <div key={idx} className="flex items-baseline justify-between gap-4 animate-in fade-in slide-in-from-left-2 duration-150">
              <span className={`text-slate-300 ${line.color}`}>
                <span className="text-slate-600 mr-2">&gt;</span>
                {line.text}
              </span>
              {line.status && (
                <span className={`font-semibold shrink-0 ${line.color}`}>
                  [{line.status}]
                </span>
              )}
            </div>
          ))}

          {stepIndex < lines.length && (
            <span className="inline-block h-4 w-2 bg-sky-400 animate-pulse ml-2" />
          )}
        </div>

        {/* Status indicator bottom */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            Verificação de integridade da turma: 100%
          </span>
          <span className="font-mono text-[11px]">PORTA: 3000 / STATUS: ATIVO</span>
        </div>
      </div>
    </div>
  );
};
