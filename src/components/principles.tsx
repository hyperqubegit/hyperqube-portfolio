"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, slideInRow } from "@/lib/motion";
import { cn } from "@/lib/utils";

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
    <section className="py-20 lg:py-28 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-14 lg:mb-20 flex flex-col items-center text-center max-w-[700px] mx-auto"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[var(--color-brand-blue)]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-blue)] uppercase">
              Core Principles
            </span>
            <span className="h-[2px] w-6 bg-[var(--color-brand-blue)]" />
          </div>
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.12]">
            Built around your goals.
          </h2>
        </motion.div>

        <div className="border-t border-[var(--color-brand-border)]">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                ...slideInRow,
                show: {
                  ...slideInRow.show,
                  transition: { ...slideInRow.show.transition, delay: 0.08 * i },
                },
              }}
              className="group relative flex flex-col md:flex-row items-start md:items-center py-8 lg:py-10 border-b border-[var(--color-brand-border)] transition-colors hover:bg-[rgba(255,255,255,0.02)]"
            >
              {/* Hover indicator line */}
              <span className="absolute bottom-[-1px] left-0 h-[1px] bg-[var(--color-brand-blue)] w-0 group-hover:w-full transition-all duration-700 ease-out" />
              
              <div className="w-full md:w-[120px] mb-2 md:mb-0">
                <span className="text-[13px] font-bold tracking-[0.1em] text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-blue)] transition-colors duration-300">
                  {p.num}
                </span>
              </div>
              
              <div className="w-full md:w-[35%] mb-2 md:mb-0">
                <h3 className="text-[16px] lg:text-[18px] font-bold tracking-[0.08em] text-[var(--color-brand-text)] group-hover:translate-x-2 transition-transform duration-300 ease-out uppercase">
                  {p.title}
                </h3>
              </div>
              
              <div className="w-full md:w-1/2">
                <p className="text-[15px] lg:text-[17px] text-[var(--color-brand-text-secondary)] leading-[1.6] group-hover:text-[var(--color-brand-text)] transition-colors duration-300">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
