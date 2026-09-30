"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { CAPABILITIES, type Capability } from "../data/capabilities";
import { cn } from "@/lib/utils";

const CardAtmosphere = ({ index }: { index: number }) => {
  const atmospheres = [
    // 01 Web Applications - cyan/electric blue top-left
    { background: "radial-gradient(circle at 0% 0%, rgba(30, 150, 255, 0.32), rgba(30, 150, 255, 0.12) 28%, transparent 62%)" },
    // 02 Custom Software - orange/warm amber top-right
    { background: "radial-gradient(circle at 100% 0%, rgba(255, 120, 35, 0.30), rgba(255, 70, 30, 0.12) 30%, transparent 62%)" },
    // 03 SaaS Products - blue/violet right
    { background: "radial-gradient(circle at 100% 50%, rgba(80, 120, 255, 0.26), rgba(130, 70, 255, 0.12) 30%, transparent 65%)" },
    // 04 Data & Analytics - warm red/orange bottom-left
    { background: "radial-gradient(circle at 0% 100%, rgba(255, 65, 45, 0.28), rgba(255, 120, 50, 0.10) 30%, transparent 65%)" },
    // 05 AI & Intelligent Systems - blue/cyan top-right
    { background: "radial-gradient(circle at 100% 0%, rgba(25, 145, 255, 0.30), rgba(80, 90, 255, 0.12) 30%, transparent 65%)" },
    // 06 Automation - orange/red bottom-right
    { background: "radial-gradient(circle at 100% 100%, rgba(255, 90, 30, 0.28), rgba(255, 50, 20, 0.12) 30%, transparent 65%)" },
    // 07 UI/UX Design - warm white/soft amber top-left
    { background: "radial-gradient(circle at 0% 0%, rgba(255, 220, 180, 0.22), rgba(255, 180, 100, 0.10) 30%, transparent 65%)" },
    // 08 Backend & APIs - cyan/blue bottom-right
    { background: "radial-gradient(circle at 100% 100%, rgba(20, 180, 255, 0.30), rgba(20, 120, 255, 0.12) 30%, transparent 65%)" },
  ];
  return (
    <div 
      className="absolute inset-0 opacity-85 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 transform scale-[1.15]"
      style={{ ...atmospheres[index % atmospheres.length], filter: "blur(65px)" }}
    />
  );
};

export function ServiceIndex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [selectedService, setSelectedService] = useState<Capability | null>(null);

  const getColSpan = (index: number) => {
    if (index === 2 || index === 5) return "md:col-span-2";
    return "md:col-span-1";
  };

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section id="what-we-build" className="py-16 lg:py-20 bg-[var(--color-brand-bg)] relative overflow-hidden">
      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={containerRef}
      >
        {/* ── Heading ── */}
        <div className="mb-10 lg:mb-12 flex flex-col items-center text-center max-w-[800px] mx-auto">
          <div className="mb-6 lg:mb-8">
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

          <p className="mt-6 text-[15px] md:text-[16px] text-[var(--color-brand-text-secondary)] max-w-[600px] mx-auto">
            From first idea to production-ready systems, we build the technology
            your business actually needs.
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] lg:gap-[22px]">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i }}
              className={cn(
                "group relative bg-[#090909] border border-[rgba(255,255,255,0.09)] rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-[3px] hover:border-[rgba(255,255,255,0.16)] flex flex-col cursor-pointer min-h-[240px] lg:min-h-[260px]",
                getColSpan(i)
              )}
              onClick={() => setSelectedService(cap)}
            >
              <CardAtmosphere index={i} />

              <div className="relative z-10 flex flex-col items-center justify-between flex-1 w-full h-full p-8 lg:px-10 lg:py-8">
                
                {/* Number & Accent */}
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-[12px] tracking-[0.15em] font-mono text-[#7A7A7A]">
                    {cap.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#404040] group-hover:bg-[#FF4B3E] transition-colors duration-500" />
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-center flex-1 justify-center my-4 w-full">
                  <h3 className="text-[24px] lg:text-[28px] font-medium text-white text-center mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] leading-[1.6] text-[#8F8F8F] text-center max-w-[460px]">
                    {cap.shortDesc}
                  </p>
                </div>

                {/* View More */}
                <div className="flex items-center justify-center gap-2 text-[12px] md:text-[13px] font-medium text-[rgba(255,255,255,0.65)] group-hover:text-white transition-colors duration-300 mb-1">
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[640px] bg-[#080808] border border-[rgba(255,255,255,0.12)] rounded-[20px] p-8 md:p-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors text-[#8F8F8F] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#111] border border-[rgba(255,255,255,0.08)] flex items-center justify-center">
                  <selectedService.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-[12px] font-mono text-[#7A7A7A] tracking-wider block mb-1">SERVICE {selectedService.num}</span>
                  <h3 className="text-[24px] md:text-[28px] font-medium text-white leading-none">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-[15px] md:text-[16px] text-[#A3A3A3] leading-[1.65] mb-10">
                {selectedService.longDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[13px] font-medium tracking-wider text-white uppercase mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#FF4B3E]" /> Solutions
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.solutions.map((item, i) => (
                      <li key={i} className="text-[14px] text-[#8F8F8F] flex items-start gap-2">
                        <span className="text-[rgba(255,255,255,0.1)] mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-[13px] font-medium tracking-wider text-white uppercase mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[12px] text-[#A3A3A3]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[13px] font-medium tracking-wider text-white uppercase mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.2)]" /> Built For
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.builtFor.map((item, i) => (
                        <li key={i} className="text-[14px] text-[#8F8F8F] flex items-start gap-2">
                          <span className="text-[rgba(255,255,255,0.1)] mt-0.5">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
