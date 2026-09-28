"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, slideInRow } from "@/lib/motion";

const TECH = [
  { category: "PRODUCT", items: ["Web", "Mobile", "SaaS", "Platforms"] },
  { category: "SYSTEMS", items: ["APIs", "Backend", "Databases", "Integrations"] },
  { category: "DATA", items: ["Analytics", "Dashboards", "Data Pipelines"] },
  { category: "INTELLIGENCE", items: ["Machine Learning", "AI", "Computer Vision"] },
  { category: "INFRASTRUCTURE", items: ["Cloud", "Deployment", "Monitoring", "Security"] },
];

export function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-white opacity-20 blur-[100px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-14 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[var(--color-brand-blue)]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-blue)] uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.12] mb-5 uppercase">
            Technology follows
            <br className="hidden md:block" /> the problem.
          </h2>
          <p className="text-[17px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[540px]">
            We choose the tools based on what needs to be built — not because a
            technology is trendy.
          </p>
        </motion.div>

        {/* ── Technical Index Rows ── */}
        <div className="border-t border-[var(--color-brand-border)]">
          {TECH.map((group, i) => (
            <motion.div
              key={group.category}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                ...slideInRow,
                show: {
                  ...slideInRow.show,
                  transition: { ...slideInRow.show.transition, delay: 0.08 * i },
                },
              }}
              className="group flex flex-col md:flex-row md:items-center py-6 border-b border-[var(--color-brand-border)] transition-colors duration-300 hover:bg-[rgba(255,255,255,0.02)] px-4 -mx-4 rounded-sm"
            >
              <div className="w-full md:w-[30%] mb-3 md:mb-0">
                <h3 className="text-[13px] font-bold tracking-[0.18em] text-[var(--color-brand-text)] uppercase group-hover:text-[var(--color-brand-blue)] transition-colors duration-300">
                  {group.category}
                </h3>
              </div>
              <div className="w-full md:w-[70%]">
                <ul className="flex flex-wrap gap-x-8 gap-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[15px] text-[var(--color-brand-text-secondary)] group-hover:text-[var(--color-brand-text)] transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)] group-hover:bg-[var(--color-brand-blue)] transition-colors duration-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
