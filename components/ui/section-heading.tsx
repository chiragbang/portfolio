"use client";

import { Reveal, RevealItem } from "@/components/ui/reveal";
import { staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Mono index, e.g. "01". */
  index: string;
  /** Small uppercase eyebrow, e.g. "About Me". */
  eyebrow: string;
  /** Large editorial heading. */
  title: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      stagger
      variants={staggerContainer}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <RevealItem className="flex items-center gap-3 font-mono text-sm">
        <span className="text-primary">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
        <span className="uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      </RevealItem>
      <RevealItem>
        <h2 className="font-display text-heading-xl font-bold text-gradient-soft">
          {title}
        </h2>
      </RevealItem>
    </Reveal>
  );
}
