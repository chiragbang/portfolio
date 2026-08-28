import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import { site, socials } from "@/data/content";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ChatWidget } from "@/components/chat-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description = site.shortBio;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Chirag Bang",
    "Full Stack Engineer",
    "Next.js Developer",
    "Node.js",
    "NestJS",
    "React",
    "TypeScript",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.title}`,
    description,
    // OG image is generated at build time by app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description,
    // TODO: add your Twitter/X handle, e.g. "@chiragbang"
    creator: "@chiragbang",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Favicon, apple-icon and manifest are provided by file conventions:
  // app/icon.tsx, app/apple-icon.tsx, app/manifest.ts
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
  knowsAbout: [
    "Next.js",
    "React.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Microservices",
    "GraphQL",
    "REST APIs",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ChatWidget />
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
