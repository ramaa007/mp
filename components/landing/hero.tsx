"use client";

import { motion } from "framer-motion";
import { ArrowDown, Shield, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/placeholder-user.jpg"
          alt="Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/92 to-accent/5" />
      </div>

      <div className="relative z-10 w-full pt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="px-6 md:px-12 lg:px-20">
            <motion.h1 className="text-[15vw] md:text-[7vw] font-medium leading-[0.9] text-foreground">
              WebCare by Mohini
            </motion.h1>
            <p className="text-lg text-muted-foreground max-w-lg mt-8">
              Professional WordPress maintenance that keeps your site secure and fast.
            </p>
            <div className="flex gap-4 mt-10">
              <Button size="lg" className="bg-accent text-accent-foreground">Start Audit</Button>
              <Button size="lg" variant="outline">View Plans</Button>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[700px] mr-12">
            {/* FIXED: Changed extension to .png to match your public folder */}
            <Image
              src="/hero-image.png" 
              alt="WebCare Dashboard"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
