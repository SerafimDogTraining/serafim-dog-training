import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1b4d2e",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#c9a84c",
            fontSize: 20,
            fontFamily: "Georgia, serif",
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-0.01em",
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  );
}
