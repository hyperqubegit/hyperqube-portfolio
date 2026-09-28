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
    y: [5, -5, 5],
    transition: {
      duration: 25,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }
};

type SpectrumVariant = "hero" | "card" | "footer" | "section";

interface SpectrumGlowProps {
  className?: string;
  opacity?: number;
  variant?: SpectrumVariant;
  colorPrimary?: string; // Optional override for the center color
}

const getGradientForVariant = (variant: SpectrumVariant, colorPrimary?: string) => {
  const baseOrange = colorPrimary || "rgba(255, 75, 62, 0.18)";
  
  if (variant === "card") {
    return `radial-gradient(
      circle at center,
      ${baseOrange} 0%,
      rgba(220, 30, 30, 0.08) 35%,
      rgba(255, 255, 255, 0.03) 60%,
      rgba(40, 180, 255, 0.015) 80%,
      rgba(140, 60, 255, 0.005) 90%,
      transparent 100%
    )`;
  }
  
  return `radial-gradient(
    ellipse at 50% 100%,
    ${baseOrange} 0%,
    rgba(220, 30, 30, 0.10) 25%,
    rgba(255, 210, 120, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 70%,
    rgba(40, 180, 255, 0.015) 85%,
    rgba(140, 60, 255, 0.005) 95%,
    transparent 100%
  )`;
};

export function SpectrumGlow({ className, opacity = 1, variant = "section", colorPrimary }: SpectrumGlowProps) {
  return (
    <motion.div
      variants={spectrumFloat}
      initial="hidden"
      animate={["show", "float"]}
      className={cn("pointer-events-none absolute rounded-full z-0", className)}
      style={{ opacity }}
    >
      <div 
        className="absolute inset-0 w-full h-full rounded-full"
        style={{
          background: getGradientForVariant(variant, colorPrimary),
          filter: variant === "card" ? "blur(80px)" : "blur(160px)",
        }}
      />
    </motion.div>
  );
}
