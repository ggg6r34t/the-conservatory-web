import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = ["/", "/privacy", "/terms", "/support", "/account-deletion"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-04T00:00:00.000Z");

  return routes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
