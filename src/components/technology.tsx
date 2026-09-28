"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";
import { cn } from "@/lib/utils";

const TECH_CATEGORIES = [
  {
    category: "FRONTEND & CORE",
    technologies: ["Next.js", "React", "TypeScript"],
    glowPos: "top-[-10%] right-[-10%]"
  },
  {
    category: "STYLING & MOTION",
    technologies: ["Tailwind CSS", "Framer Motion"],
    glowPos: "bottom-[-10%] left-[-10%]"
  }
];

export function Technology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-16 lg:mb-24 flex flex-col items-center text-center max-w-[800px] mx-auto"
        >
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              Technology
            </span>
          </div>
          <h2 className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05]">
            Technology <br className="hidden sm:block" />
            <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">we build with.</em>
          </h2>
          <p className="mt-6 text-[16px] text-[var(--color-brand-text-secondary)] max-w-[500px] mx-auto">
            We rely on robust, modern, and production-tested technologies that ensure performance, scalability, and maintainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-[900px] mx-auto">
          {TECH_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-2xl p-8 lg:p-12 relative overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:border-[rgba(255,255,255,0.15)]"
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
                <SpectrumGlow
                  variant="card"
                  className={cn("w-[400px] h-[400px]", cat.glowPos)}
                />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[13px] font-medium tracking-[0.1em] text-[var(--color-brand-text-very-muted)] uppercase mb-8">
                  {cat.category}
                </h3>
                <div className="flex flex-col gap-5 mt-auto">
                  {cat.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-text-very-muted)] group-hover:bg-[var(--color-brand-accent)] transition-colors duration-500 shadow-[0_0_8px_rgba(255,75,62,0)] group-hover:shadow-[0_0_8px_rgba(255,75,62,0.8)]" />
                      <span className="text-[20px] lg:text-[24px] font-medium text-[var(--color-brand-text)]">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
