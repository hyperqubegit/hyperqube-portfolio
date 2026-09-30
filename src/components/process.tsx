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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      className="py-20 lg:py-32 bg-[var(--color-brand-bg)] border-t border-[var(--color-brand-border)] relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto mb-20 lg:mb-28">
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 lg:mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              Process
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(48px,6vw,82px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05] mb-8 lg:mb-10"
          >
            <span>How we turn</span>
            <br className="hidden sm:block" />
            <span>
              <em className="font-editorial italic font-normal text-[clamp(52px,6.5vw,90px)] text-[var(--color-brand-text-secondary)]">ideas </em>
              into something real.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] lg:text-[19px] text-[var(--color-brand-text-secondary)] leading-[1.65] max-w-[600px]"
          >
            From the first conversation to the final launch, we keep the process clear, focused, and built around what your business actually needs.
          </motion.p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 mb-20 lg:mb-28">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col items-center text-center max-w-[340px] mx-auto"
            >
              {/* Icon & Number */}
              <div className="flex flex-col items-center gap-4 mb-8">
                <span className="text-[12px] font-mono text-[var(--color-brand-text-very-muted)] tracking-widest transition-colors duration-500 group-hover:text-[var(--color-brand-text-muted)]">
                  {step.num}
                </span>
                <div className="relative">
                  <step.icon className="w-12 h-12 lg:w-14 lg:h-14 text-[var(--color-brand-text-secondary)] transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-1 group-hover:text-white" strokeWidth={1.2} />
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] opacity-40 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_8px_rgba(255,75,62,0)] group-hover:shadow-[0_0_8px_rgba(255,75,62,0.6)]" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[24px] lg:text-[28px] font-medium tracking-[-0.01em] text-[var(--color-brand-text)] mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-[16px] lg:text-[17px] text-[var(--color-brand-text-secondary)] leading-[1.65]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Meeting Video Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1320px] mx-auto"
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
