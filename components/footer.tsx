"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { navItems, site, socials } from "@/data/content";
import { SocialIcons } from "@/components/ui/social-icons";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = 2026; // build-time constant; bump in /data if you prefer dynamic

  return (
    <footer className="relative border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Link
              href="#hero"
              className="inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-sm text-primary-foreground">
                CB
              </span>
              {site.name}
            </Link>
            <p className="text-sm text-muted-foreground">{site.shortBio}</p>
            <SocialIcons links={socials} size="sm" className="pt-1" />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          {/* <p>
            Built with{" "}
            <span className="text-foreground">Next.js</span> &{" "}
            <span className="text-foreground">Tailwind</span>.
          </p> */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="group"
            aria-label="Back to top"
          >
            <a href="#hero">
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
