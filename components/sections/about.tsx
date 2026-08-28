"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

import { about, site } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { staggerContainer } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24 sm:py-32">
      <SectionHeading index="01" eyebrow="About Me" title="A bit about who I am" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Profile photo */}
        <Reveal className="order-1 lg:order-none">
          <div className="group relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-signal/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />
            <div className="relative aspect-[2/3] overflow-hidden rounded-3xl border border-border bg-background shadow-lift">
              <Image
                src="/profile.jpg.png"
                alt="Chirag Bang"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-contain mix-blend-screen"
              />
            </div>
          </div>
        </Reveal>

        {/* Bio + currently */}
        <Reveal stagger variants={staggerContainer} className="flex flex-col gap-5">
          {about.summary.map((para) => (
            <RevealItem key={para.slice(0, 24)}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {para}
              </p>
            </RevealItem>
          ))}

          <RevealItem>
            <div className="mt-1 rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Currently
              </div>
              <p className="mt-2 text-foreground">{about.currently}</p>
            </div>
          </RevealItem>

          <RevealItem>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {site.location}
            </p>
          </RevealItem>
        </Reveal>
      </div>

      {/* Stats */}
      <Reveal
        stagger
        variants={staggerContainer}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4"
      >
        {about.stats.map((stat) => (
          <RevealItem
            key={stat.label}
            className="bg-surface/80 p-6 text-center backdrop-blur sm:p-8"
          >
            <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
