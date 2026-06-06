import { ImageResponse } from "next/og";
import { HERO } from "@/lib/narrative-content";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME}. ${HERO.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(165deg, #2d4f3e 0%, #163828 45%, #1b1c19 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c5ebd4",
            marginBottom: 24,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
          }}
        >
          {SITE_NAME}
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#fbf9f4",
            maxWidth: 900,
          }}
        >
          {HERO.headline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            lineHeight: 1.5,
            color: "rgba(251, 249, 244, 0.82)",
            maxWidth: 720,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500,
          }}
        >
          {HERO.supporting}
        </div>
      </div>
    ),
    { ...size },
  );
}
