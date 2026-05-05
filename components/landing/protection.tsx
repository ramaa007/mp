"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Server, Code, Shield, Database, Users } from "lucide-react";

const layers = [
  { 
    name: "Hosting", 
    number: "01",
    icon: Server,
    description: "Server health, uptime monitoring, and performance optimization",
    color: "bg-accent/10 border-accent/30 hover:bg-accent/20"
  },
  { 
    name: "WordPress", 
    number: "02",
    icon: Code,
    description: "Core updates, plugin management, and theme maintenance",
    color: "bg-accent/15 border-accent/40 hover:bg-accent/25"
  },
  { 
    name: "Security", 
    number: "03",
    icon: Shield,
    description: "Firewall protection, malware scanning, and threat detection",
    color: "bg-accent/20 border-accent/50 hover:bg-accent/30"
  },
  { 
    name: "Backups", 
    number: "04",
    icon: Database,
    description: "Automated backups, secure storage, and instant recovery",
    color: "bg-accent/25 border-accent/60 hover:bg-accent/35"
  },
  { 
    name: "Journeys", 
    number: "05",
    icon: Users,
    description: "User experience monitoring and conversion optimization",
    color: "bg-accent/30 border-accent/70 hover:bg-accent/40"
  },
];

export function Protection() {
  const [activeLayer, setActiveLayer] = useState(2);

  return (
    <section id="protection" className="py-32 md:py-48 overflow-hidden relative">
      {/* Background image + glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
          src="/placeholder.jpg"
          alt="Supportive blue background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 md:mb-32"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-6">
              The Care System
            </p>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1] text-foreground mb-8">
              5 Layers of{" "}
              <span className="gradient-text">Protection</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your website deserves complete care. We monitor every layer 
              so nothing slips through the cracks.
            </p>
          </motion.div>

          {/* Interactive Layer Cards */}
          <div className="grid lg:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-24">
            {layers.map((layer, i) => {
              const Icon = layer.icon;
              const isActive = activeLayer === i;
              
              return (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveLayer(i)}
                  className={`relative cursor-pointer group transition-all duration-500 ${
                    isActive ? "lg:-translate-y-4" : ""
                  }`}
                >
                  <div className={`
                    relative p-6 md:p-8 border backdrop-blur-sm transition-all duration-500
                    ${layer.color}
                    ${isActive ? "border-accent shadow-[0_0_40px_rgba(20,184,166,0.3)]" : ""}
                  `}>
                    {/* Glow effect when active */}
                    {isActive && (
                      <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                    )}
                    
                    {/* Number */}
                    <span className="text-[80px] md:text-[100px] font-bold absolute -top-2 -right-2 text-foreground/5 leading-none select-none">
                      {layer.number}
                    </span>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`
                        w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6
                        transition-all duration-500
                        ${isActive ? "bg-accent text-background" : "bg-accent/20 text-accent"}
                      `}>
                        <Icon className="w-7 h-7 md:w-8 md:h-8" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3">
                        {layer.name}
                      </h3>
                      
                      <p className={`
                        text-sm md:text-base leading-relaxed transition-all duration-500
                        ${isActive ? "text-foreground/80" : "text-muted-foreground"}
                      `}>
                        {layer.description}
                      </p>
                    </div>

                    {/* Active indicator */}
                    <div className={`
                      absolute bottom-0 left-0 right-0 h-1 bg-accent transition-all duration-500
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Connection visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            
            <div className="max-w-4xl mx-auto text-center p-8 md:p-12 bg-card/50 border border-border/30 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-background text-xs uppercase tracking-widest">
                Synchronized
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed">
                The Care System synchronizes every layer. Checking hosting, WordPress, 
                security, backups, and customer journeys together to ensure{" "}
                <span className="text-accent font-medium">absolute resilience</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
