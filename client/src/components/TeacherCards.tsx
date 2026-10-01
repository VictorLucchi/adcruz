import React from "react";
import { Sparkles, Star, Zap } from "lucide-react";
import { siteConfig } from "../config/siteData";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface TeacherCardProps {
  teacher: typeof siteConfig.teacherAdriano;
  imageSrc: string;
  accentColor: "purple" | "cyan";
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, imageSrc, accentColor, onOpenLightbox }) => {
  const isPurple = accentColor === "purple";
  const border = isPurple ? "border-purple-500/30 hover:border-purple-400/60" : "border-sky-500/30 hover:border-sky-400/60";
  const glow = isPurple ? "hover:shadow-purple-500/15" : "hover:shadow-sky-500/15";
  const badge = isPurple ? "border-purple-500/30 bg-purple-500/10 text-purple-300" : "border-sky-500/30 bg-sky-500/10 text-sky-300";
  const dot = isPurple ? "bg-purple-400" : "bg-sky-400";
  const nameColor = isPurple ? "text-purple-300" : "text-sky-300";
  const perkDot = isPurple ? "bg-purple-400" : "bg-cyan-400";

  return (
    <div
      className={`group relative rounded-2xl border ${border} bg-slate-900/80 p-5 shadow-xl transition-all duration-300 ${glow} hover:shadow-2xl hover:-translate-y-1`}
      style={{ perspective: "1000px" }}
    >
      {/* Badge desbloqueado */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 rounded-full border ${badge} px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider`}>
          <Sparkles className="h-3 w-3" />
          PERSONAGEM DESBLOQUEADO
        </span>
        <span className="font-mono text-[10px] text-slate-500">{teacher.classType}</span>
      </div>

      {/* Foto */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
        <ImagePlaceholder
          src={imageSrc}
          alt={`Foto do Professor ${teacher.name}`}
          aspectRatio="auto"
          badgeLabel={`FOTO DO ${teacher.name}`}
          className="w-full h-full"
          onClick={() => onOpenLightbox?.(imageSrc, `Professor ${teacher.name}`, teacher.humorQuote)}
        />
        <div className={`absolute top-2 right-2 flex items-center gap-1 rounded-full border ${badge} px-2 py-0.5 text-[10px] font-mono backdrop-blur-sm`}>
          <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse`} />
          {teacher.specialty}
        </div>
      </div>

      {/* Nome e título */}
      <div className="mb-4">
        <h3 className={`font-mono text-2xl font-extrabold tracking-widest ${nameColor}`}>{teacher.name}</h3>
        <p className="text-xs text-slate-400 font-mono mt-0.5">{teacher.title}</p>
        <div className="flex items-center gap-1.5 mt-2">
          <Zap className="h-3.5 w-3.5 text-amber-400" />
          <span className="text-xs font-mono text-amber-300 font-bold">HABILIDADE ESPECIAL: {teacher.specialSkill}</span>
        </div>
      </div>

      {/* Barras de atributos */}
      <div className="space-y-2.5 mb-4">
        {teacher.stats.map((stat) => (
          <div key={stat.label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-mono text-slate-300">{stat.label}</span>
              <span className="text-[11px] font-mono text-slate-400 font-bold">{stat.value}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Perks */}
      <div className="border-t border-white/5 pt-3 mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <Star className="h-3 w-3 text-amber-400" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Perks Desbloqueados</span>
        </div>
        <ul className="space-y-1">
          {teacher.perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
              <span className={`h-1.5 w-1.5 rounded-full ${perkDot} shrink-0`} />
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Frase */}
      <p className="text-xs text-slate-400 italic border-t border-white/5 pt-3">
        "{teacher.humorQuote}"
      </p>
    </div>
  );
};

interface TeacherCardsProps {
  onOpenLightbox?: (src: string, title: string, caption?: string) => void;
}

export const TeacherCards: React.FC<TeacherCardsProps> = ({ onOpenLightbox }) => {
  return (
    <section id="professores" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-4 py-1.5 font-mono text-xs text-slate-400 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          FICHAS DE PERSONAGEM // PROFESSORES DESBLOQUEADOS
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Os <span className="bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">Papais do T.I.</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
          Dois professores. Duas especialidades. Uma dupla inesquecível.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TeacherCard
          teacher={siteConfig.teacherAdriano}
          imageSrc={siteConfig.images.adrianoCard}
          accentColor="purple"
          onOpenLightbox={onOpenLightbox}
        />
        <TeacherCard
          teacher={siteConfig.teacherCruz}
          imageSrc={siteConfig.images.cruzCard}
          accentColor="cyan"
          onOpenLightbox={onOpenLightbox}
        />
      </div>
    </section>
  );
};
