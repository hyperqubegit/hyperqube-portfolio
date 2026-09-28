"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand the problem, technical constraints, and business goals.",
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "Define the user experience, architecture, and data models.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Engineer the solution with clean, testable, and scalable code.",
  },
  {
    num: "04",
    title: "LAUNCH",
    desc: "Deploy securely into production and ensure optimal performance.",
  },
  {
    num: "05",
    title: "EVOLVE",
    desc: "Iterate, automate, and scale based on real user feedback.",
  },
];

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.max(Math.floor(latest * STAGES.length), 0),
      STAGES.length - 1
    );
    setActiveIndex(index);
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-[120px] lg:py-[160px] bg-[#FAF9F6] relative border-t border-slate-200/50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16" ref={containerRef}>
        
        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 lg:gap-24 mb-24 items-center">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-6 bg-[#0066FF]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#0066FF] uppercase">
                Methodology
              </span>
            </div>
            <h2 className="text-[clamp(3rem,5vw,4.5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.05]">
              How we work.
            </h2>
            <p className="mt-6 text-[18px] text-slate-500 leading-[1.6] max-w-[480px]">
              Great products are built through clear thinking, close collaboration, and good engineering.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-200/50 shadow-xl shadow-slate-200/50 bg-white">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/meeting.mp4" type="video/mp4" />
            </video>
            {/* Subtle overlay for editorial feel */}
            <div className="absolute inset-0 bg-[#0B132B]/5 mix-blend-multiply" />
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative pt-12 pb-8">
          <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-slate-200/60" />
          <motion.div 
            className="absolute top-[60px] left-0 h-[2px] bg-[#0066FF]"
            style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
          />
          
          <div className="grid grid-cols-5 gap-8 relative z-10">
            {STAGES.map((stage, i) => {
              const isActive = activeIndex >= i;
              const isCurrent = activeIndex === i;
              return (
                <div key={stage.num} className="flex flex-col relative">
                  <div 
                    className={cn(
                      "w-6 h-6 rounded-full border-[4px] bg-[#FAF9F6] flex items-center justify-center mb-8 transition-all duration-500 z-10",
                      isActive ? "border-[#0066FF]" : "border-slate-300",
                      isCurrent ? "scale-125 shadow-lg shadow-blue-500/20" : ""
                    )}
                  />
                  
                  <span className={cn(
                    "text-[12px] font-bold tracking-[0.2em] uppercase mb-3 transition-colors duration-300",
                    isCurrent ? "text-[#0B132B]" : isActive ? "text-slate-600" : "text-slate-400"
                  )}>
                    <span className={cn(
                      "mr-2 transition-colors duration-300",
                      isActive ? "text-[#0066FF]" : "text-slate-300"
                    )}>{stage.num}</span> 
                    {stage.title}
                  </span>
                  <p className={cn(
                    "text-[14px] leading-[1.6] transition-colors duration-300",
                    isCurrent ? "text-slate-600" : "text-slate-400"
                  )}>
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative pl-6 py-8">
          <div className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-slate-200/60" />
          <motion.div 
            className="absolute left-[31px] top-8 w-[2px] bg-[#0066FF]" 
            style={{ height: progressHeight }} 
          />

          <div className="flex flex-col gap-12">
            {STAGES.map((stage, i) => {
              const isActive = activeIndex >= i;
              const isCurrent = activeIndex === i;

              return (
                <div key={stage.num} className="relative pl-12">
                  <div 
                    className={cn(
                      "absolute -left-[5px] top-1 w-5 h-5 rounded-full border-[4px] bg-[#FAF9F6] transition-all duration-500",
                      isActive ? "border-[#0066FF]" : "border-slate-300",
                      isCurrent ? "scale-125 shadow-md shadow-blue-500/20" : ""
                    )} 
                  />
                  
                  <span className={cn(
                    "text-[12px] font-bold tracking-[0.2em] uppercase mb-2 block transition-colors",
                    isCurrent ? "text-[#0B132B]" : isActive ? "text-slate-600" : "text-slate-400"
                  )}>
                    <span className={cn(
                      "mr-2 transition-colors",
                      isActive ? "text-[#0066FF]" : "text-slate-300"
                    )}>{stage.num}</span>
                    {stage.title}
                  </span>
                  <p className={cn(
                    "text-[15px] leading-[1.6] transition-colors",
                    isCurrent ? "text-slate-600" : "text-slate-400"
                  )}>
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
