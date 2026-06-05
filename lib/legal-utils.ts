import { LEGAL_LAST_UPDATED, LEGAL_LAST_UPDATED_ISO } from "@/lib/site";

export function legalSectionId(eyebrow: string, title: string): string {
  const slug = `${eyebrow}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `legal-section-${slug}`;
}

export function legalEffectiveDateIso(): string {
  return LEGAL_LAST_UPDATED_ISO;
}

export function legalEffectiveDateLabel(): string {
  return LEGAL_LAST_UPDATED;
}
