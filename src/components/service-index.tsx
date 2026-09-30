"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CAPABILITIES } from "../data/capabilities";
import { cn } from "@/lib/utils";

export function ServiceIndex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const getColSpan = (index: number) => {
    if (index === 2 || index === 5) return "md:col-span-2";
    return "md:col-span-1";
  };

  const getGlowStyle = (index: number) => {
    const glows = [
      { background: 'radial-gradient(circle at 100% 0%, rgba(255, 75, 62, 0.12) 0%, transparent 60%)' }, // top-right red
      { background: 'radial-gradient(circle at 0% 0%, rgba(255, 120, 80, 0.1) 0%, transparent 60%)' }, // top-left orange
      { background: 'radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)' }, // bottom-right white
      { background: 'radial-gradient(circle at 0% 100%, rgba(255, 50, 50, 0.12) 0%, transparent 60%)' }, // bottom-left red
      { background: 'radial-gradient(circle at 50% 0%, rgba(255, 150, 100, 0.08) 0%, transparent 70%)' }, // top-center warm
      { background: 'radial-gradient(circle at 100% 50%, rgba(255, 75, 62, 0.15) 0%, transparent 70%)' }, // right red
      { background: 'radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.06) 0%, transparent 60%)' }, // left white
      { background: 'radial-gradient(circle at 50% 100%, rgba(255, 100, 50, 0.1) 0%, transparent 60%)' }, // bottom-center orange
    ];
    return glows[index % glows.length];
  };

  return (
    <section id="what-we-build" className="py-16 lg:py-24 bg-[var(--color-brand-bg)] relative overflow-hidden">
      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* ── Heading ── */}
        <div className="mb-12 lg:mb-16 flex flex-col items-center text-center max-w-[800px] mx-auto">
          <div className="mb-8 lg:mb-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              What We Build
            </span>
          </div>
          
          <h2 className="text-[clamp(40px,5vw,64px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05]">
            <span>What can we</span>
            <br className="hidden sm:block" />
            <span>
              <em className="font-editorial italic font-normal text-[clamp(44px,5.5vw,72px)] text-[var(--color-brand-text-secondary)]">build for you?</em>
            </span>
          </h2>

          <p className="mt-6 text-[16px] text-[var(--color-brand-text-secondary)] max-w-[600px] mx-auto">
            From first idea to production-ready systems, we build the technology
            your business actually needs.
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i }}
              className={cn(
                "group relative bg-[#0B0B0B] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.14)] flex flex-col min-h-[320px] lg:min-h-[360px]",
                getColSpan(i)
              )}
            >
              {/* Atmospheric localized glow */}
              <div 
                className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                style={getGlowStyle(i)}
              />

              <div className="relative z-10 flex flex-col items-center flex-1 w-full h-full p-8 lg:p-12">
                
                {/* Number & Accent */}
                <div className="flex items-center justify-center gap-2.5 mb-6 lg:mb-8">
                  <span className="text-[12px] md:text-[13px] tracking-[0.15em] font-mono text-[#7A7A7A]">
                    {cap.num}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#404040] group-hover:bg-[var(--color-brand-accent)] transition-colors duration-500 shadow-[0_0_8px_rgba(255,75,62,0)] group-hover:shadow-[0_0_8px_rgba(255,75,62,0.6)]" />
                </div>

                {/* Title */}
                <h3 className="text-[26px] lg:text-[32px] font-medium text-white mb-4 text-center">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] lg:text-[16px] leading-[1.65] text-[#8F8F8F] text-center max-w-[500px]">
                  {cap.shortDesc}
                </p>

                {/* View More */}
                <div className="mt-auto pt-10 flex items-center justify-center gap-2 text-[12px] md:text-[13px] font-medium text-[#7A7A7A] group-hover:text-white transition-colors duration-300">
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
