"use client";

import { GraduationCap, MapPin } from "lucide-react";

import { education } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { staggerContainer } from "@/lib/motion";

export function Education() {
  return (
    <section id="education" className="container scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="05"
        eyebrow="Education"
        title="Academic background"
      />

      <Reveal
        stagger
        variants={staggerContainer}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {education.map((edu) => (
          <RevealItem key={edu.institution} className="h-full">
            <SpotlightCard className="group flex h-full flex-col p-7 hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-background text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-glow">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  {edu.start} — {edu.end}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {edu.degree}
              </h3>
              <p className="mt-1 text-primary">{edu.institution}</p>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {edu.location}
              </p>
            </SpotlightCard>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
