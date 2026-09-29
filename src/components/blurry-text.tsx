"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurryTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

export function BlurryText({ children, className, as: Component = "h2", delay = 0, duration = 0.9 }: BlurryTextProps) {
  const ref = useRef<HTMLElement>(null);
  // Trigger when approximately 20-30% of the heading enters the viewport
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };

  const item = {
    hidden: prefersReducedMotion
      ? { opacity: 0, y: 15 }
      : { opacity: 0, filter: "blur(8px)", y: 24, rotateX: -25 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      rotateX: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Create a motion-enabled version of the passed component (e.g. h1, h2, div)
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={container}
      className={cn("flex flex-col", className)}
      style={{ perspective: "1200px" }}
    >
      {React.Children.map(children, (child, i) => {
        return (
          <motion.span
            key={i}
            variants={item}
            className="block"
            style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
          >
            {child}
          </motion.span>
        );
      })}
    </MotionComponent>
  );
}
