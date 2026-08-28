"use client";

import * as React from "react";
import dynamic from "next/dynamic";

/**
 * Loads the Three.js hero scene only when it's safe and worthwhile:
 *  - dynamic import with `ssr: false` → Three is code-split out of the initial
 *    bundle and never runs during SSR (no hydration mismatch / CLS).
 *  - prefers-reduced-motion → static gradient fallback, no canvas.
 *  - small / coarse-pointer / low-core devices → static fallback to protect
 *    performance on mobile.
 *  - offscreen → rendering is paused via `frameloop="never"` (IntersectionObserver).
 * The CSS fallback is also the loading placeholder, so layout never shifts.
 */

const Scene = dynamic(() => import("./scene"), {
  ssr: false,
  loading: () => <BlobFallback />,
});

function BlobFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
      <div className="relative h-56 w-56 sm:h-72 sm:w-72">
        <div className="absolute inset-0 animate-aurora rounded-full bg-[conic-gradient(from_120deg,theme(colors.primary.DEFAULT),theme(colors.accent.DEFAULT),theme(colors.signal.DEFAULT),theme(colors.primary.DEFAULT))] opacity-70 blur-2xl" />
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary to-accent opacity-90 blur-md" />
        <div className="absolute inset-10 rounded-full bg-background/40 backdrop-blur-xl" />
      </div>
    </div>
  );
}

export function Hero3D() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);
  const [active, setActive] = React.useState(true);

  // Decide whether to mount the 3D scene at all.
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wideEnough = window.matchMedia("(min-width: 768px)").matches;
    const enoughCores = (navigator.hardwareConcurrency ?? 4) >= 4;
    setEnabled(!reduce && fine && wideEnough && enoughCores);
  }, []);

  // Pause rendering when the hero scrolls offscreen.
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || !enabled) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {enabled ? <Scene active={active} /> : <BlobFallback />}
    </div>
  );
}
