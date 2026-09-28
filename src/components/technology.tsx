"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  {
    num: "01",
    id: "frontend",
    title: "PRODUCT & FRONTEND",
    colSpan: "md:col-span-1",
    technologies: [
      { name: "Next.js", monogram: "N", desc: "Application framework" },
      { name: "React", monogram: "R" },
      { name: "TypeScript", monogram: "TS", desc: "Static typing" },
      { name: "JavaScript", monogram: "JS" },
    ],
    glowPos: "top-[-20%] right-[-10%]"
  },
  {
    num: "02",
    id: "backend",
    title: "BACKEND & APIs",
    colSpan: "md:col-span-1",
    technologies: [
      { name: "Node.js", monogram: "N" },
      { name: "Python", monogram: "PY", desc: "Logic & processing" },
      { name: "REST APIs", monogram: "API" },
    ],
    glowPos: "bottom-[-20%] left-[-10%]"
  },
  {
    num: "03",
    id: "ai",
    title: "AI & INTELLIGENCE",
    colSpan: "md:col-span-2",
    desc: "Turning data into useful systems, automation, and intelligent product experiences.",
    technologies: [
      { name: "Machine Learning", monogram: "ML" },
      { name: "Computer Vision", monogram: "CV" },
      { name: "Data Analysis", monogram: "DA" },
      { name: "AI APIs", monogram: "AI" },
    ],
    glowPos: "top-[-30%] right-[-10%] w-[600px] h-[600px]",
    isFeatured: true
  },
  {
    num: "04",
    id: "data",
    title: "DATA & DATABASES",
    colSpan: "md:col-span-1",
    technologies: [
      { name: "PostgreSQL", monogram: "PG", desc: "Relational data" },
      { name: "Supabase", monogram: "SB" },
      { name: "Firebase", monogram: "FB" },
    ],
    glowPos: "top-[-10%] left-[-10%]"
  },
  {
    num: "05",
    id: "design",
    title: "DESIGN & MOTION",
    colSpan: "md:col-span-1",
    technologies: [
      { name: "Tailwind CSS", monogram: "TW" },
      { name: "Framer Motion", monogram: "FM" },
    ],
    glowPos: "bottom-[-10%] right-[-10%]"
  },
  {
    num: "06",
    id: "cloud",
    title: "CLOUD & DELIVERY",
    colSpan: "md:col-span-2 lg:col-span-1",
    technologies: [
      { name: "Vercel", monogram: "V", desc: "Edge deployment" },
      { name: "GitHub", monogram: "GH" },
    ],
    glowPos: "top-[-10%] right-[-10%]"
  },
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
          <p className="mt-6 text-[16px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[540px] mx-auto">
            We choose technologies based on the problem, the product, and the environment — building with tools that keep products fast, maintainable, and ready to evolve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group bg-[#080808] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 lg:p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.15)] flex flex-col",
                cat.colSpan
              )}
            >
              <div className={cn("absolute inset-0 pointer-events-none transition-opacity duration-700", cat.isFeatured ? "opacity-60 group-hover:opacity-100" : "opacity-30 group-hover:opacity-60")}>
                <SpectrumGlow
                  variant="card"
                  className={cn("w-[400px] h-[400px]", cat.glowPos)}
                />
              </div>

              <div className="relative z-10 mb-8 lg:mb-12">
                <span className="text-[12px] font-medium tracking-[0.1em] text-[var(--color-brand-text-very-muted)] block mb-3">
                  {cat.num}
                </span>
                <h3 className="text-[15px] font-medium tracking-[0.06em] text-[var(--color-brand-text)] uppercase">
                  {cat.title}
                </h3>
                {cat.desc && (
                  <p className="mt-4 text-[15px] text-[var(--color-brand-text-secondary)] leading-[1.6] max-w-[400px]">
                    {cat.desc}
                  </p>
                )}
              </div>

              <div className={cn("relative z-10 grid gap-5 lg:gap-6 mt-auto", cat.isFeatured ? "sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2")}>
                {cat.technologies.map((tech) => (
                  <div key={tech.name} className="group/item flex items-start gap-4">
                    <div className="w-9 h-9 rounded bg-[#101010] border border-[var(--color-brand-border)] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover/item:border-[var(--color-brand-border-hover)]">
                      <span className="text-[11px] font-mono font-medium text-[var(--color-brand-text-secondary)] group-hover/item:text-[var(--color-brand-text)] transition-colors">
                        {tech.monogram}
                      </span>
                    </div>
                    
                    <div className="flex flex-col mt-0.5">
                      <div className="flex items-center gap-2 transform transition-transform duration-300 group-hover/item:translate-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 shadow-[0_0_8px_rgba(255,75,62,0.6)]" />
                        <span className="text-[15px] font-medium text-[var(--color-brand-text)] leading-none">{tech.name}</span>
                      </div>
                      {tech.desc && (
                        <span className="text-[13px] text-[var(--color-brand-text-muted)] mt-1.5 block leading-none">
                          {tech.desc}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
