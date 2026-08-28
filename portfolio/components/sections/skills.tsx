"use client";

import { skillGroups } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { staggerContainer } from "@/lib/motion";

export function Skills() {
  return (
    <section id="skills" className="container scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="02"
        eyebrow="Tech Stack"
        title="Tools I reach for"
      />

      <Reveal
        stagger
        variants={staggerContainer}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <RevealItem key={group.category} className="h-full">
              <SpotlightCard className="group p-6 hover:shadow-lift">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {group.category}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </RevealItem>
          );
        })}
      </Reveal>
    </section>
  );
}
