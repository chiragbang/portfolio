import type { MetadataRoute } from "next";

import { site } from "@/data/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.title}`,
    short_name: site.name,
    description: site.shortBio,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
