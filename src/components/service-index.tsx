"use client";

import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES } from "../data/capabilities";
import { CapabilityModal } from "./capability-modal";
import type { Capability } from "../data/capabilities";
import { cn } from "@/lib/utils";
import { fadeUp, slideInRow, spectrumFloat } from "@/lib/motion";

export function ServiceIndex() {
  const [activeCap, setActiveCap] = useState<Capability | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="what-we-build" className="py-20 lg:py-32 bg-[var(--color-brand-bg)] relative overflow-hidden">
      {/* Subtle Atmospheric Glow */}
      <motion.div 
        variants={spectrumFloat}
        initial="hidden"
        animate={isInView ? ["show", "float"] : "hidden"}
        className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] atmosphere-warm-soft blur-[120px] rounded-full pointer-events-none"
      />

      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-16 lg:mb-24 max-w-[700px]"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[var(--color-brand-accent)]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-accent)] uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-[clamp(48px,5vw,72px)] font-extrabold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05]">
            From first idea to production-ready systems, we build the technology
            your business actually needs.
          </h2>
        </motion.div>

        {/* ── Service rows ── */}
        <div className="border-t border-[var(--color-brand-border)]">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                ...slideInRow,
                show: {
                  ...slideInRow.show,
                  transition: { ...slideInRow.show.transition, delay: 0.08 * i },
                },
              }}
            >
              <button
                onClick={() => setActiveCap(cap)}
                className={cn(
                  "group w-full grid grid-cols-[40px_1fr_28px] md:grid-cols-[48px_1fr_1.2fr_32px] items-center gap-4 md:gap-6",
                  "py-7 md:py-9 border-b border-[var(--color-brand-border)] relative",
                  "text-left transition-all duration-500",
                  "hover:bg-[rgba(255,255,255,0.02)] overflow-hidden rounded-sm"
                )}
              >
                {/* Hover line indicator */}
                <span className="absolute bottom-0 left-0 h-[1.5px] bg-[var(--color-brand-accent)] w-0 group-hover:w-full transition-all duration-700 ease-out" />

                {/* Number */}
                <span className="text-[13px] font-bold tracking-[0.1em] text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300 relative z-10 pl-2">
                  {cap.num}
                </span>

                {/* Title */}
                <h3 className="text-[18px] md:text-[22px] font-bold text-[var(--color-brand-text)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300 relative z-10">
                  {cap.title}
                </h3>

                {/* Description — desktop only */}
                <p className="hidden md:block text-[16px] text-[var(--color-brand-text-secondary)] leading-[1.6] pr-8 relative z-10 group-hover:text-[var(--color-brand-text)] transition-colors duration-300">
                  {cap.shortDesc}
                </p>

                {/* Arrow */}
                <span className="w-8 h-8 rounded-full flex items-center justify-center justify-self-end relative z-10 group-hover:translate-x-1.5 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4 text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-accent)] transition-colors duration-300" />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {activeCap && (
        <CapabilityModal
          capability={activeCap}
          onClose={() => setActiveCap(null)}
        />
      )}
    </section>
  );
}
