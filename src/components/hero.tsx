"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] flex items-center pt-20 pb-16 lg:pt-0 lg:pb-0 bg-[#FAFBFC] overflow-hidden"
    >
      <div className="w-full max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
        {/* ── Left: Copy ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
            <span className="h-[2px] w-7 bg-[#0B132B]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#0B132B] uppercase">
              Turn your ideas into reality
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(3rem,6.5vw,5.25rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.06] mb-7"
          >
            Have an Idea?
            <br />
            <span className="text-[#0066FF]">We&apos;ll Build&nbsp;It.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[17px] lg:text-[19px] text-slate-500 leading-[1.65] mb-10 max-w-[480px]"
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
              className="group inline-flex items-center gap-2 bg-[#0B132B] px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0066FF] transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#what-we-build"
              className="group relative inline-flex items-center gap-1.5 px-5 py-3.5 text-[14px] font-semibold text-[#0B132B] hover:text-[#0066FF] transition-colors"
            >
              Explore What We Build
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Editorial photo card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[4/5] border border-slate-200/60 shadow-lg shadow-slate-200/50">
            <motion.img
              style={{ y: imgY }}
              src="/office.avif"
              alt="HyperQube team at work"
              className="absolute inset-0 w-full h-[110%] object-cover"
            />
            {/* subtle blue edge accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066FF] via-[#0066FF]/60 to-transparent" />
          </div>

          {/* Small floating label */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="absolute -left-8 bottom-14 bg-white border border-slate-200 px-4 py-3 shadow-md rounded-md flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            <span className="text-[12px] font-bold tracking-[0.12em] text-[#0B132B] uppercase">
              Engineering&nbsp;Studio
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
