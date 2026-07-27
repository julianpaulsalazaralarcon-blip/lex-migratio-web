import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/content";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#12182A",
          color: "#EDE6D6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "3px solid #3FA98A",
            marginBottom: 36,
          }}
        >
          <span style={{ fontSize: 44, color: "#3FA98A", fontWeight: 700 }}>
            {siteConfig.monogram}
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: 4 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", marginTop: 22, fontSize: 32, color: "#E08A4F" }}>
          {siteConfig.slogan}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 24, color: "#9BA3BE" }}>
          Derecho Migratorio Colombiano
        </div>
      </div>
    ),
    { ...size }
  );
}
