"use client";

import { motion } from "framer-motion";

const ITEMS = ["BUILD", "INNOVATE", "AUTOMATE", "ANALYZE", "SCALE"];
const MARQUEE = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

export function CapabilityStrip() {
  return (
    <div
      id="services"
      className="border-y border-slate-200/70 bg-white py-5 overflow-hidden flex relative"
    >
      {/* edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
      >
        {MARQUEE.map((item, i) => (
          <div key={i} className="flex items-center mx-6 sm:mx-10">
            <span
              className={`text-[15px] sm:text-[17px] font-bold tracking-[0.22em] uppercase ${
                i % 2 === 0 ? "text-[#0B132B]" : "text-[#0066FF]"
              }`}
            >
              {item}
            </span>
            <span className="inline-block ml-12 sm:ml-20 text-slate-300 text-[8px]">
              ◆
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
