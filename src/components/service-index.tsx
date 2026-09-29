"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES } from "../data/capabilities";
import { cn } from "@/lib/utils";
import { BlurryText } from "@/components/blurry-text";
import { fadeUp, textReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

export function ServiceIndex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Map to create a diverse layout. E.g. some span 1, some span 2 in a 2-column grid.
  const getColSpan = (index: number) => {
    // 0, 1 -> span 1 (Row 1)
    // 2 -> span 2 (Row 2, full width)
    // 3, 4 -> span 1 (Row 3)
    // 5 -> span 2 (Row 4, full width)
    // 6, 7 -> span 1 (Row 5)
    if (index === 2 || index === 5) return "md:col-span-2";
    return "md:col-span-1";
  };

  const getGlowPosition = (index: number) => {
    const positions = [
      "top-[-20%] right-[-20%]", // 0
      "bottom-[-20%] left-[-20%]", // 1
      "top-[-10%] right-[20%]", // 2 (wide)
      "bottom-[-20%] right-[-20%]", // 3
      "top-[-20%] left-[-20%]", // 4
      "top-[10%] left-[-10%]", // 5 (wide)
      "bottom-[-20%] right-[-10%]", // 6
      "top-[-10%] left-[30%]" // 7
    ];
    return positions[index % positions.length];
  };

  return (
    <section id="what-we-build" className="py-20 lg:py-28 bg-[var(--color-brand-bg)] relative overflow-hidden">
      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* ── Heading ── */}
        <div className="mb-14 lg:mb-20 flex flex-col items-center text-center max-w-[800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              What We Build
            </span>
          </motion.div>
          
          <BlurryText 
            as="h2" 
            delay={0.1}
            className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05]"
          >
            <span>What can we</span>
            <br className="hidden sm:block" />
            <span>
              <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">build for you?</em>
            </span>
          </BlurryText>

          <motion.p
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={textReveal}
            transition={{ delay: 0.8 }}
            className="mt-8 text-[16px] text-[var(--color-brand-text-secondary)] max-w-[600px] mx-auto"
          >
            From first idea to production-ready systems, we build the technology
            your business actually needs.
          </motion.p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
              className={cn(
                "group relative bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-2xl p-10 lg:p-14 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)]",
                getColSpan(i)
              )}
            >
              {/* Localized Spectrum Glow */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none">
                <SpectrumGlow
                  variant="card"
                  className={cn("w-[400px] h-[400px]", getGlowPosition(i))}
                />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                {/* Number & Accent */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-[13px] font-medium tracking-[0.15em] text-[var(--color-brand-text-very-muted)]">
                    {cap.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-text-muted)] group-hover:bg-[var(--color-brand-accent)] transition-colors duration-500 shadow-[0_0_8px_rgba(255,75,62,0)] group-hover:shadow-[0_0_8px_rgba(255,75,62,0.8)]" />
                </div>

                {/* Title */}
                <h3 className="text-[24px] lg:text-[32px] font-medium text-[var(--color-brand-text)] mb-4 transition-colors duration-300">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] lg:text-[16px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[480px]">
                  {cap.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
