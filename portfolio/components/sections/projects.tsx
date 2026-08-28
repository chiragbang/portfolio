"use client";

import { ArrowUpRight, Github, Folder, ArrowRight } from "lucide-react";

import { projects, socials } from "@/data/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealItem } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Projects() {
  // TODO: replace with your real GitHub URL in /data/content.ts (socials)
  const githubUrl = socials.find((s) => s.icon === "github")?.href ?? "#";

  return (
    <section id="projects" className="container scroll-mt-24 py-24 sm:py-32">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Selected work & highlights"
      />

      <Reveal
        stagger
        variants={staggerContainer}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, i) => {
          const featuredWide = i === 0;
          return (
            <RevealItem
              key={project.title}
              className={cn("h-full", featuredWide && "lg:col-span-2")}
            >
              <SpotlightCard className="group flex h-full flex-col overflow-hidden hover:shadow-lift">
                <article className="flex h-full flex-col">
                  {/* Preview area — drop a screenshot here later */}
                  <div
                    className={cn(
                      "relative overflow-hidden border-b border-border bg-dot-grid",
                      featuredWide ? "h-44 sm:h-52" : "h-36",
                    )}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                    {/* Big ghost index */}
                    <span className="absolute -bottom-5 right-3 select-none font-display text-8xl font-bold leading-none text-foreground/[0.06] transition-transform duration-500 group-hover:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute left-5 top-5 flex items-center gap-2">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/80 text-primary backdrop-blur transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-glow">
                        <Folder className="h-5 w-5" />
                      </span>
                      {project.featured ? (
                        <Badge variant="signal">Featured</Badge>
                      ) : null}
                    </div>
                    {/* TODO: replace this block with a <next/image> screenshot:
                        <Image src="/projects/your-shot.png" alt={project.title} fill className="object-cover" /> */}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 items-center gap-1.5">
                        {/* TODO: add real links in /data/content.ts (repo / live) */}
                        {project.repo ? (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} repository`}
                            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <Github className="h-[1.15rem] w-[1.15rem]" />
                          </a>
                        ) : null}
                        {project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live site`}
                            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <ArrowUpRight className="h-[1.15rem] w-[1.15rem]" />
                          </a>
                        ) : (
                          <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground/70">
                            soon
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant="primary">{tag}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </SpotlightCard>
            </RevealItem>
          );
        })}

        {/* "See more" invite tile */}
        <RevealItem className="h-full">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border p-8 text-center transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* Corner brackets — a nod to the reference's technical card detail */}
            <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-primary/40 transition-all duration-300 group-hover:left-2 group-hover:top-2" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-primary/40 transition-all duration-300 group-hover:bottom-2 group-hover:right-2" />

            <span className="grid h-12 w-12 place-items-center rounded-full border border-border bg-surface text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-glow">
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="font-display text-lg font-semibold">
              Want to see more?
            </span>
            <span className="text-sm text-muted-foreground">
              Explore all my projects on GitHub
            </span>
          </a>
        </RevealItem>
      </Reveal>
    </section>
  );
}
