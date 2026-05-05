"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CtaStrip() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(48,112,255,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(97,182,255,0.12),_transparent_20%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/95 to-background/95" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto rounded-[2.5rem] border border-border/30 bg-background/90 backdrop-blur-2xl p-10 md:p-14 shadow-[0_40px_120px_-80px_rgba(16,55,115,0.35)]">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80 mb-4">
                Ready for a smarter homepage?
              </p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-foreground leading-tight">
                Start your WordPress care journey with a premium experience.
              </h2>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
                Combine enterprise-grade care with modern design and effortless motion. Let us keep your site secure, fast, and always stunning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end"
            >
              <div className="rounded-[1.75rem] bg-accent/10 px-6 py-4 text-center text-sm text-accent">
                <span className="block font-semibold text-2xl text-foreground">99.9%</span>
                uptime assurance
              </div>
              <button className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:scale-[1.01] hover:bg-accent/90 shadow-[0_18px_60px_-30px_rgba(34,111,255,0.7)]">
                Book a consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
