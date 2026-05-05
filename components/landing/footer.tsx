"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-secondary/30 overflow-hidden">
      {/* Grand brand reveal */}
      <div className="py-32 md:py-48 lg:py-64">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="max-w-[1800px] mx-auto text-center">
            {/* Small text above */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
            >
              Premium Website Care
            </motion.p>

            {/* Massive brand name */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[16vw] md:text-[14vw] lg:text-[12vw] font-medium text-foreground leading-[0.85] tracking-tight"
            >
              WEBCARE
            </motion.h2>
            
            {/* By line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-accent mt-4"
            >
              by Mohini
            </motion.p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-border/20">
        <div className="px-6 md:px-12 lg:px-20 py-8">
          <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-8"
            >
              <span className="text-sm text-muted-foreground">
                &copy; 2024 Mohini Patel
              </span>
              <span className="text-sm text-muted-foreground hidden md:block">
                Brisbane, Australia
              </span>
            </motion.div>
            
            <motion.nav
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-8"
            >
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
            </motion.nav>
            
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
            >
              Back to Top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
