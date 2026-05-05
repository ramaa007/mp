"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Shield } from "lucide-react";

const guides = [
  {
    icon: Shield,
    title: "Safety Checklist",
    description: "The definitive pre-update protocol for WordPress environments.",
  },
  {
    icon: FileText,
    title: "Post-Update QA",
    description: "How we catch breakages before your customers do.",
  },
];

const faqs = [
  {
    question: "Do you only work on WordPress?",
    answer: "WordPress and cPanel are the focus because the maintenance workflow is clear and valuable for small businesses.",
  },
  {
    question: "What about reporting?",
    answer: "Transparent summaries provided after every maintenance session—maintenance made visible.",
  },
  {
    question: "Can you fix broken updates?",
    answer: "Yes. We review issues, check error logs, restore from backups if needed, and test the site after the fix.",
  },
];

export function Resources() {
  return (
    <section className="py-32 md:py-48 lg:py-64 bg-secondary/20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-8">
              Knowledge Base
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground">
              Helpful Guides<br />
              <span className="gradient-text">& Clarity.</span>
            </h2>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Understanding what should be checked before, during, and after maintenance work.
            </p>
          </motion.div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Guides */}
            <div className="space-y-6">
              {guides.map((guide, i) => (
                <motion.a
                  key={guide.title}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex items-start gap-6 p-8 border border-border/30 bg-card/20 hover:border-accent/30 hover:bg-card/40 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <guide.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {guide.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Right - FAQs */}
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="border-t border-border/30 py-8 first:border-t-0"
                >
                  <h3 className="text-lg md:text-xl font-medium text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
