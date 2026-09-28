"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

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

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.45", "end 0.55"],
  });

  const smoothProg = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveStage(
      Math.min(Math.max(Math.floor(v * STAGES.length), 0), STAGES.length - 1)
    );
  });

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAFBFC] border-t border-slate-200/60">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ── Top: heading + video ── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[#0066FF]" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#0066FF] uppercase">
                How we work
              </span>
            </div>
            <h2 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.12] mb-5">
              Great products are built through clear thinking.
            </h2>
            <p className="text-[17px] text-slate-500 leading-[1.65] max-w-[460px]">
              Close collaboration and good engineering turn ideas into software
              that actually works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative rounded-xl overflow-hidden aspect-video border border-slate-200/60 shadow-lg shadow-slate-200/40"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/meeting.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>

        {/* ── Desktop horizontal timeline ── */}
        <div ref={timelineRef} className="hidden lg:block relative pt-4 pb-4">
          {/* Base line */}
          <div className="absolute top-[46px] left-0 right-0 h-[2px] bg-slate-200/70" />
          {/* Active line */}
          <motion.div
            className="absolute top-[46px] left-0 h-[2px] bg-[#0066FF] origin-left"
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
                      "w-5 h-5 rounded-full border-[3px] bg-[#FAFBFC] mb-8 transition-all duration-500",
                      isActive ? "border-[#0066FF]" : "border-slate-300",
                      isCurrent ? "scale-125 shadow-md shadow-blue-500/20" : ""
                    )}
                  />
                  <span
                    className={cn(
                      "text-[11px] font-bold tracking-[0.22em] uppercase mb-2 transition-colors duration-300",
                      isCurrent ? "text-[#0B132B]" : "text-slate-400"
                    )}
                  >
                    <span
                      className={cn(
                        "mr-1.5 transition-colors duration-300",
                        isActive ? "text-[#0066FF]" : "text-slate-300"
                      )}
                    >
                      {s.num}
                    </span>
                    {s.title}
                  </span>
                  <p
                    className={cn(
                      "text-[14px] leading-[1.55] transition-colors duration-300",
                      isCurrent ? "text-slate-600" : "text-slate-400"
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
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-slate-200/70" />
          <div className="flex flex-col gap-10">
            {STAGES.map((s) => (
              <div key={s.num} className="relative pl-8">
                <div className="absolute left-[-4px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[#0066FF] bg-[#FAFBFC]" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase mb-1.5 block text-[#0B132B]">
                  <span className="text-[#0066FF] mr-1.5">{s.num}</span>
                  {s.title}
                </span>
                <p className="text-[14px] text-slate-500 leading-[1.55]">
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
