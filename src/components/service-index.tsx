"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { CAPABILITIES, type Capability } from "../data/capabilities";
import { cn } from "@/lib/utils";

const CardAtmosphere = ({ index }: { index: number }) => {
  const atmospheres = [
    { background: "radial-gradient(circle at 0% 0%, rgba(0, 180, 255, 0.15), transparent 65%)" }, // 01 Web: cyan/blue top-left
    { background: "radial-gradient(circle at 100% 0%, rgba(255, 120, 0, 0.15), transparent 65%)" }, // 02 Custom: orange top-right
    { background: "radial-gradient(circle at 100% 100%, rgba(130, 80, 255, 0.15), transparent 65%)" }, // 03 SaaS: violet/blue bottom-right
    { background: "radial-gradient(circle at 0% 100%, rgba(255, 75, 50, 0.15), transparent 65%)" }, // 04 Data: warm orange/red bottom-left
    { background: "radial-gradient(circle at 100% 0%, rgba(100, 150, 255, 0.15), transparent 65%)" }, // 05 AI: blue/violet top-right
    { background: "radial-gradient(circle at 100% 100%, rgba(255, 60, 40, 0.15), transparent 65%)" }, // 06 Automation: red/orange bottom-right
    { background: "radial-gradient(circle at 0% 0%, rgba(255, 200, 150, 0.12), transparent 65%)" }, // 07 UI/UX: warm white/orange top-left
    { background: "radial-gradient(circle at 100% 100%, rgba(0, 200, 255, 0.15), transparent 65%)" }, // 08 Backend: cyan/blue bottom-right
  ];
  return (
    <div 
      className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.25] transition-opacity duration-700 pointer-events-none z-0"
      style={{ ...atmospheres[index % atmospheres.length], filter: "blur(60px)" }}
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

          <p className="mt-6 text-[15px] md:text-[16px] text-[var(--color-brand-text-secondary)] max-w-[600px] mx-auto">
            From first idea to production-ready systems, we build the technology
            your business actually needs.
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i }}
              className={cn(
                "group relative bg-[#090909] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-[3px] hover:border-[rgba(255,255,255,0.14)] flex flex-col cursor-pointer min-h-[300px]",
                getColSpan(i)
              )}
              onClick={() => setSelectedService(cap)}
            >
              <CardAtmosphere index={i} />

              <div className="relative z-10 flex flex-col items-center flex-1 w-full h-full p-8 lg:p-10">
                
                {/* Number & Accent */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[12px] tracking-[0.15em] font-mono text-[#7A7A7A]">
                    {cap.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#404040] group-hover:bg-[#FF4B3E] transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="mt-8 lg:mt-9 text-[26px] lg:text-[28px] font-medium text-white text-center">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="mt-3 lg:mt-4 text-[14px] lg:text-[15px] leading-[1.6] text-[#8F8F8F] text-center max-w-[480px]">
                  {cap.shortDesc}
                </p>

                {/* View More */}
                <div className="mt-auto pt-8 flex items-center justify-center gap-2 text-[12px] md:text-[13px] font-medium text-[rgba(255,255,255,0.65)] group-hover:text-white transition-colors duration-300">
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
