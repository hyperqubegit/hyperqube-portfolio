"use client";

import { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-[140px] lg:py-[180px] bg-[#EBF3FF] border-t border-blue-100 overflow-hidden relative">
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(to right, #0066FF 1px, transparent 1px), linear-gradient(to bottom, #0066FF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      <motion.div 
        animate={{ 
          x: [0, 40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(to right, #0066FF 1px, transparent 1px), linear-gradient(to bottom, #0066FF 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#0066FF]/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#0066FF]/20 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#0066FF] uppercase block mb-8">
              Let&apos;s build together.
            </span>
            
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-[-0.03em] text-[#0B132B] leading-[1.05] mb-8">
              Need something built?<br />
              Let&apos;s talk.
            </h2>

            <p className="text-[18px] lg:text-[22px] text-slate-600 leading-[1.6]">
              Have an idea, a problem to solve, or a product you want to bring to life?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-6"
          >
            <a 
              href="mailto:hyperqube.ff@gmail.com"
              className="group flex items-center justify-center gap-3 bg-[#0B132B] px-10 py-5 rounded-full text-[15px] font-bold tracking-[0.05em] text-white hover:bg-[#0066FF] hover:shadow-[0_12px_30px_-10px_rgba(0,102,255,0.4)] transition-all duration-300 w-full sm:w-auto"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <div className="hidden sm:block text-slate-300 font-light">or</div>

            <a 
              href="mailto:hyperqube.ff@gmail.com"
              className="group flex items-center gap-3 bg-white px-8 py-5 rounded-full text-[15px] font-medium text-[#0B132B] border border-blue-200/60 shadow-sm hover:border-[#0066FF]/40 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 text-[#0066FF]" />
              <span className="group-hover:text-[#0066FF] transition-colors">
                hyperqube.ff@gmail.com
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
