"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, slideInRow } from "@/lib/motion";

const TECH_STACK = [
  {
    category: "FRONTEND",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "BACKEND",
    items: ["Node.js", "Python", "FastAPI", "REST APIs"],
  },
  {
    category: "DATA",
    items: ["PostgreSQL", "Supabase", "Firebase", "SQLite"],
  },
  {
    category: "AI / ML",
    items: ["Python", "scikit-learn", "OpenAI APIs", "Computer Vision", "Machine Learning"],
  },
  {
    category: "INFRASTRUCTURE",
    items: ["Vercel", "Docker", "GitHub", "Cloud platforms"],
  },
];

export function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-20 lg:mb-32"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[var(--color-brand-accent)]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-accent)] uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05] mb-8 uppercase">
            Technology <br className="hidden md:block" />
            <em className="font-serif italic font-normal tracking-normal text-[var(--color-brand-text-secondary)]">We Actually Use.</em>
          </h2>
          <p className="text-[18px] lg:text-[20px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[580px]">
            We choose the tools that fit the problem, the product, and the team — not the trend.
          </p>
        </motion.div>

        {/* ── Technical Editorial Index ── */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 lg:gap-y-24">
          {TECH_STACK.map((group, i) => (
            <motion.div
              key={group.category}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={{
                ...slideInRow,
                show: {
                  ...slideInRow.show,
                  transition: { ...slideInRow.show.transition, delay: 0.1 * i },
                },
              }}
              className="flex flex-col"
            >
              <h3 className="text-[14px] font-bold tracking-[0.2em] text-[var(--color-brand-text)] uppercase mb-6 pb-4 border-b border-[var(--color-brand-border)]">
                {group.category}
              </h3>
              
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                {group.items.map((item) => (
                  <li key={item} className="group relative inline-flex items-center gap-3 w-fit cursor-default">
                    {/* Tiny orange indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-border-hover)] group-hover:bg-[var(--color-brand-accent)] transition-colors duration-300 shrink-0" />
                    
                    <span className="text-[16px] lg:text-[17px] font-medium text-[var(--color-brand-text-secondary)] group-hover:text-[var(--color-brand-text)] transition-colors duration-300 relative">
                      {item}
                      {/* Subtle underline expands */}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-brand-accent)] group-hover:w-full transition-all duration-500 ease-out" />
                    </span>
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
