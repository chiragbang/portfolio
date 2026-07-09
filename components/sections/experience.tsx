"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";

import { experiences } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { staggerContainer } from "@/lib/motion";

export function Experience() {
  const railRef = React.useRef<HTMLDivElement>(null);
  // Scroll-driven glow that tracks down the rail as this section scrolls past.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 35%", "end 65%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const glowTop = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="container scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've made an impact"
      />

      <div ref={railRef} className="relative mt-14">
        {/* Center rail */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-primary/70 via-border to-transparent md:left-[9px]"
        />
        {/* Scroll-driven glow node */}
        <motion.div
          aria-hidden="true"
          style={{ top: glowTop }}
          className="absolute left-[7px] z-10 h-3 w-3 -translate-x-[5px] rounded-full bg-primary shadow-glow md:left-[9px]"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/70" />
        </motion.div>

        <Reveal
          stagger
          variants={staggerContainer}
          as="ul"
          className="space-y-10"
        >
          {experiences.map((exp) => {
            const year = exp.start.split(" ").pop() ?? exp.start;
            return (
              <RevealItem
                as="li"
                key={`${exp.company}-${exp.start}`}
                className="relative pl-8 md:pl-12"
              >
                {/* Static node marker for this entry */}
                <span
                  className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background md:h-5 md:w-5"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary md:h-2 md:w-2" />
                </span>

                <SpotlightCard lift={4} className="p-6 hover:shadow-lift sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
                    {/* Giant era numeral */}
                    <div className="flex shrink-0 items-center gap-3 sm:w-28 sm:flex-col sm:items-start sm:gap-1">
                      <span className="font-display text-5xl font-bold leading-none text-gradient-soft sm:text-6xl">
                        {year}
                      </span>
                      <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                        {exp.end === "Present" ? "Now" : `– ${exp.end.split(" ").pop()}`}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="flex flex-wrap items-center gap-2 font-display text-xl font-semibold">
                            {exp.role}
                            {exp.current ? (
                              <Badge variant="signal">Current</Badge>
                            ) : null}
                          </h3>
                          <p className="mt-1 text-primary">
                            <span className="font-medium">{exp.company}</span>
                            {exp.client ? (
                              <span className="text-muted-foreground">
                                {" "}
                                · {exp.client}
                              </span>
                            ) : null}
                          </p>
                        </div>
                        <p className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground sm:justify-end">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </p>
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {exp.highlights.map((point) => (
                          <li
                            key={point.slice(0, 32)}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                          >
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
