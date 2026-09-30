"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { textReveal, buttonReveal } from "@/lib/motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-[var(--color-brand-bg)] relative overflow-hidden"
    >
      {/* Heavy spectrum glow emerging from the bottom */}
      <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] aspect-[2/1] pointer-events-none">
        <SpectrumGlow 
          variant="footer"
          className="w-full h-full opacity-15"
        />
      </div>

      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        <div className="relative py-12 lg:py-16 flex flex-col items-center text-center max-w-[800px] mx-auto">
          <div className="mb-12 lg:mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[var(--color-brand-border)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
              Contact
            </span>
          </div>

          <h2 className="text-[clamp(44px,6vw,72px)] font-medium tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.05] mb-8">
            <span>Ready to turn your</span>
            <br className="hidden sm:block" />
            <span>
              ideas into <em className="font-editorial italic font-normal text-[clamp(48px,6.5vw,80px)] text-[var(--color-brand-text-secondary)]">reality?</em>
            </span>
          </h2>

          <p className="text-[17px] lg:text-[19px] text-[var(--color-brand-text-secondary)] leading-[1.65] mb-12 max-w-[500px]">
            If you want to achieve ground-breaking results with reliable software, intelligent systems, or digital products, then you're in the right place.
          </p>

          <motion.a
            href="mailto:hyperqube.ff@gmail.com"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={buttonReveal}
            transition={{ delay: 1.0 }}
            className="group inline-flex items-center gap-2.5 bg-[var(--color-brand-accent)] px-6 lg:px-8 py-3.5 lg:py-4 text-[16px] lg:text-[17px] font-medium text-white hover:bg-[var(--color-brand-accent-light)] transition-all duration-300 rounded-lg justify-center hover:-translate-y-1"
          >
            Start a Project
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
