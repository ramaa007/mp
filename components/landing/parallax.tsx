"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ParallaxShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="relative h-[100vh] overflow-hidden bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div style={{ y }} className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="/placeholder.jpg"
            alt="Parallax detail"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
