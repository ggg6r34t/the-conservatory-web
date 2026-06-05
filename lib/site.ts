export const SITE_NAME = "The Conservatory";

export const SITE_URL = "https://theconservatory.garden";

export const SITE_TAGLINE =
  "Preserve the story of every plant—care, growth, memory, and a living archive.";

export const LEGAL_LAST_UPDATED = "June 4, 2026";

/** ISO 8601 date paired with LEGAL_LAST_UPDATED for machine-readable markup */
export const LEGAL_LAST_UPDATED_ISO = "2026-06-04";

/** Web contact addresses (marketing domain). Content aligned with mobile legal copy. */
export const LEGAL_CONTACT = {
  privacyEmail: "privacy@theconservatory.garden",
  legalEmail: "legal@theconservatory.garden",
  supportEmail: "support@theconservatory.garden",
} as const;

export const NAV_LINKS = [
  { href: "/#begin", label: "Care" },
  { href: "/#archive", label: "Archive" },
  { href: "/#showcase", label: "App" },
  { href: "/support", label: "Support" },
] as const;

export const NORTHFOLD_URL = "https://northfold.com";

/** Set in Vercel env when store listings are live */
export const STORE_LINKS = {
  apple: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#download",
  google: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "#download",
} as const;

export const FOOTER_APP_LINKS = [
  { href: "/#begin", label: "Care" },
  { href: "/#archive", label: "Archive" },
  { href: "/#growth", label: "Growth" },
  { href: "/#showcase", label: "App" },
] as const;

export const FOOTER_LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
  { href: "/account-deletion", label: "Account Deletion" },
] as const;

/** @deprecated Use FOOTER_LEGAL_LINKS */
export const FOOTER_LINKS = FOOTER_LEGAL_LINKS;
