"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="contact"
      className="pt-16 lg:pt-20 pb-[80px] lg:pb-[100px] bg-black relative z-10 overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-[92vw] md:w-[90vw] lg:w-[min(84vw,1240px)] max-w-[1280px] mx-auto bg-[rgba(8,8,8,0.92)] border border-[rgba(255,255,255,0.13)] rounded-[28px] lg:rounded-[32px] px-6 py-12 lg:px-[40px] lg:py-[56px] relative z-10 flex flex-col items-center text-center backdrop-blur-xl"
      >
        <div className="mb-7">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#101010] border border-[rgba(255,255,255,0.13)] text-[11px] font-medium tracking-[0.1em] text-white uppercase">
            Contact
          </span>
        </div>

        <h2 className="text-[clamp(48px,5.5vw,76px)] font-medium text-white leading-[1.0] tracking-[-0.04em] mb-7 lg:mb-8 max-w-[800px]">
          <span>Ready to turn your</span>
          <br className="hidden sm:block" />
          <span>
            ideas into <em className="font-editorial italic font-normal text-[clamp(52px,6vw,80px)] text-[#B0B0B0]">reality?</em>
          </span>
        </h2>

        <p className="text-[17px] lg:text-[19px] text-[#A0A0A0] leading-[1.55] mb-8 lg:mb-9 max-w-[600px]">
          If you want to achieve ground-breaking results with reliable software, intelligent systems, or digital products, then you&apos;re in the right place.
        </p>

        <a
          href="mailto:hyperqube.ff@gmail.com"
          className="group inline-flex items-center justify-center gap-2.5 bg-[var(--color-brand-accent)] px-7 lg:px-8 h-[52px] lg:h-[56px] text-[16px] font-medium text-white hover:bg-[var(--color-brand-accent-light)] transition-all duration-300 rounded-[10px] lg:rounded-[12px] hover:-translate-y-1"
        >
          Start a Project
          <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>

      {/* Heavy spectrum glow emerging from behind the bottom of the card */}
      <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[900px] lg:w-[1100px] h-[500px] lg:h-[650px] pointer-events-none z-0">
        <SpectrumGlow 
          variant="contact"
          className="w-full h-full"
          opacity={0.25}
        />
      </div>
    </section>
  );
}
