"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
    <section className="py-20 lg:py-28 bg-[#F4F7FB] border-t border-slate-200/60">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 lg:mb-20"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#0066FF] uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.12] mb-5">
            Technology follows
            <br className="hidden md:block" /> the problem.
          </h2>
          <p className="text-[17px] text-slate-500 leading-[1.65] max-w-[540px]">
            We choose the tools based on what needs to be built — not because a
            technology is trendy.
          </p>
        </motion.div>

        {/* ── Columns ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 border border-slate-200/80 rounded-lg overflow-hidden bg-white">
          {TECH.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.06 * i,
                ease: "easeOut",
              }}
              className="group p-6 lg:p-8 border-b sm:border-b-0 sm:border-r border-slate-200/80 last:border-r-0 last:border-b-0 hover:bg-slate-50/60 transition-colors duration-300"
            >
              <h3 className="text-[11px] font-bold tracking-[0.22em] text-[#0B132B] uppercase mb-6 pb-4 border-b border-slate-100 group-hover:border-[#0066FF]/40 transition-colors duration-300">
                {group.category}
              </h3>
              <ul className="space-y-3.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] text-slate-500 group-hover:text-slate-700 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#0066FF] transition-colors duration-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
