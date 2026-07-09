import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          fontWeight: 700,
          color: "white",
          background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
          borderRadius: 8,
          fontFamily: "sans-serif",
        }}
      >
        CB
      </div>
    ),
    { ...size },
  );
}
