"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const spectrumFloat = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 3 }
  },
  float: {
    scale: [1, 1.05, 1],
    x: [-10, 10, -10],
    y: [6, -6, 6],
    transition: {
      duration: 25,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }
};

interface SpectrumGlowProps {
  className?: string;
  opacity?: number;
}

export function SpectrumGlow({ className, opacity = 1 }: SpectrumGlowProps) {
  return (
    <motion.div
      variants={spectrumFloat}
      initial="hidden"
      animate={["show", "float"]}
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{ opacity }}
    >
      <div 
        className="absolute inset-0 w-full h-full rounded-full"
        style={{
          background: `radial-gradient(
            ellipse at 50% 100%,
            rgba(255, 95, 20, 0.22) 0%,
            rgba(220, 30, 30, 0.12) 25%,
            rgba(255, 210, 120, 0.08) 50%,
            rgba(255, 255, 255, 0.03) 70%,
            rgba(120, 160, 255, 0.01) 85%,
            transparent 100%
          )`,
          filter: "blur(140px)",
        }}
      />
    </motion.div>
  );
}
