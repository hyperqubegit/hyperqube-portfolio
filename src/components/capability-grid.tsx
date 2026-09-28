"use client";

import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { CAPABILITIES } from "../data/capabilities";
import { CapabilityModal } from "./capability-modal";
import type { Capability } from "../data/capabilities";
import { cn } from "@/lib/utils";

export function CapabilityGrid() {
  const [activeCap, setActiveCap] = useState<Capability | null>(null);
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
    <section id="what-we-build" className="py-[120px] lg:py-[160px] bg-white relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24 max-w-[700px]"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0066FF] uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.1] mb-6">
            From first idea to production-ready systems, we build the technology your business actually needs.
          </h2>
        </motion.div>

        {/* Asymmetric / Masonry-style Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
        >
          {CAPABILITIES.map((cap, index) => {
            // Assign varying spans for a structured asymmetric look
            let spanClass = "lg:col-span-4";
            if (index === 0 || index === 3) spanClass = "lg:col-span-8"; // Large cards
            if (index === 1 || index === 2 || index === 6) spanClass = "lg:col-span-4"; // Standard cards
            if (index === 4 || index === 5) spanClass = "lg:col-span-6"; // Medium cards

            return (
              <motion.div
                variants={itemVariants}
                key={cap.num}
                className={cn(
                  "group relative flex flex-col bg-white p-8 lg:p-10 border border-slate-200 transition-all duration-300 cursor-pointer overflow-hidden rounded-sm hover:-translate-y-1 hover:border-[#0066FF]/40 hover:shadow-[0_12px_40px_-12px_rgba(0,102,255,0.1)]",
                  spanClass
                )}
              >
                {/* Subtle background shift on hover */}
                <div className="absolute inset-0 bg-[#FAF9F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Click target overlay */}
                <button
                  className="absolute inset-0 w-full h-full opacity-0 z-20 cursor-pointer"
                  onClick={() => setActiveCap(cap)}
                  aria-label={`Explore ${cap.title}`}
                />

                <div className="flex-1 relative z-10 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[12px] font-bold tracking-[0.1em] text-slate-300 group-hover:text-[#0066FF] transition-colors duration-300">
                      {cap.num}
                    </span>
                    <div className="text-slate-400 group-hover:text-[#0066FF] transition-colors duration-300">
                      <cap.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>
                  
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-[#0B132B] mb-4 group-hover:text-[#0066FF] transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-[15px] text-slate-500 leading-[1.6] mb-8 max-w-[400px]">
                    {cap.shortDesc}
                  </p>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 group-hover:border-[#0066FF]/20 transition-colors duration-300">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0B132B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#0066FF] transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {activeCap && (
        <CapabilityModal
          capability={activeCap}
          onClose={() => setActiveCap(null)}
        />
      )}
    </section>
  );
}
