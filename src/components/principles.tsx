"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PRINCIPLES = [
  { num: "01", title: "REAL PROBLEMS", desc: "We start with the problem, not the technology." },
  { num: "02", title: "TECHNOLOGY WITH PURPOSE", desc: "Every technical decision has a reason." },
  { num: "03", title: "ENGINEERING THAT SCALES", desc: "Build foundations that can grow with the product." },
  { num: "04", title: "DESIGNED FOR PEOPLE", desc: "Powerful technology without unnecessary complexity." },
];

export function Principles() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 lg:mb-20 flex flex-col items-center text-center"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#0066FF] uppercase">
              Core Principles
            </span>
            <span className="h-[2px] w-6 bg-[#0066FF]" />
          </div>
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.12]">
            Built around your goals.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-12">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: "easeOut" }}
              className="group pt-6 border-t-2 border-slate-200 hover:border-[#0066FF] transition-colors duration-500 relative"
            >
              <span className="text-[13px] font-bold tracking-[0.1em] text-slate-300 group-hover:text-[#0066FF] transition-colors duration-300 mb-5 block">
                {p.num}
              </span>
              <h3 className="text-[15px] font-bold tracking-[0.08em] text-[#0B132B] uppercase mb-3">
                {p.title}
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.6]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
