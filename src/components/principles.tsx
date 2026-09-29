"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";
import { cn } from "@/lib/utils";

const BAD_POINTS = [
  "Tools chosen because they're trendy",
  "Disconnected systems and data silos",
  "Manual, repetitive workflows",
  "Hard-to-maintain foundations",
  "Off-the-shelf software compromises",
];

const GOOD_POINTS = [
  "Technology chosen for the problem",
  "Systems designed around your workflow",
  "Automation where it creates value",
  "Foundations built to evolve and scale",
  "Custom solutions that fit perfectly",
];

export function Principles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 bg-[var(--color-brand-bg)] relative border-t border-[var(--color-brand-border)] overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              Built Around Your Goals
            </span>
          </motion.div>
          
          <BlurryText 
            as="h2" 
            delay={0.1}
            className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05]"
          >
            <span>Engineering with</span>
            <br className="hidden sm:block" />
            <span>
              <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">Purpose.</em>
            </span>
          </BlurryText>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Muted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] rounded-2xl p-8 lg:p-14 opacity-[0.65] relative overflow-hidden"
          >
            <h3 className="text-[14px] font-medium tracking-[0.1em] text-[var(--color-brand-text-very-muted)] uppercase mb-8 lg:mb-12">
              Without Purposeful Engineering
            </h3>
            
            <ul className="flex flex-col gap-6">
              {BAD_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-5 h-5 rounded-full bg-[#101010] flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-[var(--color-brand-text-very-muted)]" />
                  </span>
                  <span className="text-[16px] text-[var(--color-brand-text-muted)] leading-[1.5]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Emphasized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--color-brand-card)] border border-[rgba(255,255,255,0.12)] rounded-2xl p-8 lg:p-14 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <SpectrumGlow
                variant="card"
                className="top-[-10%] right-[-10%] w-[500px] h-[500px]"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-[14px] font-medium tracking-[0.1em] text-[var(--color-brand-text)] uppercase mb-8 lg:mb-12 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(255,75,62,0.6)]" />
                With HyperQube
              </h3>
              
              <ul className="flex flex-col gap-6">
                {GOOD_POINTS.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-5 h-5 rounded-full bg-[#151515] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[var(--color-brand-accent)]" />
                    </span>
                    <span className="text-[16px] text-[var(--color-brand-text)] leading-[1.5]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
