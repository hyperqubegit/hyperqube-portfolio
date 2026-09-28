"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BuiltTogether() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-[120px] lg:py-[160px] bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20 max-w-[800px]"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-6 bg-[#0066FF]" />
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#0066FF] uppercase">
              Technology is only part of the job
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.1]">
            Good software starts with understanding the people and problems behind it.
          </h2>
          <p className="mt-8 text-[18px] text-slate-500 leading-[1.6] max-w-[600px]">
            The rest is asking better questions, engineering with purpose, and building foundations that actually scale.
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] border border-slate-100 shadow-sm"
        >
          <motion.img 
            style={{ y }}
            src="/office.avif" 
            alt="HyperQube Team Collaboration" 
            className="absolute top-[-10%] left-0 w-full h-[120%] object-cover origin-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
