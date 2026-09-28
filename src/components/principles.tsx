"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

const PRINCIPLES = [
  { num: "01", title: "REAL PROBLEMS", desc: "We start with the problem, not the technology." },
  { num: "02", title: "TECHNOLOGY WITH PURPOSE", desc: "Every technical decision has a reason." },
  { num: "03", title: "ENGINEERING THAT SCALES", desc: "Build foundations that can grow with the product." },
  { num: "04", title: "DESIGNED FOR PEOPLE", desc: "Powerful technology without unnecessary complexity." },
];

export function Principles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.4", "end 0.6"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(
      Math.min(Math.max(Math.floor(v * PRINCIPLES.length), 0), PRINCIPLES.length - 1)
    );
  });

  return (
    <section
      ref={containerRef}
      className="py-20 lg:py-32 bg-[#030303] relative border-t border-[var(--color-brand-border)] transition-colors duration-1000"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-24 relative z-10">
        {/* ── Left: Sticky Heading ── */}
        <div className="lg:h-[800px]">
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={fadeUp}
            className="lg:sticky lg:top-40"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[var(--color-brand-accent)]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-accent)] uppercase">
                Core Principles
              </span>
            </div>
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-extrabold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.08] uppercase">
              Built <br />
              Around <br />
              <em className="font-serif italic font-normal tracking-normal text-[var(--color-brand-text-secondary)]">Your Goals.</em>
            </h2>
          </motion.div>
        </div>

        {/* ── Right: Scroll Items ── */}
        <div className="flex flex-col gap-12 lg:gap-16 pb-[30vh]">
          {PRINCIPLES.map((p, i) => {
            const isActive = active >= i; // Activate as we scroll past them
            const isCurrent = active === i;
            return (
              <div
                key={p.num}
                className={cn(
                  "relative pl-6 lg:pl-10 py-4 transition-all duration-700 ease-out",
                  isActive ? "opacity-100 translate-y-0" : "opacity-30 translate-y-8"
                )}
              >
                {/* Accent Line */}
                <span
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-700 ease-out",
                    isCurrent ? "bg-[var(--color-brand-accent)] scale-y-100" : "bg-[var(--color-brand-border)] scale-y-100"
                  )}
                />

                <span
                  className={cn(
                    "text-[14px] font-bold tracking-[0.1em] mb-4 block transition-colors duration-700",
                    isCurrent ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-text-muted)]"
                  )}
                >
                  {p.num}
                </span>

                <h3
                  className={cn(
                    "text-[28px] lg:text-[36px] font-bold tracking-tight leading-[1.1] mb-5 uppercase transition-colors duration-700",
                    isActive ? "text-[var(--color-brand-text)]" : "text-[var(--color-brand-text-secondary)]"
                  )}
                >
                  {p.title}
                </h3>

                <p
                  className={cn(
                    "text-[18px] lg:text-[20px] leading-[1.6] max-w-[480px] transition-colors duration-700",
                    isActive ? "text-[var(--color-brand-text-secondary)]" : "text-[var(--color-brand-text-muted)]"
                  )}
                >
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
