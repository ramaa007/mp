"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(result.message);
        setFormData({ name: "", email: "", url: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Failed to connect to the server.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background image - 1920 x 1080 px (Full HD) */}
      <div className="absolute inset-0">
        <Image
          src="/contact-bg.png"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/92" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto">
          {/* Giant CTA headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-8">
              Inquiry
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-medium leading-[0.95] text-foreground">
              Start an<br />
              <span className="gradient-text">Audit</span>
            </h2>
          </motion.div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left - Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-lg">
                Ready to protect your WordPress site? Get a comprehensive audit 
                and discover how we can keep your website secure and performing at its best.
              </p>

              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
                Direct Contact
              </p>
              
              <a 
                href="mailto:hi@mohinipatel.com"
                className="group flex items-center gap-4 text-2xl md:text-3xl lg:text-4xl text-foreground hover:text-accent transition-colors mb-12"
              >
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
                hi@mohinipatel.com
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>

              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Presence
              </p>
              <div className="flex items-center gap-3 text-xl text-foreground mb-12">
                <MapPin className="w-5 h-5" />
                Brisbane, Australia
              </div>

              {/* Response time badge */}
              <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-foreground">
                  Usually responds within 2 hours
                </span>
              </div>
            </motion.div>

            {/* Right - Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {status === "success" ? (
                <div className="bg-foreground/[0.03] backdrop-blur-sm border border-border/30 rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center space-y-6 h-full min-h-[400px]">
                  <CheckCircle2 className="w-16 h-16 text-accent" />
                  <h3 className="text-2xl font-medium text-foreground">Success!</h3>
                  <p className="text-muted-foreground">{statusMessage}</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-sm uppercase tracking-widest text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit}
                  className="bg-foreground/[0.03] backdrop-blur-sm border border-border/30 rounded-3xl p-8 md:p-10 space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                        Your Name
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-accent text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                        Email Address
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-accent text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                      Website URL
                    </label>
                    <input
                      required
                      name="url"
                      type="url"
                      value={formData.url}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-accent text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-widest text-muted-foreground mb-3">
                      Project Details
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your site and what you need help with..."
                      className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl focus:border-accent text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">{statusMessage}</p>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-accent text-accent-foreground text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors rounded-xl group disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {status === "loading" ? "Sending..." : "Send Request"}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <p className="text-center text-sm text-muted-foreground">
                    No commitment required. We will review your site and get back to you.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
