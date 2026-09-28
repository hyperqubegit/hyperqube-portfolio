"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section ref={ref} className="pb-6 lg:pb-10 bg-[#FAFBFC]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Mobile: show the office photo that is hidden in hero right column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden mb-10"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-slate-200/60 shadow-sm">
            <img
              src="/office.avif"
              alt="HyperQube team at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0066FF] via-[#0066FF]/60 to-transparent" />
          </div>
        </motion.div>

        {/* Full-width editorial photo — visible on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block relative rounded-2xl overflow-hidden aspect-[21/8] border border-slate-200/60"
        >
          <motion.img
            style={{ y }}
            src="/office.avif"
            alt="HyperQube — engineering studio"
            className="absolute top-[-8%] left-0 w-full h-[116%] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
