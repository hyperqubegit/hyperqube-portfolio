"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "BUILD",
  "INNOVATE",
  "AUTOMATE",
  "ANALYZE",
  "SCALE"
];

// Double the items for seamless infinite scrolling
const MARQUEE_ITEMS = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export function CapabilityStrip() {
  return (
    <div id="services" className="border-b border-slate-200 bg-white py-6 overflow-hidden flex relative">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Slow, premium speed
        }}
      >
        {MARQUEE_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-[13px] font-bold tracking-[0.25em] uppercase text-[#0B132B]">
              {item}
            </span>
            <span className="inline-block ml-16 text-[#0066FF] text-[12px]">
              &bull;
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
