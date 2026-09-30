"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SpectrumGlow } from "@/components/spectrum-glow";

export function StudioVideo() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Subtle parallax effect on the video container
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section className="pt-[50px] lg:pt-[70px] pb-[50px] lg:pb-[70px] bg-[var(--color-brand-bg)] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] shadow-[0_0_8px_rgba(255,75,62,0.6)]" />
          <span className="text-[11px] font-medium tracking-[0.16em] text-[var(--color-brand-text-muted)] uppercase">
            Inside the Engineering Studio
          </span>
        </motion.div>

        {/* Video Container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.97, clipPath: "inset(5% 2% 5% 2% round 20px)" }}
          whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 20px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[1240px] h-[280px] sm:h-[360px] md:h-[480px] lg:h-[550px]"
        >
          {/* Subtle Spectrum background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] pointer-events-none opacity-[0.10] -z-10">
            <SpectrumGlow variant="card" />
          </div>

          <motion.div
            style={{ y }}
            className="w-full h-full rounded-[20px] lg:rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.12)] bg-[#050505] relative"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hyperqube-studio.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
