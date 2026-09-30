"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Search, Layers, Rocket } from "lucide-react";
import { SpectrumGlow } from "@/components/spectrum-glow";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "We understand the problem, define the goals, and figure out what needs to be built.",
    icon: Search
  },
  {
    num: "02",
    title: "BUILD",
    desc: "We design and develop the product, system, or experience around those requirements.",
    icon: Layers
  },
  {
    num: "03",
    title: "LAUNCH & EVOLVE",
    desc: "We ship it, refine what matters, and help the product keep improving as your needs grow.",
    icon: Rocket
  }
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax for the video container
  const videoY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <section
      id="process"
      ref={ref}
      className="py-16 lg:py-20 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto">
          
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 16 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              Process
            </span>
          </motion.div>
          
          <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(52px,5.5vw,76px)] font-normal text-white leading-[1.0] mb-4"
          >
            <span>How we turn</span>
            <br className="hidden sm:block" />
            <span>
              <em className="font-editorial italic font-normal text-[clamp(56px,6vw,84px)] text-[#B0B0B0]">ideas </em>
              into something real.
            </span>
          </motion.h2>
          
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 12 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] lg:text-[18px] text-[#A0A0A0] leading-[1.55] max-w-[650px]"
          >
            From the first conversation to the final launch, we keep the process clear, focused, and built around what your business actually needs.
          </motion.p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-[1200px] mx-auto mt-9 lg:mt-10">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center"
            >
              {/* Number */}
              <span className="text-[12px] font-mono text-[rgba(255,255,255,0.3)] tracking-widest mb-3 transition-colors duration-500 group-hover:text-[#A0A0A0]">
                {step.num}
              </span>

              {/* Icon */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4
                }}
                className="relative mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
              >
                <step.icon className="w-11 h-11 lg:w-12 lg:h-12 text-[#D0D0D0] transition-colors duration-500 group-hover:text-white" strokeWidth={1.8} />
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF4B3E] opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(255,75,62,0.8)]" />
              </motion.div>

              {/* Title */}
              <h3 className="text-[22px] lg:text-[25px] font-medium text-white mb-2 transition-transform duration-500 group-hover:-translate-y-0.5">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-[15px] lg:text-[16px] text-[#8A8A8A] leading-[1.55] max-w-[340px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Meeting Video Block */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1320px] mx-auto mt-16 lg:mt-20"
        >
          {/* Subtle Spectrum behind video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] pointer-events-none opacity-20 -z-10">
            <SpectrumGlow variant="card" />
          </div>

          <motion.div
            style={{ y: videoY }}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] border border-[rgba(255,255,255,0.15)] bg-[#050505]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-100"
            >
              <source src="/meeting.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
