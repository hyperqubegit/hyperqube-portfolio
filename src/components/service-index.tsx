"use client";

import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES } from "../data/capabilities";
import { CapabilityModal } from "./capability-modal";
import type { Capability } from "../data/capabilities";
import { cn } from "@/lib/utils";
import { fadeUp, slideInRow } from "@/lib/motion";

export function ServiceIndex() {
  const [activeCap, setActiveCap] = useState<Capability | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="what-we-build" className="py-20 lg:py-28 bg-[var(--color-brand-bg)] relative">
      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* ── Heading ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-14 lg:mb-20 max-w-[640px]"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[var(--color-brand-blue)]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-blue)] uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-[var(--color-brand-text)] leading-[1.15]">
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
                  "py-6 md:py-7 border-b border-[var(--color-brand-border)] relative",
                  "text-left transition-colors duration-300",
                  "hover:bg-[rgba(255,255,255,0.03)] overflow-hidden"
                )}
              >
                {/* Hover line indicator */}
                <span className="absolute bottom-[-1px] left-0 h-[1px] bg-[var(--color-brand-blue)] w-0 group-hover:w-full transition-all duration-700 ease-out" />

                {/* Number */}
                <span className="text-[13px] font-bold tracking-[0.1em] text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-blue)] transition-colors duration-300 relative z-10 pl-2">
                  {cap.num}
                </span>

                {/* Title */}
                <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--color-brand-text)] group-hover:text-[var(--color-brand-blue)] transition-colors duration-300 relative z-10">
                  {cap.title}
                </h3>

                {/* Description — desktop only */}
                <p className="hidden md:block text-[15px] text-[var(--color-brand-text-secondary)] leading-[1.55] pr-4 relative z-10 group-hover:text-[var(--color-brand-text)] transition-colors duration-300">
                  {cap.shortDesc}
                </p>

                {/* Arrow */}
                <span className="w-8 h-8 rounded-full border border-[var(--color-brand-border)] flex items-center justify-center group-hover:border-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-blue)] transition-all duration-300 justify-self-end relative z-10">
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-text)] group-hover:translate-x-0.5 transition-all duration-300" />
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
