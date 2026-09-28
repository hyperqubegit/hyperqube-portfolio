export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const lineReveal = {
  hidden: { 
    opacity: 0, 
    y: 20,
    clipPath: "inset(100% 0 0 0)"
  },
  show: { 
    opacity: 1, 
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const mediaReveal = {
  hidden: { 
    opacity: 0, 
    scale: 0.96,
    clipPath: "inset(8% 0 8% 0)"
  },
  show: { 
    opacity: 1, 
    scale: 1,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const slideInRow = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};
