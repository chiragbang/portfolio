"use client";

import { site, socials } from "@/data/content";
import { SocialIcons } from "@/components/ui/social-icons";

/**
 * Decorative fixed rails on the left/right edges (an idea borrowed from the
 * red1 reference, reinterpreted in this palette). Only shown on very wide
 * viewports (>= 1400px) where there's room beside the 1200px container, so it
 * never overlaps content. The canonical, fully-accessible social links still
 * live in the hero and footer.
 */
export function SideRails() {
  return (
    <>
      {/* Left — social rail */}
      <div className="fixed bottom-0 left-5 z-30 hidden flex-col items-center gap-5 min-[1400px]:flex">
        <SocialIcons links={socials} size="sm" className="flex-col" />
        <span className="h-24 w-px bg-gradient-to-b from-border to-transparent" />
      </div>

      {/* Right — email rail (vertical) */}
      <div className="fixed bottom-0 right-5 z-30 hidden flex-col items-center gap-5 min-[1400px]:flex">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground [writing-mode:vertical-rl] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          {site.email}
        </a>
        <span className="h-24 w-px bg-gradient-to-b from-border to-transparent" />
      </div>
    </>
  );
}
