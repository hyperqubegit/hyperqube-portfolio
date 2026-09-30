"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, mediaReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] flex items-center pt-20 pb-16 lg:pt-0 lg:pb-0 bg-[var(--color-brand-bg)] overflow-visible"
    >
      {/* Spectrum Atmospheric Glow */}
      <motion.div 
        style={{ y: glowY }} 
        className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] pointer-events-none z-0"
      >
        <SpectrumGlow variant="hero" />
      </motion.div>

      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* ── Left: Copy ── */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              Turn your ideas into reality
            </span>
          </div>

          <h1 className="text-[clamp(64px,7vw,118px)] font-normal tracking-[-0.04em] text-[var(--color-brand-text)] leading-[0.98] mb-8">
            <span>Have an Idea?</span>
            <br />
            <span>
              <em className="font-editorial italic font-normal tracking-[-0.02em] text-[clamp(68px,7.5vw,126px)]">We&apos;ll Build It.</em>
            </span>
          </h1>

          <p className="text-[17px] lg:text-[19px] font-normal text-[var(--color-brand-text-secondary)] leading-[1.65] mb-12 max-w-[480px]">
            Custom software, digital products, intelligent systems, and
            data-driven solutions built around your business.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[var(--color-brand-accent)] px-7 py-3.5 text-[14px] font-normal text-white hover:bg-[var(--color-brand-accent-light)] transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#what-we-build"
              className="group relative inline-flex items-center gap-2 bg-[var(--color-brand-panel)] border border-[var(--color-brand-border)] hover:border-[var(--color-brand-border-hover)] px-6 py-3.5 text-[14px] font-normal text-[var(--color-brand-text)] hover:text-[var(--color-brand-accent)] transition-all rounded-sm"
            >
              Explore What We Build
              <ArrowRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </motion.div>

        {/* ── Right: Editorial photo card ── */}
        <motion.div
          variants={mediaReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ y: imgY }}
          className="hidden lg:block relative"
        >
          {/* Subtle spectrum glow behind it */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-40">
            <SpectrumGlow variant="card" />
          </div>
          
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] border border-[rgba(255,255,255,0.15)] bg-[var(--color-brand-card)] shadow-2xl">
            <img
              src="/office.avif"
              alt="HyperQube team at work"
              className="absolute inset-0 w-full h-[110%] object-cover opacity-95"
            />
          </div>

          {/* Small floating label */}
          <div
            className="absolute -left-6 bottom-16 bg-[var(--color-brand-panel)] border border-[rgba(255,255,255,0.1)] px-5 py-3.5 shadow-2xl rounded-sm flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]" />
            <span className="text-[11px] font-normal tracking-[0.18em] text-[var(--color-brand-text)] uppercase">
              Engineering Studio
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
