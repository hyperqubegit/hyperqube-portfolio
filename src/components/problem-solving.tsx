"use client";

import { useRef, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

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
      className="py-20 lg:py-28 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20">
        {/* ── Left: sticky ── */}
        <div className="lg:h-[700px]">
          <div className="lg:sticky lg:top-36">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[var(--color-brand-blue)]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-blue)] uppercase">
                What we solve
              </span>
            </div>
            <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.12] mb-6">
              We build solutions
              <br className="hidden lg:block" /> for real problems.
            </h2>

            {/* Vertical progress */}
            <div className="hidden lg:flex flex-col gap-3 mt-10">
              {ITEMS.map((item, i) => (
                <button
                  key={item.num}
                  className="flex items-center gap-4 text-left group"
                  onClick={() => {
                    const el = document.getElementById(`solve-${item.num}`);
                    el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                >
                  <span
                    className={cn(
                      "text-[12px] font-bold tracking-[0.1em] transition-colors duration-300",
                      active === i ? "text-[var(--color-brand-blue)]" : "text-[var(--color-brand-text-muted)]"
                    )}
                  >
                    {item.num}
                  </span>
                  <span
                    className={cn(
                      "h-[2px] transition-all duration-500",
                      active === i
                        ? "w-16 bg-[var(--color-brand-blue)]"
                        : "w-8 bg-[var(--color-brand-border)]"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: scroll items ── */}
        <div className="flex flex-col gap-6 pb-[20vh]">
          {ITEMS.map((item, i) => (
            <div
              key={item.num}
              id={`solve-${item.num}`}
              className={cn(
                "p-8 lg:p-10 border transition-all duration-500",
                active === i
                  ? "bg-[var(--color-brand-panel)] border-[var(--color-brand-border-blue)] shadow-[0_8px_40px_-12px_rgba(0,102,255,0.08)] opacity-100"
                  : "bg-transparent border-[var(--color-brand-border)] opacity-[0.35]"
              )}
            >
              <span
                className={cn(
                  "text-[13px] font-bold tracking-[0.1em] mb-5 block transition-colors duration-300",
                  active === i ? "text-[var(--color-brand-blue)]" : "text-[var(--color-brand-text-muted)]"
                )}
              >
                {item.num}
              </span>
              <h3
                className={cn(
                  "text-[22px] lg:text-[26px] font-bold leading-[1.2] mb-4 transition-colors duration-300",
                  active === i ? "text-[var(--color-brand-text)]" : "text-[var(--color-brand-text-secondary)]"
                )}
              >
                {item.title}
              </h3>
              <p className="text-[16px] text-[var(--color-brand-text-secondary)] leading-[1.65]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
