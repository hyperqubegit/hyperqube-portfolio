"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView
} from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

const ITEMS = [
  {
    num: "01",
    title: "Turning manual work into software",
    desc: "Replace repetitive workflows, spreadsheets, and disconnected tools with streamlined systems designed for your operations.",
  },
  {
    num: "02",
    title: "Building digital products",
    desc: "Turn ideas into usable, scalable products designed around actual users — from MVP to production.",
  },
  {
    num: "03",
    title: "Making data useful",
    desc: "Transform scattered information into dashboards, analytics, and decision-support systems.",
  },
  {
    num: "04",
    title: "Adding intelligence",
    desc: "Use AI, machine learning, and automation where it creates genuine, measurable value.",
  },
];

export function ProblemSolving() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.35", "end 0.65"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(Math.max(Math.floor(v * ITEMS.length), 0), ITEMS.length - 1));
  });

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative"
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
              What we solve
            </span>
          </div>
          <h2 className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05]">
            We build solutions <br className="hidden sm:block" />
            <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">for real problems.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-24">
          {/* ── Left: sticky ── */}
          <div className="lg:h-[700px]">
            <div className="lg:sticky lg:top-40">
              {/* Vertical progress */}
            <div className="hidden lg:flex flex-col gap-4 mt-12">
              {ITEMS.map((item, i) => (
                <button
                  key={item.num}
                  className="flex items-center gap-5 text-left group"
                  onClick={() => {
                    const el = document.getElementById(`solve-${item.num}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  <span
                    className={cn(
                      "text-[12px] font-normal tracking-[0.1em] transition-colors duration-500",
                      active === i ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-text-secondary)]"
                    )}
                  >
                    {item.num}
                  </span>
                  <span
                    className={cn(
                      "h-[2px] transition-all duration-500",
                      active === i
                        ? "w-16 bg-[var(--color-brand-accent)]"
                        : "w-8 bg-[var(--color-brand-border)]"
                    )}
                  />
                </button>
              ))}
            </div>
            </div>
          </div>

        {/* ── Right: scroll items ── */}
        <div className="flex flex-col gap-8 pb-[20vh] relative">
          {/* Subtle atmosphere behind the active right column */}
          {isInView && (
            <SpectrumGlow 
              className="top-[20%] left-[20%] w-[500px] h-[500px]"
              opacity={0.06}
            />
          )}

          {ITEMS.map((item, i) => (
            <div
              key={item.num}
              id={`solve-${item.num}`}
              className={cn(
                "p-8 lg:p-12 border transition-all duration-700 relative z-10",
                active === i
                  ? "bg-[var(--color-brand-panel)] border-[var(--color-brand-border-accent)] opacity-100 shadow-[0_16px_40px_-12px_rgba(255,75,62,0.06)]"
                  : "bg-transparent border-[var(--color-brand-border)] opacity-[0.35]"
              )}
            >
              <span
                className={cn(
                  "text-[13px] font-normal tracking-[0.1em] mb-6 block transition-colors duration-700",
                  active === i ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-text-secondary)]"
                )}
              >
                {item.num}
              </span>
              <h3
                className={cn(
                  "text-[24px] lg:text-[28px] font-normal leading-[1.2] mb-5 transition-colors duration-700",
                  active === i ? "text-[var(--color-brand-text)]" : "text-[var(--color-brand-text-secondary)]"
                )}
              >
                {item.title}
              </h3>
              <p className="text-[17px] text-[var(--color-brand-text-secondary)] leading-[1.65]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
