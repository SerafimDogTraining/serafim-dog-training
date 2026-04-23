import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1b4d2e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px 96px",
          position: "relative",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            width: 56,
            height: 3,
            background: "#c9a84c",
            marginBottom: 32,
          }}
        />

        {/* Location label */}
        <div
          style={{
            color: "#c9a84c",
            fontSize: 13,
            fontFamily: "sans-serif",
            fontWeight: 500,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          In-Person · Austin, TX · Online Worldwide
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 60,
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            lineHeight: 1.1,
            maxWidth: 820,
          }}
        >
          Serafim Dog Training
        </div>

        {/* Subhead */}
        <div
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 24,
            fontFamily: "sans-serif",
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: 680,
            marginTop: 20,
          }}
        >
          Working dogs, service dogs, and behavioral rehabilitation.
          Every dog gets a custom plan.
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 96,
            color: "rgba(255,255,255,0.3)",
            fontSize: 14,
            fontFamily: "sans-serif",
            letterSpacing: "2px",
          }}
        >
          serafimdogtraining.com
        </div>

        {/* Large ghosted "S" — decorative */}
        <div
          style={{
            position: "absolute",
            right: 56,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            color: "rgba(255,255,255,0.04)",
            fontSize: 380,
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
