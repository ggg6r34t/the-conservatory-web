/** Emotional journey: Care → Growth → Memory → Preservation */

export const JOURNEY = ["Care", "Growth", "Memory", "Preservation"] as const;

export const HERO = {
  headline: "The story of every plant deserves to be remembered.",
  /** Single emotional line on hero — detail lives in sections below */
  supporting:
    "Track growth, preserve memories, and build a living archive for the plants you love.",
  filmTitle: "A year in The Conservatory",
} as const;

export const CHAPTERS = {
  begin: {
    id: "begin",
    eyebrow: "Care",
    headline: "Every collection starts with a single plant.",
    body: "Add a plant with intention. Name it, photograph it, and begin a profile that grows with you. Not a task list, but a living record of attention.",
    points: [
      "Thoughtful onboarding that welcomes one plant at a time",
      "Profiles built around photography and presence",
      "Care rituals: water, feed, mist, prune, inspect, logged gently",
    ],
  },
  growth: {
    id: "growth",
    eyebrow: "Growth",
    headline: "Watch years unfold in a few moments.",
    body: "Progress photos stack into a visual history. Before and after. Season by season. The timeline is not a chart. It is the plant changing shape in your home.",
    milestones: [
      { label: "First light", season: "Spring" },
      { label: "New leaves", season: "Summer" },
      { label: "Settling in", season: "Autumn" },
      { label: "A full year", season: "Winter" },
    ],
  },
  archive: {
    id: "archive",
    eyebrow: "Memory",
    headline: "Not just what happened. Why it mattered.",
    body: "Photo histories, growth timelines, monthly reflections, and journal entries turn routine care into something you will want to open again, like a volume on the shelf.",
    facets: [
      "A photographic archive for every plant",
      "Monthly highlights that read like editorial pages",
      "Journal entries that honor the season you shared",
    ],
  },
  graveyard: {
    id: "graveyard",
    eyebrow: "Preservation",
    headline: "Every plant leaves a story behind.",
    body: "When a chapter ends, memorials hold warmth, not loss. The graveyard is a reflective archive, unique to The Conservatory, where endings are remembered with dignity.",
  },
  premium: {
    id: "premium",
    eyebrow: "Invitation",
    headline: "Go deeper into your collection's story.",
    body: "Premium is not a paywall on care. It is an invitation to preserve more: cloud-backed photos, richer export, optional reflections, and the quiet intelligence to see patterns you might miss.",
    benefits: [
      "Growth archive with cloud preservation",
      "Unlimited photo history across your collection",
      "Journal reflections when you choose them",
      "Optional insights, never required to tend well",
    ],
  },
  download: {
    id: "download",
    headline: "Years from now, you'll be glad you kept the story.",
    body: "Begin with one plant. Stay for the archive. The Conservatory is waiting on iOS and Android.",
  },
} as const;

export const MEMBERSHIP_TIERS = [
  {
    name: "The Seedling",
    role: "Begin",
    description:
      "Local-first care, reminders, calendar, and memorials. The full rhythm of tending, without urgency.",
  },
  {
    name: "The Steward",
    role: "Monthly",
    description:
      "Deeper preservation: cloud-backed photos, richer export, and reflections when you want them.",
  },
  {
    name: "The Heirloom",
    role: "Annual",
    description:
      "The same depth, held steadily, with premium themes for those who live inside their collection.",
  },
] as const;

export const SHOWCASE_SCREENS = [
  { id: "plant", label: "Plant Detail", description: "Photography-led profiles with care at hand." },
  { id: "timeline", label: "Growth Timeline", description: "Progress photos that tell the years." },
  { id: "journal", label: "Journal", description: "Monthly highlights and editorial reflection." },
  { id: "archive", label: "Archive", description: "Your collection, curated like a museum wall." },
  { id: "premium", label: "Premium", description: "An invitation to preserve more." },
  { id: "profile", label: "Profile", description: "Settings with the calm of a reading room." },
  { id: "calendar", label: "Care Calendar", description: "Seasonal rhythm, never a dashboard." },
  { id: "logs", label: "Care Logs", description: "Every watering, every note, remembered." },
] as const;

export type ShowcaseScreenId = (typeof SHOWCASE_SCREENS)[number]["id"];

export const BOTANICAL_IMAGES = {
  monstera: "/images/lush-green-monstera-deliciosa.png",
  pothos: "/images/silver-satin-pothos-trailing-from-a-shelf.png",
  pilea: "/images/pilea-peperomioides.png",
  ivy: "/images/dark-ivy-leaves-in-high-contrast.png",
} as const;

export const HERO_FILM = {
  poster: "/images/lush-green-monstera-deliciosa.png",
  posterWebp: "/images/hero-poster.webp",
  videoMp4: "/videos/a-premium-cinematic-hero-video-of-the-conservatory.mp4",
  videoWebm: "/videos/a-premium-cinematic-hero-video-of-the-conservatory.webm",
} as const;
