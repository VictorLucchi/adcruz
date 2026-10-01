import React from "react";
import { Terminal } from "lucide-react";
import { siteConfig } from "../config/siteData";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/8 bg-slate-950/80 py-8 px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Terminal className="h-4 w-4 text-sky-400" />
        <span className="font-mono text-sm font-bold text-white">{siteConfig.title}</span>
        <span className="font-mono text-xs text-slate-500">// {siteConfig.subtitle}</span>
      </div>
      <p className="text-xs font-mono text-slate-500 mb-1">{siteConfig.footerQuote}</p>
      <p className="text-xs text-slate-600">{siteConfig.footerSignature}</p>
    </footer>
  );
};
