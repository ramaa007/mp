"use client";

import { motion } from "framer-motion";
import { Shield, Database, CheckCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    number: "01",
    icon: Shield,
    title: "Core Hosting",
    subtitle: "cPanel Account Care",
    description: "Hosting checks that protect uptime, storage, and secure access. We monitor SSL lifecycle and PHP versions.",
    features: ["SSL Expiry Risk", "Force HTTPS Redirect", "Disk Usage Monitoring", "PHP Extensions/Lifecycle"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
  {
    number: "02",
    icon: Database,
    title: "CMS Integrity",
    subtitle: "WordPress Management",
    description: "A calmer way to handle updates and repairs. Deep checksum validation ensures integrity.",
    features: ["Plugin/Theme Updates", "Security Hardening", "WordFence Integrity", "Site Health Actions"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Quality Assurance",
    subtitle: "Post-Update QA",
    description: "Human testing after every cycle. We verify checkout paths and enquiry forms.",
    features: ["Checkout/Cart QA", "Form Submission Paths", "Image/Layout Integrity", "DB/Cache Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32 md:py-48 lg:py-64">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at top left, rgba(79,142,255,0.18), transparent 22%), radial-gradient(circle at 80% 20%, rgba(90,180,255,0.12), transparent 18%)',
        }}
      />
      <div className="px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-[1800px] mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24 md:mb-32 lg:mb-40"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-8">
              Maintenance Rhythm
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.05] text-foreground">
              Premium Operating<br />
              <span className="gradient-text">Rhythm</span>
            </h2>
          </motion.div>

          {/* Services - full width cards with images */}
          <div className="space-y-6 md:space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative border border-border/30 bg-card/20 hover:bg-card/40 hover:border-accent/30 transition-all duration-500 service-card overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Image */}
                    <div className="relative lg:col-span-2 h-64 lg:h-auto min-h-[300px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent lg:hidden" />
                      
                      {/* Number overlay */}
                      <span className="absolute top-6 left-6 text-7xl md:text-8xl font-bold text-white/20">
                        {service.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative lg:col-span-3 p-8 md:p-12 lg:p-16">
                      <div className="flex items-center gap-4 mb-6">
                        <service.icon className="w-6 h-6 text-accent" />
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">
                          {service.subtitle}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                        {service.description}
                      </p>

                      {/* Features grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Hover arrow */}
                      <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowUpRight className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
