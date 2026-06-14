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
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          left: -140,
          width: 560,
          height: 560,
          borderRadius: 9999,
          background: "#6e8bff",
          opacity: 0.18,
          filter: "blur(130px)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 999,
            background: "#6e8bff",
            display: "flex",
          }}
        />
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#9aa3b5" }}>
          AVAILABLE FOR WORK
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 34, color: "#9aa3b5", lineHeight: 1.2 }}>
          {site.role}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid #2d3140",
          paddingTop: 32,
          fontSize: 22,
          letterSpacing: 2,
        }}
      >
        <div style={{ display: "flex", gap: 28, color: "#6e8bff" }}>
          <div style={{ display: "flex" }}>FULL STACK</div>
          <div style={{ display: "flex" }}>3D MODELING</div>
          <div style={{ display: "flex" }}>GAME DEV</div>
        </div>
        <div style={{ display: "flex", color: "#9aa3b5" }}>
          {site.url.replace("https://", "")}
        </div>
      </div>
    </div>,
    size,
  );
}
