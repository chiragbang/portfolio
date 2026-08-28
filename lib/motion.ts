import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants. All "in-view" reveals use these so motion
 * stays consistent across sections. Non-essential motion is gated behind
 * `prefers-reduced-motion` at the component level (see `useReducedMotion`).
 */

/** Premium "expo-out" curve — the snap most award-tier sites use. */
const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Parent container that staggers its children's reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Word-by-word reveal for the hero headline. */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
