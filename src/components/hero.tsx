"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 }
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] lg:h-[95vh] flex items-center pt-24 pb-20 lg:py-0 bg-[#FAF9F6] overflow-hidden border-b border-slate-200/60"
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-[#0B132B]" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0B132B] uppercase">
              Turn your ideas into reality
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-[clamp(3.5rem,7vw,5.5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.05] mb-8"
          >
            Have an Idea?<br />
            <span className="text-[#0066FF]">We&apos;ll Build It.</span>
          </motion.h1>

          <motion.p 
            variants={fadeUp}
            className="text-[18px] lg:text-[20px] text-slate-500 mb-12 max-w-[500px] leading-[1.6]"
          >
            Custom software, digital products, intelligent systems, and data-driven solutions built around your business.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#0B132B] px-8 py-4 text-[15px] font-medium text-white hover:bg-[#0066FF] transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#what-we-build"
              className="group inline-flex items-center gap-2 px-6 py-4 text-[15px] font-medium text-[#0B132B] hover:text-[#0066FF] transition-colors relative"
            >
              Explore What We Build
              <span className="absolute bottom-0 left-6 right-6 h-[2px] bg-[#0066FF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Geometric Brand Visual */}
        <motion.div 
          style={{ y: parallaxY }}
          className="hidden lg:flex justify-end relative h-full items-center"
        >
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Grid Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(to right, rgba(11, 19, 43, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 19, 43, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            {/* Main Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-slate-200 bg-white/50 backdrop-blur-sm shadow-[0_20px_40px_-15px_rgba(0,102,255,0.05)] flex items-center justify-center p-8"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#0B132B] -translate-x-[1px] -translate-y-[1px]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#0B132B] translate-x-[1px] -translate-y-[1px]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#0B132B] -translate-x-[1px] translate-y-[1px]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#0B132B] translate-x-[1px] translate-y-[1px]" />

              {/* HQ Mark */}
              <motion.div 
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4, type: "spring" as const, stiffness: 100 }}
                className="w-full h-full bg-[#0B132B] flex items-center justify-center relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-50" />
                <span className="text-white text-[72px] font-bold tracking-tight leading-none relative z-10">
                  HQ
                </span>
                
                {/* Subtle internal animated grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Interface Fragments */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="absolute top-[20%] left-[-5%] bg-white border border-slate-200 py-3 px-4 shadow-sm flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <div className="h-2 w-16 bg-slate-100 rounded-sm" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="absolute bottom-[20%] right-[-10%] bg-white border border-slate-200 py-3 px-4 shadow-sm flex flex-col gap-2"
            >
              <div className="h-2 w-24 bg-slate-100 rounded-sm" />
              <div className="h-2 w-12 bg-slate-200 rounded-sm" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
