"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { navItems, site } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the active section for nav highlighting.
  React.useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="#hero"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
          aria-label={`${site.name} — home`}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-sm text-primary-foreground shadow-soft">
            CB
          </span>
          <span className="hidden sm:inline">
            {site.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  active === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="mr-1.5 font-mono text-xs text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-signal transition-transform duration-300",
                    active === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="gradient"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <a href="#contact">Let&apos;s talk</a>
          </Button>
          <ThemeToggle />

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Menu
              </SheetTitle>
              <ul className="mt-2 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <span className="font-mono text-sm text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <SheetClose asChild>
                <Button asChild variant="gradient" className="mt-4 w-full">
                  <a href="#contact">Get in touch</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
