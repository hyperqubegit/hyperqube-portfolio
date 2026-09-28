"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeUp, lineReveal, mediaReveal } from "@/lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] flex items-center pt-20 pb-16 lg:pt-0 lg:pb-0 bg-[var(--color-brand-bg)] overflow-hidden"
    >
      {/* Subtle Atmospheric Glow */}
      <motion.div 
        style={{ y: glowY, opacity: glowOpacity }}
        className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] glow-blue blur-[120px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* ── Left: Copy ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={{ y: textY }}
          className="relative z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
            <span className="h-[2px] w-7 bg-[var(--color-brand-blue)]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[var(--color-brand-blue)] uppercase">
              Turn your ideas into reality
            </span>
          </motion.div>

          <h1 className="text-[clamp(3rem,6.5vw,5.25rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.06] mb-7 overflow-hidden flex flex-col gap-1">
            <motion.span variants={lineReveal} className="block">Have an Idea?</motion.span>
            <motion.span variants={lineReveal} className="block text-[var(--color-brand-blue)]">We&apos;ll Build&nbsp;It.</motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-[17px] lg:text-[19px] text-[var(--color-brand-text-secondary)] leading-[1.65] mb-10 max-w-[480px]"
          >
            Custom software, digital products, intelligent systems, and
            data-driven solutions built around your business.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[var(--color-brand-blue)] px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-[var(--color-brand-blue-light)] transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#what-we-build"
              className="group relative inline-flex items-center gap-1.5 px-5 py-3.5 text-[14px] font-semibold text-[var(--color-brand-text)] hover:text-[var(--color-brand-blue)] transition-colors"
            >
              Explore What We Build
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Editorial photo card ── */}
        <motion.div
          variants={mediaReveal}
          initial="hidden"
          animate="show"
          style={{ y: imgY }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] border border-[var(--color-brand-border)] bg-[var(--color-brand-card)] shadow-2xl">
            {/* Subtle inner glow behind image */}
            <div className="absolute inset-0 glow-blue opacity-50 blur-[80px]" />
            <img
              src="/office.avif"
              alt="HyperQube team at work"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Small floating label */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="absolute -left-8 bottom-14 bg-[var(--color-brand-panel)] border border-[var(--color-brand-border)] px-4 py-3 shadow-xl rounded-md flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]" />
            <span className="text-[12px] font-bold tracking-[0.12em] text-[var(--color-brand-text)] uppercase">
              Engineering&nbsp;Studio
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
