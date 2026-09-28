"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TECH = [
  {
    category: "PRODUCT",
    items: ["Web", "Mobile", "SaaS", "Platforms"],
  },
  {
    category: "SYSTEMS",
    items: ["APIs", "Backend", "Databases", "Integrations"],
  },
  {
    category: "DATA",
    items: ["Analytics", "Dashboards", "Data Pipelines"],
  },
  {
    category: "INTELLIGENCE",
    items: ["Machine Learning", "AI", "Computer Vision"],
  },
  {
    category: "INFRASTRUCTURE",
    items: ["Cloud", "Deployment", "Monitoring", "Security"],
  },
];

export function Technology() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 },
    },
  };

  return (
    <section className="py-[120px] lg:py-[160px] bg-[#F4F8FC] border-t border-slate-200/50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16" ref={containerRef}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0066FF] uppercase">
              Technology Stack
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.1] mb-6">
            Technology follows <br className="hidden md:block"/>the problem.
          </h2>
          <p className="text-[18px] text-slate-500 leading-[1.6] max-w-[600px]">
            We choose the tools based on what needs to be built — not because a technology is trendy.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {TECH.map((group) => (
            <motion.div 
              variants={itemVariants} 
              key={group.category} 
              className="group bg-white p-6 md:p-8 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-[0_12px_40px_-12px_rgba(0,102,255,0.08)] hover:-translate-y-1 hover:border-[#0066FF]/20 transition-all duration-300"
            >
              <h3 className="text-[12px] font-bold tracking-[0.1em] text-[#0B132B] uppercase mb-8 pb-4 border-b border-slate-100 group-hover:border-[#0066FF]/30 transition-colors duration-300">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] md:text-[15px] text-slate-500 group-hover:text-slate-800 transition-colors duration-300">
                    <span className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-[#0066FF] transition-colors duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
