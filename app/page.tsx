"use client";

// 1. Named Exports (files that say "export function ...")
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Footer } from "@/components/landing/footer";
import { Marquee } from "@/components/landing/marquee";
import { Protection } from "@/components/landing/protection";
import { Services } from "@/components/landing/services";
import { CtaStrip } from "@/components/landing/cta-strip";
import { Process } from "@/components/landing/process";
import { About } from "@/components/landing/about";
import { Scenarios } from "@/components/landing/scenarios";
import { Plans } from "@/components/landing/plans";
import { Resources } from "@/components/landing/resources";
import { Contact } from "@/components/landing/contact";

// 2. Default Exports (files we updated to "export default ...")
import ParallaxShowcase from "@/components/landing/parallax";
import ParallaxExperience from "@/components/landing/parallax-secondary";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden grain">
      <Header />
      <Hero />
      <Marquee />
      <Protection />
      <Services />
      
      {/* Visual sections */}
      <ParallaxShowcase />
      <ParallaxExperience />
      
      {/* Details & Pricing */}
      <Process />
      <About />
      <Scenarios />
      <Plans />
      <Resources />
      <Contact />
      <CtaStrip />
      
      <Footer />
    </main>
  );
}