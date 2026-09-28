"use client";

import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES } from "../data/capabilities";
import { CapabilityModal } from "./capability-modal";
import type { Capability } from "../data/capabilities";
import { cn } from "@/lib/utils";

export function ServiceIndex() {
  const [activeCap, setActiveCap] = useState<Capability | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="what-we-build" className="py-20 lg:py-28 bg-white">
      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12"
        ref={containerRef}
      >
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 lg:mb-20 max-w-[640px]"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#0066FF] uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] text-[#0B132B] leading-[1.15]">
            From first idea to production-ready systems, we build the technology
            your business actually needs.
          </h2>
        </motion.div>

        {/* ── Service rows ── */}
        <div className="border-t border-slate-200">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.08 * i,
                ease: "easeOut",
              }}
            >
              <button
                onClick={() => setActiveCap(cap)}
                className={cn(
                  "group w-full grid grid-cols-[40px_1fr_28px] md:grid-cols-[48px_1fr_1.2fr_32px] items-center gap-4 md:gap-6",
                  "py-6 md:py-7 border-b border-slate-200/80",
                  "text-left transition-colors duration-300",
                  "hover:bg-slate-50/60"
                )}
              >
                {/* Number */}
                <span className="text-[13px] font-bold tracking-[0.1em] text-slate-300 group-hover:text-[#0066FF] transition-colors duration-300">
                  {cap.num}
                </span>

                {/* Title */}
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0B132B] group-hover:text-[#0066FF] transition-colors duration-300">
                  {cap.title}
                </h3>

                {/* Description — desktop only */}
                <p className="hidden md:block text-[15px] text-slate-500 leading-[1.55] pr-4">
                  {cap.shortDesc}
                </p>

                {/* Arrow */}
                <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#0066FF] group-hover:bg-[#0066FF] transition-all duration-300 justify-self-end">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
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
