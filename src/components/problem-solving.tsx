"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    num: "01",
    title: "Turning manual work into software",
    desc: "Replace spreadsheets, repetitive workflows, and disconnected tools with streamlined systems.",
  },
  {
    num: "02",
    title: "Building digital products",
    desc: "Turn ideas into usable, scalable products designed around real users.",
  },
  {
    num: "03",
    title: "Making data useful",
    desc: "Transform scattered information into analytics, dashboards, and actionable insights.",
  },
  {
    num: "04",
    title: "Adding intelligence",
    desc: "Use AI, machine learning, and automation where they create genuine value.",
  },
];

export function ProblemSolving() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.max(Math.floor(latest * ITEMS.length), 0),
      ITEMS.length - 1
    );
    setActiveIndex(index);
  });

  return (
    <section 
      ref={containerRef}
      className="py-[120px] lg:py-[160px] bg-[#F8FAFC] relative border-t border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1fr,1.2fr] gap-16 lg:gap-24 relative">
        
        {/* Left Side: Sticky Content */}
        <div className="lg:h-[800px]">
          <div className="lg:sticky lg:top-40 flex flex-col justify-between h-[400px]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-6 bg-[#0066FF]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#0066FF] uppercase">
                  What we solve
                </span>
              </div>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.1] mb-6">
                We build solutions <br className="hidden lg:block"/>for real problems.
              </h2>
            </div>
            
            {/* Visual Progress System */}
            <div className="hidden lg:flex flex-col gap-5 mt-12">
              {ITEMS.map((item, i) => (
                <div key={item.num} className="flex items-center gap-4">
                  <span className={cn(
                    "text-[12px] font-bold tracking-[0.1em] transition-colors duration-300",
                    activeIndex === i ? "text-[#0066FF]" : "text-slate-300"
                  )}>
                    {item.num}
                  </span>
                  <div className="relative w-[120px] h-[1px] bg-slate-200">
                    {activeIndex === i && (
                      <motion.div 
                        layoutId="activeProgress"
                        className="absolute inset-0 bg-[#0066FF]" 
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Items */}
        <div className="flex flex-col gap-8 pb-[30vh]">
          {ITEMS.map((item, i) => (
            <div 
              key={item.num}
              className={cn(
                "p-10 lg:p-14 bg-white border transition-all duration-500 rounded-sm",
                activeIndex === i 
                  ? "border-[#0066FF]/20 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.08)] opacity-100 translate-x-0 scale-100" 
                  : "border-slate-100 opacity-40 translate-x-4 scale-[0.98]"
              )}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className={cn(
                  "text-[14px] font-bold tracking-[0.1em] transition-colors duration-300",
                  activeIndex === i ? "text-[#0066FF]" : "text-slate-300"
                )}>
                  {item.num}
                </span>
              </div>
              <h3 className={cn(
                "text-[22px] lg:text-[28px] font-bold leading-[1.2] mb-4 transition-colors duration-300",
                activeIndex === i ? "text-[#0B132B]" : "text-slate-400"
              )}>
                {item.title}
              </h3>
              <p className="text-[16px] lg:text-[18px] text-slate-500 leading-[1.6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
