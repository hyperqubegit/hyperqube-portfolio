"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useInView
} from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, mediaReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

const STAGES = [
  { num: "01", title: "DISCOVER", desc: "Understand the problem, technical constraints, and business goals." },
  { num: "02", title: "DESIGN", desc: "Define the user experience, architecture, and data models." },
  { num: "03", title: "BUILD", desc: "Engineer the solution with clean, testable, scalable code." },
  { num: "04", title: "LAUNCH", desc: "Deploy securely and ensure optimal performance." },
  { num: "05", title: "EVOLVE", desc: "Iterate, automate, and scale based on real-world feedback." },
];

export function HowWeWork() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.45", "end 0.55"],
  });

  const smoothProg = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveStage(
      Math.min(Math.max(Math.floor(v * STAGES.length), 0), STAGES.length - 1)
    );
  });

  return (
    <section id="process" className="py-20 lg:py-28 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* ── Top: heading + video ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[var(--color-brand-accent)]" />
              <span className="text-[11px] font-medium tracking-[0.22em] text-[var(--color-brand-accent)] uppercase">
                How we work
              </span>
            </div>
            <h2 className="text-[clamp(48px,5vw,72px)] font-semibold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05] mb-6 uppercase">
              Great products are built <br/>
              through clear thinking.
            </h2>
            <p className="text-[17px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[460px]">
              Close collaboration and good engineering turn ideas into software
              that actually works.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={mediaReveal}
            className="relative rounded-xl overflow-hidden aspect-video border border-[rgba(255,255,255,0.15)] bg-[var(--color-brand-card)] shadow-2xl"
          >
            <SpectrumGlow 
              className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
              opacity={0.12}
            />
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            >
              <source src="/meeting.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* ── Desktop horizontal timeline ── */}
        <div ref={timelineRef} className="hidden lg:block relative pt-4 pb-4">
          {/* Base line */}
          <div className="absolute top-[46px] left-0 right-0 h-[2px] bg-[var(--color-brand-border)]" />
          {/* Active line */}
          <motion.div
            className="absolute top-[46px] left-0 h-[2px] bg-[var(--color-brand-accent)] origin-left shadow-[0_0_12px_rgba(255,75,62,0.8)]"
            style={{
              width: useTransform(smoothProg, [0, 1], ["0%", "100%"]),
            }}
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {STAGES.map((s, i) => {
              const isActive = activeStage >= i;
              const isCurrent = activeStage === i;
              return (
                <div key={s.num} className="flex flex-col">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full border-[3px] bg-[var(--color-brand-bg)] mb-8 transition-all duration-700 ease-out",
                      isActive ? "border-[var(--color-brand-accent)]" : "border-[var(--color-brand-text-muted)]",
                      isCurrent ? "scale-125 shadow-[0_0_12px_rgba(255,75,62,0.4)]" : ""
                    )}
                  />
                  <span
                    className={cn(
                      "text-[11px] font-medium tracking-[0.22em] uppercase mb-2 transition-colors duration-500",
                      isCurrent ? "text-[var(--color-brand-text)]" : "text-[var(--color-brand-text-secondary)]"
                    )}
                  >
                    <span
                      className={cn(
                        "mr-1.5 transition-colors duration-500",
                        isActive ? "text-[var(--color-brand-accent)]" : "text-[var(--color-brand-text-secondary)]"
                      )}
                    >
                      {s.num}
                    </span>
                    {s.title}
                  </span>
                  <p
                    className={cn(
                      "text-[14px] leading-[1.55] transition-colors duration-500",
                      isCurrent ? "text-[var(--color-brand-text-secondary)]" : "text-[var(--color-brand-text-secondary)]"
                    )}
                  >
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="lg:hidden relative pl-6">
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[var(--color-brand-border)]" />
          <div className="flex flex-col gap-10">
            {STAGES.map((s) => (
              <div key={s.num} className="relative pl-8">
                <div className="absolute left-[-4px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[var(--color-brand-accent)] bg-[var(--color-brand-bg)]" />
                <span className="text-[11px] font-medium tracking-[0.22em] uppercase mb-1.5 block text-[var(--color-brand-text)]">
                  <span className="text-[var(--color-brand-accent)] mr-1.5">{s.num}</span>
                  {s.title}
                </span>
                <p className="text-[14px] text-[var(--color-brand-text-secondary)] leading-[1.55]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
