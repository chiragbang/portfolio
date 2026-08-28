"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  /** Render as a stagger container for child <Reveal.Item /> elements. */
  stagger?: boolean;
  as?: "div" | "section" | "ul" | "li" | "span";
};

/**
 * Scroll-reveal wrapper. Honors prefers-reduced-motion by rendering content
 * statically (no transform/opacity animation) when motion is reduced.
 */
export function Reveal({
  children,
  className,
  variants,
  stagger = false,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants ?? (stagger ? staggerContainer : fadeUp)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}

/** Child item used inside a `stagger` Reveal. */
export function RevealItem({
  children,
  className,
  variants,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={variants ?? fadeUp}>
      {children}
    </MotionTag>
  );
}
