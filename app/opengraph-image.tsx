import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#16181f",
        color: "#f0f2f7",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#6e8bff",
          }}
        />
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#9aa3b5" }}>
          AVAILABLE FOR WORK
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 34, color: "#9aa3b5" }}>{site.role}</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #2d3140",
          paddingTop: 32,
          fontSize: 22,
          color: "#6e8bff",
          letterSpacing: 2,
        }}
      >
        <div>FULL STACK</div>
        <div>3D MODELING</div>
        <div>GAME DEV</div>
        <div style={{ color: "#9aa3b5" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    </div>,
    size,
  );
}
