/**
 * Single source of truth for all site content.
 * Edit values here — every section reads from this file.
 *
 * Placeholders wrapped in << >> or marked with TODO are for you to fill in.
 */

import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
  GitBranch,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "globe" | "resume";
};

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export type SkillGroup = {
  category: string;
  icon: LucideIcon;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  client?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string; // TODO: add repo URL
  live?: string; // TODO: add live URL
  featured?: boolean;
};

export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  start: string;
  end: string;
};

export type NavItem = { label: string; href: string };

export const site = {
  name: "Chirag Bang",
  title: "Full Stack Engineer",
  // Used for SEO, OG tags, JSON-LD. TODO: replace with your deployed domain.
  url: "https://chiragbang.dev",
  tagline:
    "I build scalable, high-performance web applications — from pixel-perfect frontends to robust microservices.",
  shortBio:
    "Full Stack Engineer with 3+ years building scalable, high-performance web apps with Next.js, Node.js & modern frontend frameworks.",
  email: "chiragbang33@gmail.com",
  phone: "+91-9467757042",
  location: "Gurugram, Haryana, India",
  available: true,
  availabilityText: "Available for opportunities",
  resumeUrl: "/resume.pdf", // TODO: drop your resume at /public/resume.pdf
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  // TODO: replace # with your real profile URLs
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Email", href: "mailto:chiragbang33@gmail.com", icon: "mail" },
];

export const about: {
  summary: string[];
  currently: string;
  stats: Stat[];
} = {
  summary: [
    "Full Stack Engineer with 3+ years of experience building scalable, high-performance web applications using Next.js, Node.js, and modern frontend frameworks.",
    "Proven track record of improving application performance (40% faster load times) and increasing SEO traffic by 35% through SSR/SSG strategies. Experienced in designing robust REST/GraphQL APIs, implementing authentication systems, and deploying applications via CI/CD pipelines.",
  ],
  currently:
    "Currently focused on multi-tenant SaaS solutions and microservices-based architectures in cloud environments.",
  stats: [
    { value: 3, suffix: "+", label: "Years of experience" },
    { value: 15, suffix: "+", label: "Projects shipped" },
    { value: 40, suffix: "%", label: "Faster load times" },
    { value: 35, suffix: "%", label: "SEO traffic growth" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: Code2,
    items: ["JavaScript (ES6+)", "TypeScript", "PHP", "Python", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "Tailwind CSS", "Material-UI (MUI)", "Ant Design"],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL APIs",
      "Microservices",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "SQL", "Firebase Realtime DB"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS (S3)", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Bitbucket", "JIRA", "Postman", "Webpack", "Babel"],
  },
  {
    category: "AI & Integrations",
    icon: Sparkles,
    items: ["Google Gemini", "Claude", "ChatGPT", "Vapi (Voice API)"],
  },
  {
    category: "Methodologies",
    icon: GitBranch,
    items: ["Agile", "Scrum", "Test-Driven Development (TDD)"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Teamlease Digital Pvt. Ltd.",
    client: "InsuranceDekho – Heph",
    role: "SDE-1, Full Stack Developer",
    location: "Gurugram, Haryana",
    start: "Oct 2025",
    end: "Present",
    current: true,
    highlights: [
      "Engineered a SaaS-based automation system for insurer credential management, eliminating manual S3 workflows and enabling real-time secure configuration via a dynamic portal.",
      "Designed and implemented an Offline Policy Booking flow in the POSP portal with seamless integration to the Policy Management (ITMS) system, ensuring cross-platform data consistency.",
      "Developed services using NestJS, Next.js, and PHP within a multi-tenant microservices architecture for brokers, banks, and NBFCs.",
      "Led end-to-end setup and customization of client portals (POSP, ITMS, IFM), aligning product workflows with business requirements.",
      "Refactored architecture by replacing fragmented client-specific branches with a unified, feature-flag-driven codebase, improving maintainability and simplifying deployments.",
    ],
  },
  {
    company: "Amlgo Labs Pvt. Ltd.",
    role: "SDE-1",
    location: "Gurugram, Haryana",
    start: "Apr 2024",
    end: "Oct 2025",
    highlights: [
      "Engineered and launched full-stack applications using React.js, Next.js, Node.js, and MongoDB, reducing page load times by 40%.",
      "Increased organic traffic by 35% through SEO optimization using SSR and SSG in Next.js.",
      "Designed scalable REST APIs with authentication, validation, and caching for performance optimization.",
      "Improved release cycles by 60% through CI/CD pipelines and streamlined deployment workflows.",
    ],
  },
  {
    company: "Illuminate Technologies",
    role: "MERN Stack Developer",
    location: "Remote",
    start: "Jul 2023",
    end: "Apr 2024",
    highlights: [
      "Migrated a legacy WordPress platform to a Next.js + Node.js SPA, improving Lighthouse score from 68 to 95.",
      "Built reusable React components and modular APIs, reducing development time by 30%.",
      "Optimized REST/GraphQL APIs, improving UI responsiveness by 50%.",
      "Ensured accessibility and cross-browser compatibility in collaboration with UI/UX teams.",
    ],
  },
  {
    company: "AIOEAM Corpglobal",
    role: "Software Engineer Intern",
    location: "Remote",
    start: "Apr 2023",
    end: "Jul 2023",
    highlights: [
      "Contributed to software engineering initiatives, building and maintaining application features in a collaborative remote team.",
    ],
  },
  {
    company: "Solar Secure Solutions",
    role: "Web Developer Intern",
    location: "Remote",
    start: "Feb 2023",
    end: "Apr 2023",
    highlights: [
      "Built and maintained responsive web interfaces, gaining hands-on experience with modern frontend workflows.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Insurer Credential Automation Platform",
    description:
      "A SaaS portal that replaces manual S3 workflows with real-time, secure credential configuration — giving teams a self-serve, audit-friendly way to manage insurer integrations.",
    tags: ["NestJS", "Next.js", "AWS", "Microservices"],
    featured: true,
    repo: undefined, // TODO: add repo URL or remove
    live: undefined, // TODO: add live URL or remove
  },
  {
    title: "Multi-Tenant Insurance Portals (POSP / ITMS / IFM)",
    description:
      "A feature-flag-driven, unified codebase serving brokers, banks, and NBFCs — replacing fragmented client-specific branches and dramatically simplifying deployments.",
    tags: ["Next.js", "PHP", "Microservices", "Feature Flags"],
    featured: true,
    repo: undefined, // TODO
    live: undefined, // TODO
  },
  {
    title: "WordPress → Next.js Migration",
    description:
      "Rebuilt a legacy WordPress platform as a modern Next.js + Node.js SPA, lifting the Lighthouse score from 68 to 95 and slashing load times.",
    tags: ["Next.js", "Node.js", "SEO", "Performance"],
    featured: true,
    repo: undefined, // TODO
    live: undefined, // TODO
  },
];

export const education: EducationItem[] = [
  {
    institution: "Jaipur National University",
    degree: "Master of Computer Applications (MCA)",
    location: "Jaipur, India",
    start: "Sep 2021",
    end: "May 2023",
  },
  {
    institution: "Panipat Institute of Engineering and Technology (PIET)",
    degree: "Bachelor of Computer Applications (BCA)",
    location: "Panipat, India",
    start: "Jul 2018",
    end: "Aug 2021",
  },
];
