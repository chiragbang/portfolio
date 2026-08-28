"use client";

import { Mail, Phone, ArrowUpRight } from "lucide-react";

import { site, socials } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialIcons } from "@/components/ui/social-icons";
import { staggerContainer } from "@/lib/motion";

export function Contact() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    "Let's work together",
  )}`;

  return (
    <section id="contact" className="container scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="Let's build something"
        align="center"
      />

      <Reveal
        stagger
        variants={staggerContainer}
        className="mx-auto mt-12 max-w-3xl"
      >
        <RevealItem>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 text-center backdrop-blur sm:p-12">
            {/* Soft, slowly-drifting glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-3/4 -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,hsl(var(--primary)/0.20),transparent)] blur-2xl" />

            {/* Ambient floating particles — pure CSS, very low cost */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {[
                "left-[12%] top-[24%] [animation-delay:0s]",
                "left-[82%] top-[30%] [animation-delay:-1.2s]",
                "left-[28%] top-[70%] [animation-delay:-2.1s]",
                "left-[68%] top-[64%] [animation-delay:-0.6s]",
                "left-[50%] top-[18%] [animation-delay:-1.7s]",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute h-1 w-1 rounded-full bg-primary/60 motion-safe:animate-ping ${pos}`}
                />
              ))}
            </div>

            {/* Faint grain for depth */}
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]" />

            <p className="relative mx-auto max-w-xl text-balance text-lg leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing new projects, product ideas, or
              opportunities to build something great. My inbox is always open —
              let&apos;s talk.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Button asChild size="lg" variant="gradient" className="group">
                  <a href={mailto}>
                    <Mail className="h-4 w-4" />
                    {site.email}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </Magnetic>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
              </Button>
            </div>

            <div className="relative mt-8 flex flex-col items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Find me online
              </span>
              <SocialIcons links={socials} />
            </div>
          </div>
        </RevealItem>
      </Reveal>
    </section>
  );
}
