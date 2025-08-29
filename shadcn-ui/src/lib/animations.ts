import { Variants } from 'framer-motion';

// Page transition animations
export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Stagger container for multiple elements
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Individual item animation
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Typewriter effect
export const typewriterVariants: Variants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: 'auto',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

// Slide in from direction
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down'): Variants => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: -100 },
    down: { x: 0, y: 100 },
  };

  return {
    initial: {
      ...directions[direction],
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
};

// Scale animation
export const scaleVariants: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

// Floating animation
export const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Progress bar animation
export const progressVariants: Variants = {
  initial: {
    width: 0,
  },
  animate: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.5,
    },
  }),
};

// Card hover effect
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.02,
    rotateY: 5,
    transition: {
      duration: 0.3,
    },
  },
};

// Navigation animation
export const navVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Form input focus animation
export const inputFocusVariants: Variants = {
  rest: {
    scale: 1,
    boxShadow: '4px 4px 8px var(--neuro-shadow-dark), -4px -4px 8px var(--neuro-shadow-light)',
  },
  focus: {
    scale: 1.02,
    boxShadow: '6px 6px 12px var(--neuro-shadow-dark), -6px -6px 12px var(--neuro-shadow-light), 0 0 20px rgba(102, 126, 234, 0.3)',
    transition: {
      duration: 0.2,
    },
  },
};