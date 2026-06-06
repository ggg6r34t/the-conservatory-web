import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle =
    path === "/" ? `${SITE_NAME} | Plant care journal` : `${title} — ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    applicationName: SITE_NAME,
    keywords: [
      "plant care",
      "plant journal",
      "watering reminders",
      "botanical archive",
      SITE_NAME,
    ],
    robots: { index: true, follow: true },
  };
}

export const homeMetadata = createPageMetadata({
  title: SITE_NAME,
  description:
    "Preserve the story of every plant. Track growth, hold memories, and build a living archive with The Conservatory.",
  path: "/",
});
