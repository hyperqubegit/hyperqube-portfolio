"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { CAPABILITIES, type Capability } from "../data/capabilities";

const CardAtmosphere = ({ index }: { index: number }) => {
  const atmospheres = [
    // 01 Web Applications - cyan/electric blue top-left
    { background: "radial-gradient(circle at 0% 0%, rgba(30, 150, 255, 0.35), rgba(30, 150, 255, 0.12) 35%, transparent 65%)" },
    // 02 Custom Software - orange/warm amber top-right
    { background: "radial-gradient(circle at 100% 0%, rgba(255, 120, 35, 0.32), rgba(255, 70, 30, 0.12) 35%, transparent 65%)" },
    // 03 SaaS Products - blue/violet right
    { background: "radial-gradient(circle at 100% 50%, rgba(80, 120, 255, 0.28), rgba(130, 70, 255, 0.12) 35%, transparent 65%)" },
    // 04 AI Solutions - blue/cyan top-right
    { background: "radial-gradient(circle at 100% 0%, rgba(25, 145, 255, 0.32), rgba(80, 90, 255, 0.12) 35%, transparent 65%)" },
    // 05 Data & Automation - warm red/orange bottom-left
    { background: "radial-gradient(circle at 0% 100%, rgba(255, 65, 45, 0.30), rgba(255, 120, 50, 0.10) 35%, transparent 65%)" },
    // 06 UI/UX Design - warm white/soft amber top-left
    { background: "radial-gradient(circle at 0% 0%, rgba(255, 220, 180, 0.25), rgba(255, 180, 100, 0.10) 35%, transparent 65%)" },
  ];
  return (
    <motion.div 
      className="absolute inset-0 opacity-[0.85] group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 mix-blend-screen"
      style={{ ...atmospheres[index % atmospheres.length], filter: "blur(50px)" }}
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: [0.85, 1, 0.85],
      }}
      transition={{ 
        duration: 8 + (index % 3) * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export function ServiceIndex() {
  const [selectedService, setSelectedService] = useState<Capability | null>(null);



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
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 * i }}
              className="group relative bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] hover:border-[var(--color-brand-border-hover)] rounded-[16px] lg:rounded-[20px] overflow-hidden transition-all duration-400 hover:-translate-y-1.5 flex flex-col cursor-pointer min-h-[220px] lg:min-h-[240px] shadow-lg"
              onClick={() => setSelectedService(cap)}
            >
              <CardAtmosphere index={i} />

              <div className="relative z-10 flex flex-col items-center justify-between flex-1 w-full h-full p-6 lg:px-8 lg:py-7">
                
                {/* Number & Accent */}
                <div className="flex items-center justify-center gap-1.5 mt-1 transition-transform duration-300 group-hover:scale-105">
                  <span className="text-[11px] lg:text-[12px] tracking-[0.12em] font-medium text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-text)] transition-colors duration-400">
                    {cap.num}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-border-hover)] group-hover:bg-[var(--color-brand-accent)] transition-colors duration-400" />
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-center flex-1 justify-center my-4 w-full">
                  <h3 className="text-[20px] lg:text-[22px] font-medium text-[var(--color-brand-text)] text-center mb-2 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-[13px] lg:text-[14px] leading-[1.5] text-[var(--color-brand-text-secondary)] text-center max-w-[280px]">
                    {cap.shortDesc}
                  </p>
                </div>

                {/* View More */}
                <div className="flex items-center justify-center gap-1.5 text-[12px] font-medium text-[var(--color-brand-text-secondary)] group-hover:text-[var(--color-brand-text)] transition-colors duration-300">
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transform group-hover:translate-x-[3px] transition-all duration-300" />
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
              className="relative w-full max-w-[640px] bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-[20px] p-8 md:p-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--color-brand-panel)] hover:bg-[var(--color-brand-border-hover)] transition-colors text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text)]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-panel)] border border-[var(--color-brand-border)] flex items-center justify-center">
                  <selectedService.icon className="w-5 h-5 text-[var(--color-brand-text)]" />
                </div>
                <div>
                  <span className="text-[12px] font-mono text-[var(--color-brand-text-secondary)] tracking-wider block mb-1">SERVICE {selectedService.num}</span>
                  <h3 className="text-[24px] md:text-[28px] font-medium text-[var(--color-brand-text)] leading-none">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-[15px] md:text-[16px] text-[var(--color-brand-text-secondary)] leading-[1.65] mb-10">
                {selectedService.longDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[13px] font-medium tracking-wider text-[var(--color-brand-text)] uppercase mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[var(--color-brand-accent)]" /> Solutions
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.solutions.map((item, i) => (
                      <li key={i} className="text-[14px] text-[var(--color-brand-text-secondary)] flex items-start gap-2">
                        <span className="text-[var(--color-brand-border-hover)] mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-[13px] font-medium tracking-wider text-[var(--color-brand-text)] uppercase mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border-hover)]" /> Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-md bg-[var(--color-brand-panel)] border border-[var(--color-brand-border)] text-[12px] text-[var(--color-brand-text-secondary)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[13px] font-medium tracking-wider text-[var(--color-brand-text)] uppercase mb-4 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border-hover)]" /> Built For
                    </h4>
                    <ul className="space-y-3">
                      {selectedService.builtFor.map((item, i) => (
                        <li key={i} className="text-[14px] text-[var(--color-brand-text-secondary)] flex items-start gap-2">
                          <span className="text-[var(--color-brand-border-hover)] mt-0.5">•</span> {item}
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
