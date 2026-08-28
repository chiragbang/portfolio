"use client";

/**
 * Site backdrop: a subtle dot-grid texture, a soft theme-aware radial glow
 * behind the hero, slow aurora blobs, and a faint film-grain overlay for depth.
 * All decorative and aria-hidden. The aurora animation is paused by
 * prefers-reduced-motion (see globals.css).
 */
export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dot grid, faded toward the bottom */}
      <div className="absolute inset-0 bg-dot-grid mask-fade-b opacity-70" />

      {/* Soft radial glow behind the hero */}
      <div className="absolute left-1/2 top-[-12%] h-[55vh] w-[80vw] max-w-5xl -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(var(--primary)/0.18),transparent)] blur-2xl" />

      {/* Slow-drifting aurora accents */}
      <div className="absolute right-[-10%] top-[8%] h-72 w-72 animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--accent)/0.18),transparent)] blur-3xl" />
      <div className="absolute left-[-8%] top-[36%] h-64 w-64 animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--signal)/0.10),transparent)] blur-3xl [animation-delay:-6s]" />
      <div className="absolute bottom-[-6%] left-1/2 h-72 w-[60vw] max-w-3xl -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--accent)/0.10),transparent)] blur-3xl [animation-delay:-10s]" />

      {/* Film grain — very low opacity, theme-agnostic */}
      <div className="absolute inset-0 bg-grain opacity-[0.035] mix-blend-soft-light dark:opacity-[0.05]" />
    </div>
  );
}
