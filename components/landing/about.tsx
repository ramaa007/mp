"use client";

import { motion } from "framer-motion";
import { Award, Building2, GraduationCap, MapPin, Shield } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative min-h-screen">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Image takes full height, no frame */}
        <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto lg:min-h-screen">
          <Image
            src="/mohini-patel.png"
            alt="Mohini Patel - IT Professional"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Subtle gradient that blends image into content - seamless transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
          
          {/* Large initials watermark on image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-8 left-8 text-[20vw] lg:text-[12vw] font-bold leading-none text-white/10 select-none pointer-events-none"
          >
            MP
          </motion.div>
        </div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2 flex items-center bg-background">
          <div className="px-8 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm uppercase tracking-[0.3em] text-accent mb-6"
            >
              Meet the Architect
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] text-foreground mb-2"
            >
              Mohini
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] gradient-text mb-8"
            >
              Patel
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 text-muted-foreground mb-8"
            >
              <MapPin className="w-5 h-5 text-accent" />
              <span>Brisbane, QLD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent mx-2" />
              <span>IT Service Desk Manager</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
            >
              Bringing enterprise-grade IT discipline to WordPress maintenance.
              A rigorous approach rooted in network security and service
              excellence.
            </motion.p>

            {/* Credentials - simple list without boxes */}
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: GraduationCap,
                  title: "Education",
                  desc: "Bachelor of IT from Griffith University",
                },
                {
                  icon: Shield,
                  title: "Microsoft Certified",
                  desc: "Security & M365 Certified Professional",
                },
                {
                  icon: Building2,
                  title: "Enterprise Experience",
                  desc: "Network security and service desk operations",
                },
                {
                  icon: Award,
                  title: "WordPress Expert",
                  desc: "Security hardening & performance optimization",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <item.icon className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-border/30"
            >
              <div>
                <p className="text-3xl md:text-4xl font-medium text-foreground">
                  3+
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Years at KeyTech
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-medium text-foreground">
                  100%
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Client Retention
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-medium text-accent">
                  24/7
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Monitoring
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
