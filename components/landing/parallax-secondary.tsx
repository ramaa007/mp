"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Changed to "export default" to match the other parallax file's style
export default function ParallaxExperience() {
  return (
    <section id="experience" className="relative overflow-hidden py-32 md:py-48">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-25"
        style={{
          backgroundImage: 'url("/placeholder-user.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(77,122,255,0.24),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(47,130,255,0.16),_transparent_18%),linear-gradient(180deg,rgba(15,32,64,0.15),rgba(5,14,32,0.16))]" />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9 }}
          className="mb-24 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent">
            Premium display
          </span>
          <h2 className="mt-8 text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-foreground">
            Double parallax depth for a premium homepage feel.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Two sticky image sections create a sense of scale and movement while keeping the layout grounded in clean, modern design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
          <div className="relative">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-[2.5rem] border border-border/20 shadow-[0_40px_120px_-50px_rgba(13,57,108,0.5)]">
                <div className="relative aspect-[3/4] min-h-[640px] overflow-hidden rounded-[2.5rem]">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Large modern workspace image"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/95" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-[2rem] border border-border/30 bg-card/75 backdrop-blur-2xl p-10 shadow-2xl"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-accent/80">
                Sticky design
              </span>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold text-foreground">
                A second anchored image for rhythm and elegance.
              </h3>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                This section keeps the visual focus anchored while the copy scrolls, making the experience feel both modern and effortless.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
