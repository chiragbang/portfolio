import { ImageResponse } from "next/og";

import { site } from "@/data/content";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0A0A0B",
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(99,102,241,0.30), transparent 45%), radial-gradient(circle at 90% 100%, rgba(139,92,246,0.25), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              fontSize: 30,
              fontWeight: 700,
              color: "white",
              background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
            }}
          >
            CB
          </div>
          <div style={{ color: "#A1A1AA", fontSize: 28 }}>chiragbang.dev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#22D3EE", fontSize: 30, letterSpacing: 4 }}>
            {site.title.toUpperCase()}
          </div>
          <div
            style={{
              color: "#FAFAFA",
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              color: "#A1A1AA",
              fontSize: 32,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
