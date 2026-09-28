"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    num: "01",
    title: "REAL PROBLEMS",
    desc: "We start with the problem, not the technology.",
  },
  {
    num: "02",
    title: "TECHNOLOGY WITH PURPOSE",
    desc: "Every technical decision has a reason.",
  },
  {
    num: "03",
    title: "ENGINEERING THAT SCALES",
    desc: "Build foundations that grow with the product.",
  },
  {
    num: "04",
    title: "DESIGNED FOR PEOPLE",
    desc: "Powerful technology without unnecessary complexity.",
  },
];

export function Principles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  };

  return (
    <section className="py-[120px] lg:py-[160px] bg-white border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16" ref={containerRef}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center max-w-[800px] mx-auto"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0066FF] uppercase">
              Core Principles
            </span>
            <div className="h-[2px] w-6 bg-[#0066FF]" />
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.05]">
            Built around your goals.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {PRINCIPLES.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.num}
              className="group relative flex flex-col pt-8 border-t border-slate-200 hover:border-[#0066FF] transition-colors duration-500"
            >
              {/* Subtle top accent */}
              <div className="absolute top-[-1px] left-0 w-0 h-[2px] bg-[#0066FF] group-hover:w-full transition-all duration-500 ease-out" />
              
              <span className="text-[14px] font-bold tracking-[0.1em] text-slate-300 group-hover:text-[#0066FF] mb-6 transition-colors duration-300">
                {item.num}
              </span>
              
              <h3 className="text-[16px] font-bold tracking-[0.1em] text-[#0B132B] uppercase mb-4">
                {item.title}
              </h3>
              
              <p className="text-[15px] text-slate-500 leading-[1.6]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
