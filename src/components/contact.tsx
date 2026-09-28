"use client";

import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[var(--color-brand-bg)] relative overflow-hidden"
    >
      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={fadeUp}
          className="relative rounded-2xl overflow-hidden border border-[var(--color-brand-border)] bg-[var(--color-brand-panel)] py-20 lg:py-28 px-6 lg:px-12 flex flex-col items-center text-center shadow-2xl"
        >
          {/* Subtle blue glow behind lower part of panel */}
          <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] glow-blue opacity-40 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-[720px] mx-auto flex flex-col items-center">
            <span className="text-[12px] font-bold tracking-[0.22em] text-[var(--color-brand-blue)] uppercase block mb-6">
              Let&apos;s talk
            </span>

            <h2 className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-bold tracking-[-0.03em] text-[var(--color-brand-text)] leading-[1.08] mb-6 uppercase">
              Let&apos;s build
              <br />
              together.
            </h2>

            <p className="text-[17px] lg:text-[19px] text-[var(--color-brand-text-secondary)] leading-[1.65] mb-12">
              Have an idea, a problem to solve, or a product you want to bring
              to life?
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <a
                href="mailto:hyperqube.ff@gmail.com"
                className="group inline-flex items-center gap-2.5 bg-[var(--color-brand-blue)] px-8 py-4 text-[14px] font-semibold text-white hover:bg-[var(--color-brand-blue-light)] transition-all duration-300 rounded-sm w-full sm:w-auto justify-center"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="mailto:hyperqube.ff@gmail.com"
                className="group inline-flex items-center gap-3 bg-[var(--color-brand-card)] px-7 py-4 text-[14px] font-semibold text-[var(--color-brand-text)] border border-[var(--color-brand-border)] hover:border-[var(--color-brand-blue)] rounded-sm transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4 text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-blue)] transition-colors" />
                hyperqube.ff@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
