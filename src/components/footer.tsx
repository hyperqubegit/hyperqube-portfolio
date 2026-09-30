"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SpectrumGlow } from "@/components/spectrum-glow";
import { HyperQubeLogo } from "@/components/hyperqube-logo";

const socialLinks = {
  github: "",
  linkedin: "",
  x: "",
  email: "mailto:hyperqube.ff@gmail.com",
};

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[rgba(255,255,255,0.08)] pt-16 lg:pt-20 pb-[28px] lg:pb-[36px] relative overflow-hidden">
      {/* Background glow spilling from contact */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] lg:w-[1100px] h-[500px] lg:h-[650px] pointer-events-none z-0">
        <SpectrumGlow 
          variant="contact"
          className="w-full h-full"
          opacity={0.08}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-16 mb-12 lg:mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <div className="mb-5">
              <HyperQubeLogo className="h-[30px] md:h-[34px] w-auto" />
            </div>
            <a
              href="mailto:hyperqube.ff@gmail.com"
              className="text-[13px] text-[#8A8A8A] hover:text-white transition-colors mt-6 lg:mt-8"
            >
              hyperqube.ff@gmail.com
            </a>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h4 className="text-white text-[13px] font-medium mb-6">Services</h4>
            <div className="flex flex-col gap-4 lg:gap-5">
              {[
                "Web Applications",
                "Custom Software",
                "SaaS Products",
                "AI & Intelligent Systems",
                "Data & Analytics",
                "Automation"
              ].map(link => (
                <span key={link} className="text-[#8A8A8A] text-[13px] hover:text-white transition-colors cursor-pointer">
                  {link}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col">
            <h4 className="text-white text-[13px] font-medium mb-6">Company</h4>
            <div className="flex flex-col gap-4 lg:gap-5">
              {[
                { label: "What We Build", href: "#what-we-build" },
                { label: "Process", href: "#process" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" }
              ].map(link => (
                <a key={link.label} href={link.href} className="text-[#8A8A8A] text-[13px] hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h4 className="text-white text-[13px] font-medium mb-6">Connect</h4>
            <div className="flex flex-col gap-4 lg:gap-5">
              {socialLinks.github && (
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#8A8A8A] text-[13px] hover:text-white transition-colors">
                  <svg className="w-4 h-4 fill-current text-[rgba(255,255,255,0.55)] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub &rarr;
                </a>
              )}
              {socialLinks.linkedin && (
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#8A8A8A] text-[13px] hover:text-white transition-colors">
                  <svg className="w-4 h-4 fill-current text-[rgba(255,255,255,0.55)] group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn &rarr;
                </a>
              )}
              {socialLinks.x && (
                <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[#8A8A8A] text-[13px] hover:text-white transition-colors">
                  <span className="text-[rgba(255,255,255,0.55)] group-hover:text-white font-medium text-[14px] leading-none transition-colors w-4 text-center">X</span>
                  X &rarr;
                </a>
              )}
              {socialLinks.email && (
                <a href={socialLinks.email} className="group flex items-center gap-2 text-[#8A8A8A] text-[13px] hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[rgba(255,255,255,0.55)] group-hover:text-white transition-colors" />
                  Email &rarr;
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10 min-h-[48px] md:min-h-[60px]">
          <p className="text-[12px] text-[#8A8A8A]">
            &copy; {new Date().getFullYear()} HyperQube. All rights reserved.
          </p>
          <p className="text-[12px] text-[#8A8A8A]">
            Engineering Studio
          </p>
        </div>
      </div>

      {/* Giant Architectural Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.18, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full text-center whitespace-nowrap mt-9 md:mt-12 select-none relative z-10"
      >
        <h1 className="text-white font-normal text-[clamp(72px,15vw,230px)] tracking-[-0.07em] leading-[0.85]">
          HYPERQUBE
        </h1>
      </motion.div>
    </footer>
  );
}
