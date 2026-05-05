"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle, ChevronRight, Lock, Gauge, Mail } from "lucide-react";
import Image from "next/image";

const scenarios = [
  {
    number: "01",
    icon: AlertTriangle,
    problem: "The update broke the layout",
    solution: "A safe maintenance flow compares key pages, clears cache, checks image blocks, and isolates plugin or theme conflicts.",
    image: "/scenario-updates.png",
  },
  {
    number: "02",
    icon: Lock,
    problem: "SSL certificate expired unexpectedly",
    solution: "Proactive SSL monitoring alerts you before expiry. We handle renewal and ensure HTTPS redirect remains active.",
    image: "/scenario-security.png",
  },
  {
    number: "03",
    icon: Mail,
    problem: "Contact form stopped working",
    solution: "Post-update QA catches form issues immediately. We test submission paths after every maintenance cycle.",
    image: "/scenario-email.png",
  },
  {
    number: "04",
    icon: Gauge,
    problem: "Site running slow after hosting changes",
    solution: "Database optimization and cache configuration restore performance. PHP version compatibility verified.",
    image: "/scenario-speed.png",
  },
];

export function Scenarios() {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance when not hovering
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % scenarios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovering]);

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background image that changes with scenario */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={scenarios[current].image}
            alt=""
            fill
            className="object-cover"
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/80" />
        </motion.div>
      </AnimatePresence>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-32 md:py-48 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1800px] mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6">
              Common Scenarios
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] text-foreground max-w-4xl">
              When your website{" "}
              <span className="gradient-text">starts acting strange</span>
            </h2>
          </motion.div>

          {/* Main content area */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Left - Scenario selector */}
            <div className="lg:col-span-2 space-y-4">
              {scenarios.map((scenario, i) => {
                const Icon = scenario.icon;
                const isActive = i === current;
                
                return (
                  <motion.button
                    key={i}
                    onClick={() => setCurrent(i)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`w-full text-left p-6 border transition-all duration-500 group relative overflow-hidden ${
                      isActive 
                        ? "border-accent bg-accent/10" 
                        : "border-border/30 hover:border-accent/50 bg-background/30 backdrop-blur-sm"
                    }`}
                  >
                    {/* Progress bar for active item */}
                    {isActive && !isHovering && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-left"
                      />
                    )}

                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? "bg-accent/20" : "bg-border/20 group-hover:bg-accent/10"
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors ${
                          isActive ? "text-accent" : "text-muted-foreground group-hover:text-accent"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xs font-mono transition-colors ${
                            isActive ? "text-accent" : "text-muted-foreground"
                          }`}>
                            {scenario.number}
                          </span>
                          <ChevronRight className={`w-4 h-4 transition-all ${
                            isActive ? "text-accent translate-x-1" : "text-muted-foreground/50"
                          }`} />
                        </div>
                        <p className={`text-lg font-medium transition-colors leading-snug ${
                          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        }`}>
                          &quot;{scenario.problem}&quot;
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right - Solution display */}
            <div className="lg:col-span-3 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Large number background */}
                  <span className="absolute -top-16 -left-4 text-[200px] md:text-[300px] font-bold text-accent/5 leading-none select-none pointer-events-none">
                    {scenarios[current].number}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <CheckCircle className="w-6 h-6 text-accent" />
                      <p className="text-sm uppercase tracking-[0.2em] text-accent">
                        The Solution
                      </p>
                    </div>

                    <p className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed font-medium mb-8">
                      {scenarios[current].solution}
                    </p>

                    {/* Visual indicator */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm text-muted-foreground">Proactive monitoring</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent" />
                        <span className="text-sm text-muted-foreground">Immediate resolution</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom progress indicators */}
          <div className="flex gap-2 mt-16">
            {scenarios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative h-1 flex-1 max-w-24 bg-border/30 overflow-hidden"
                aria-label={`Go to scenario ${i + 1}`}
              >
                <motion.div
                  className="absolute inset-0 bg-accent"
                  initial={false}
                  animate={{ 
                    scaleX: i === current ? 1 : 0,
                    opacity: i <= current ? 1 : 0.3
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
