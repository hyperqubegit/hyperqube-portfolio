"use client";

import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#EDF2FF] border-t border-blue-200/40 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0066FF 1px, transparent 1px), linear-gradient(to bottom, #0066FF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10"
        ref={ref}
      >
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[12px] font-bold tracking-[0.22em] text-[#0066FF] uppercase block mb-6">
              Let&apos;s build together
            </span>

            <h2 className="text-[clamp(2.75rem,5.5vw,4.5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.08] mb-6">
              Need something built?
              <br />
              Let&apos;s talk.
            </h2>

            <p className="text-[17px] lg:text-[19px] text-slate-600 leading-[1.65] mb-10">
              Have an idea, a problem to solve, or a product you want to bring
              to life?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
          >
            <a
              href="mailto:hyperqube.ff@gmail.com"
              className="group inline-flex items-center gap-2.5 bg-[#0B132B] px-8 py-4 text-[14px] font-semibold text-white hover:bg-[#0066FF] transition-all duration-300 rounded-sm w-full sm:w-auto justify-center"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:hyperqube.ff@gmail.com"
              className="group inline-flex items-center gap-3 bg-white px-7 py-4 text-[14px] font-semibold text-[#0B132B] border border-slate-200 hover:border-[#0066FF]/40 rounded-sm transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 text-[#0066FF]" />
              hyperqube.ff@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
