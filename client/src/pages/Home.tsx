import React, { useState } from "react";
import { BootScreen } from "../components/BootScreen";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TeacherCards } from "../components/TeacherCards";
import { TccRescue } from "../components/TccRescue";
import { Disciplines } from "../components/Disciplines";
import { InfiniteCarousel } from "../components/InfiniteCarousel";
import { QuoteCards } from "../components/QuoteCards";
import { TechSkills } from "../components/TechSkills";
import { JourneyTimeline } from "../components/JourneyTimeline";
import { TributeFinal } from "../components/TributeFinal";
import { Footer } from "../components/Footer";
import { LightboxModal } from "../components/LightboxModal";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const openLightbox = (src: string, title: string, caption?: string) =>
    setLightbox({ src, title, caption });
  const closeLightbox = () => setLightbox(null);

  if (!booted) {
    return <BootScreen onComplete={() => setBooted(true)} />;
  }

  return (
    <div className="min-h-screen tech-grid-bg">
      <Navbar />
      <main>
        <Hero onOpenLightbox={openLightbox} />
        <TeacherCards onOpenLightbox={openLightbox} />
        <TccRescue onOpenLightbox={openLightbox} />
        <Disciplines onOpenLightbox={openLightbox} />
        <InfiniteCarousel onOpenLightbox={openLightbox} />
        <QuoteCards onOpenLightbox={openLightbox} />
        <TechSkills />
        <JourneyTimeline />
        <TributeFinal onOpenLightbox={openLightbox} />
      </main>
      <Footer />

      <LightboxModal
        isOpen={!!lightbox}
        onClose={closeLightbox}
        imageSrc={lightbox?.src ?? ""}
        title={lightbox?.title ?? ""}
        caption={lightbox?.caption}
      />
    </div>
  );
}
