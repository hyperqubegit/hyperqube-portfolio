"use client";

import { motion } from "framer-motion";

const ITEMS = ["BUILD", "INNOVATE", "AUTOMATE", "ANALYZE", "SCALE"];
const MARQUEE = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export function CapabilityStrip() {
  return (
    <div
      id="services"
      className="border-y border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] py-6 overflow-hidden flex relative group"
    >
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-brand-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-brand-bg)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        {MARQUEE.map((item, i) => (
          <div key={i} className="flex items-center mx-8 sm:mx-12">
            <span
              className={`text-[15px] sm:text-[17px] font-bold tracking-[0.24em] uppercase transition-opacity duration-500 ${
                i % 2 === 0 ? "text-[var(--color-brand-text)] opacity-100" : "text-[var(--color-brand-text)] opacity-60"
              }`}
            >
              {item}
            </span>
            <span className="inline-block ml-16 sm:ml-24 text-[var(--color-brand-blue)] text-[10px]">
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
