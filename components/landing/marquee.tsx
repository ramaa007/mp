"use client";

import { motion } from "framer-motion";

const words = ["SSL MONITORING", "DATABASE OPTIMIZATION", "AUTOMATED BACKUPS", "SECURITY HARDENING", "PHP LIFECYCLE", "WORDPRESS CARE"];

export function Marquee() {
  return (
    <section className="py-16 md:py-24 overflow-hidden border-y border-border/20">
      <div className="flex w-max">
        <div className="marquee flex shrink-0">
          {words.map((word, i) => (
            <span
              key={`a-${i}`}
              className="text-3xl md:text-5xl lg:text-7xl font-medium text-accent/60 uppercase whitespace-nowrap flex items-center mx-6 md:mx-10"
            >
              {word}
              <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent ml-6 md:ml-10" />
            </span>
          ))}
        </div>
        <div className="marquee flex shrink-0">
          {words.map((word, i) => (
            <span
              key={`b-${i}`}
              className="text-3xl md:text-5xl lg:text-7xl font-medium text-accent/60 uppercase whitespace-nowrap flex items-center mx-6 md:mx-10"
            >
              {word}
              <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent ml-6 md:ml-10" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
