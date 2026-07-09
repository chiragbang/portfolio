import { skillGroups } from "@/data/content";

/**
 * Full-bleed infinite ticker of the stack. Pure CSS (two duplicated tracks +
 * `marquee` keyframe). The animation is `motion-safe:` only, so under
 * prefers-reduced-motion the track sits static (no autoplay) and the overflow
 * simply clips — fully accessible. Decorative, hence aria-hidden.
 */
export function TechMarquee() {
  // Read (not mutate) content: a flat, de-duplicated list of skills.
  const items = Array.from(
    new Set(skillGroups.flatMap((g) => g.items)),
  );

  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-border/70 bg-surface/30 py-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max motion-safe:animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li
                key={`${copy}-${item}`}
                className="flex items-center gap-6 px-6 font-display text-lg font-medium text-muted-foreground sm:text-xl"
              >
                {item}
                <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
