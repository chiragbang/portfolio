"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";

import { site, socials } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { SocialIcons } from "@/components/ui/social-icons";
import { Hero3D } from "@/components/three/hero-3d";
import { wordReveal, staggerContainer } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const nameWords = site.name.split(" ");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
      aria-label="Intro"
    >
      {/* 3D centerpiece — sits to the right on desktop, faint backdrop on mobile */}
      <div className="pointer-events-none absolute inset-0 opacity-40 sm:opacity-50 lg:left-auto lg:right-[-6%] lg:w-[60%] lg:opacity-100 lg:[mask-image:none] [mask-image:radial-gradient(circle_at_70%_40%,black,transparent_70%)] lg:pointer-events-auto">
        <Hero3D />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Availability badge */}
          {site.available ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {site.availabilityText}
            </motion.div>
          ) : null}

          {/* Eyebrow */}
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3 flex items-center gap-2 font-mono text-sm text-muted-foreground"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Hi, I&apos;m
          </motion.p>

          {/* Name — word-by-word clip reveal */}
          <h1 className="font-display text-display font-bold">
            <motion.span
              variants={reduce ? undefined : staggerContainer}
              initial={reduce ? false : "hidden"}
              animate={reduce ? undefined : "show"}
              className="block"
            >
              {nameWords.map((word, i) => (
                <span
                  key={word}
                  className="mr-[0.22em] inline-block overflow-hidden pb-[0.06em] align-bottom"
                >
                  <motion.span
                    variants={reduce ? undefined : wordReveal}
                    className="inline-block text-gradient-soft"
                  >
                    {word}
                  </motion.span>
                  {i === nameWords.length - 1 && (
                    <span className="text-primary">.</span>
                  )}
                </span>
              ))}
            </motion.span>
          </h1>

          {/* Role line */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 flex items-center gap-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="h-px w-8 shrink-0 bg-signal sm:w-10" />
            <span className="text-gradient">{site.title}</span>
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
          >
            {site.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.67 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Button asChild size="lg" variant="gradient" className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Get in Touch</a>
              </Button>
            </Magnetic>
            <Button asChild size="lg" variant="ghost" className="group">
              {/* TODO: drop your resume at /public/resume.pdf */}
              <a href={site.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Quick-jump pills */}
          <motion.nav
            aria-label="Quick links"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.73 }}
            className="mt-7 flex flex-wrap items-center gap-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Jump to
            </span>
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Work", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="rounded-full border border-border bg-surface/50 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {pill.label}
              </a>
            ))}
          </motion.nav>

          {/* Socials */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="mt-8"
          >
            <SocialIcons links={socials} />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <motion.span
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        </span>
      </motion.a>
    </section>
  );
}
