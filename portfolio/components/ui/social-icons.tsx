"use client";

import { Github, Linkedin, Mail, Phone, Globe, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { SocialLink } from "@/data/content";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const ICONS: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  globe: Globe,
  resume: FileText,
};

export function SocialIcons({
  links,
  className,
  size = "default",
}: {
  links: SocialLink[];
  className?: string;
  size?: "default" | "sm";
}) {
  return (
    <TooltipProvider delayDuration={150}>
      <ul className={cn("flex items-center gap-2", className)}>
        {links.map((link) => {
          const Icon = ICONS[link.icon];
          const isExternal = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={cn(
                      "group inline-flex items-center justify-center rounded-full border border-border bg-surface/50 text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      size === "sm" ? "h-9 w-9" : "h-10 w-10",
                    )}
                  >
                    <Icon
                      className={cn(size === "sm" ? "h-4 w-4" : "h-[1.15rem] w-[1.15rem]")}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{link.label}</TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </TooltipProvider>
  );
}
