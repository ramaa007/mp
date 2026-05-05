"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Essential",
    description: "Best for small sites. SSL checks, WP updates, backups, and key page review.",
    features: [
      "SSL Monitoring",
      "WordPress Updates",
      "Automated Backups",
      "Key Page Review",
      "Monthly Report",
    ],
  },
  {
    name: "Managed",
    description: "Active services. Security scans, form testing, error log review, and DB cleanup.",
    features: [
      "Everything in Essential",
      "Security Scans",
      "Form Testing",
      "Error Log Review",
      "Database Cleanup",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Commerce",
    description: "Complex journeys. Cart/Checkout QA, quote path testing, and priority support.",
    features: [
      "Everything in Managed",
      "Cart/Checkout QA",
      "Quote Path Testing",
      "Payment Gateway Tests",
      "Dedicated Support",
      "24h Response Time",
    ],
  },
];

export function Plans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="plans" className="py-32 md:py-48 lg:py-64">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent mb-8">
                Maintenance Depth
              </p>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-foreground">
                Choose your<br />
                <span className="gradient-text">care level</span>
              </h2>
            </div>

            {/* Billing toggle */}
            <div className="flex items-center gap-4 p-1 bg-secondary/30 border border-border/30">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-3 text-sm uppercase tracking-widest transition-all ${
                  billingCycle === "monthly"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-3 text-sm uppercase tracking-widest transition-all ${
                  billingCycle === "annual"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
              </button>
            </div>
          </motion.div>

          {/* Plans grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative p-8 md:p-10 lg:p-12 border transition-all duration-300 hover:border-accent/50 ${
                  plan.popular 
                    ? "border-accent/30 bg-accent/5" 
                    : "border-border/30 bg-card/20"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-8 px-4 py-1 bg-accent text-accent-foreground text-xs uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-3 text-sm uppercase tracking-widest transition-colors ${
                    plan.popular
                      ? "text-accent hover:text-foreground"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  Request Scope
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
