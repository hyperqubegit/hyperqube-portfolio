export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export const mediaReveal = {
  hidden: { 
    opacity: 0, 
    scale: 0.97,
    clipPath: "inset(8% 0 8% 0)"
  },
  show: { 
    opacity: 1, 
    scale: 1,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
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

export const atmosphereFloat = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2 }
  },
  float: {
    x: [0, 20, 0],
    y: [0, -10, 0],
    transition: {
      duration: 15,
      ease: "easeInOut" as const,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }
};

export const spectrumFloat = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2 }
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
