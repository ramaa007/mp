"use client";

import { motion } from "framer-motion";
import { Search, Shield, Wrench } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Inspect",
    description: "Full review of hosting and update risk. We identify vulnerabilities before they become problems.",
    color: "from-cyan-400 to-teal-500",
  },
  {
    number: "02",
    icon: Shield,
    title: "Protect",
    description: "Creation of safe restore points. Your site is always recoverable, no matter what happens.",
    color: "from-teal-400 to-emerald-500",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Update",
    description: "Controlled ordering of technical changes. Updates applied with precision and verified immediately.",
    color: "from-emerald-400 to-cyan-500",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-32 md:py-48 lg:py-64 bg-secondary/20 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 md:mb-32 text-center"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-8">
              The Method
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] text-foreground">
              Inspect. Protect.<br />
              <span className="gradient-text">Confidence.</span>
            </h2>
          </motion.div>

          {/* Animated visual model */}
          <div className="relative mb-24 md:mb-32">
            {/* Central glowing orb */}
            <div className="flex justify-center mb-16">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Outer rings - pulsing */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full border border-accent/20"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.4, 0.15]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-4 rounded-full border border-accent/30"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute inset-8 rounded-full border border-accent/40"
                />

                {/* Glowing center */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 60px 20px rgba(45, 212, 191, 0.2)",
                      "0 0 100px 40px rgba(45, 212, 191, 0.4)",
                      "0 0 60px 20px rgba(45, 212, 191, 0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-16 md:inset-20 lg:inset-24 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, transparent, rgba(45, 212, 191, 0.3), transparent)"
                    }}
                  />
                  <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent relative z-10">
                    {String(activeStep + 1).padStart(2, '0')}
                  </span>
                </motion.div>

                {/* Orbiting step indicators */}
                {steps.map((step, i) => {
                  const angle = (i * 120 - 90) * (Math.PI / 180);
                  const radius = 140;
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                      animate={{
                        scale: activeStep === i ? 1.2 : 1,
                        boxShadow: activeStep === i 
                          ? "0 0 40px 10px rgba(45, 212, 191, 0.4)" 
                          : "0 0 20px 5px rgba(45, 212, 191, 0.1)"
                      }}
                      className={`absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border-2 flex items-center justify-center transition-all duration-500 ${
                        activeStep === i ? "border-accent" : "border-accent/30"
                      }`}
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * radius}px - 32px)`,
                        top: `calc(50% + ${Math.sin(angle) * radius}px - 32px)`,
                      }}
                    >
                      <step.icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500 ${
                        activeStep === i ? "text-accent" : "text-accent/50"
                      }`} />
                    </motion.div>
                  );
                })}

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                  {steps.map((_, i) => {
                    const angle1 = (i * 120 - 90) * (Math.PI / 180);
                    const angle2 = ((i + 1) * 120 - 90) * (Math.PI / 180);
                    const x1 = 192 + Math.cos(angle1) * 140;
                    const y1 = 192 + Math.sin(angle1) * 140;
                    const x2 = 192 + Math.cos(angle2) * 140;
                    const y2 = 192 + Math.sin(angle2) * 140;
                    return (
                      <motion.line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="rgba(45, 212, 191, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Step labels below */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={`text-center p-4 md:p-6 rounded-lg transition-all duration-500 ${
                    activeStep === i 
                      ? "bg-accent/10 border border-accent/30" 
                      : "bg-transparent border border-transparent hover:border-accent/20"
                  }`}
                >
                  <span className={`text-xs uppercase tracking-widest transition-colors duration-500 ${
                    activeStep === i ? "text-accent" : "text-muted-foreground"
                  }`}>
                    Step {step.number}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-medium mt-2 transition-colors duration-500 ${
                    activeStep === i ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </h3>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active step detail */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {steps[activeStep].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
