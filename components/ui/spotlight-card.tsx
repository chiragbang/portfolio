"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Lift distance on hover (px). Set 0 to disable lift. */
  lift?: number;
};

/**
 * Premium card surface: a cursor-tracked radial highlight and a gradient
 * hairline border (both via the `.spotlight-card` CSS, fed by --mx/--my) plus
 * a spring-physics hover-lift. The lift is disabled under prefers-reduced-motion;
 * the pointer highlight degrades gracefully (it simply stays centered).
 */
export function SpotlightCard({
  children,
  className,
  lift = 6,
}: SpotlightCardProps) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={reduce ? undefined : { y: -lift }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "spotlight-card h-full rounded-2xl border border-border bg-surface/60 backdrop-blur",
        className,
      )}
    >
      {/* Content sits above the ::after spotlight layer */}
      <div className="relative z-[2] h-full">{children}</div>
    </motion.div>
  );
}
