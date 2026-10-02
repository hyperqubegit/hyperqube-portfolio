"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { SpectrumGlow } from "@/components/spectrum-glow";
import { HyperQubeLogo } from "@/components/hyperqube-logo";

const socialLinks = {
  linkedin: "https://www.linkedin.com/company/hyperqubeofficial",
  x: "https://x.com/Hyperqubeprvt",
  instagram: "https://www.instagram.com/hyperqubeprvt",
  email: "mailto:hyperqube.ff@gmail.com",
};

const services = [
  "Web Applications",
  "Custom Software",
  "SaaS Products",
  "AI & Intelligent Systems",
  "Data & Analytics",
  "Automation",
];

const company = [
  { label: "What We Build", href: "#what-we-build" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    icon: (
      <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: "X",
    href: socialLinks.x,
    icon: <span className="text-[13px] font-semibold leading-none w-[14px] text-center">𝕏</span>,
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    icon: (
      <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-[rgba(255,255,255,0.06)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] lg:w-[1100px] h-[500px] lg:h-[650px] pointer-events-none z-0">
        <SpectrumGlow 
          variant="contact"
          className="w-full h-full"
          opacity={0.06}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ── Main Grid ── */}
        <div className="pt-14 lg:pt-16 pb-12 lg:pb-14 grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 lg:gap-14">
          
          {/* Brand Column */}
          <div className="flex flex-col">
            <HyperQubeLogo className="h-[28px] md:h-[32px] w-auto" />
            <p className="text-[13px] text-[#606060] leading-[1.7] mt-5 max-w-[260px]">
              Building modern software, intelligent systems &amp; digital products.
            </p>
            <a
              href="mailto:hyperqube.ff@gmail.com"
              className="text-[13px] text-[#707070] hover:text-white transition-colors mt-6 inline-flex items-center gap-1.5 group"
            >
              <Mail className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              hyperqube.ff@gmail.com
            </a>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h4 className="text-[11px] font-medium tracking-[0.12em] text-[#606060] uppercase mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {services.map(link => (
                <a key={link} href="#what-we-build" className="text-[#8A8A8A] text-[13px] hover:text-white transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h4 className="text-[11px] font-medium tracking-[0.12em] text-[#606060] uppercase mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              {company.map(link => (
                <a key={link.label} href={link.href} className="text-[#8A8A8A] text-[13px] hover:text-white transition-colors duration-200">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col">
            <h4 className="text-[11px] font-medium tracking-[0.12em] text-[#606060] uppercase mb-5">Connect</h4>
            <div className="flex flex-col gap-3">
              {socials.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[#8A8A8A] text-[13px] hover:text-white transition-colors duration-200"
                >
                  <span className="opacity-50 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-[-4px] group-hover:opacity-60 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider + Bottom Row ── */}
        <div className="border-t border-[rgba(255,255,255,0.06)] py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] text-[#505050] tracking-wide">
            &copy; {new Date().getFullYear()} HyperQube. All rights reserved.
          </p>
          <p className="text-[11px] text-[#505050] tracking-[0.08em] uppercase">
            Engineering Studio
          </p>
        </div>
      </div>

      {/* ── Giant Wordmark ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 0.12, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full text-center whitespace-nowrap select-none relative z-10 overflow-hidden pb-4"
      >
        <span className="block text-white font-semibold text-[clamp(64px,14vw,200px)] tracking-[-0.06em] leading-[0.9]">
          HYPERQUBE
        </span>
      </motion.div>
    </footer>
  );
}
