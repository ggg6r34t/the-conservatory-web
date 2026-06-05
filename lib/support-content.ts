import { LEGAL_CONTACT, SITE_NAME } from "@/lib/site";

export type SupportCategory = {
  title: string;
  body: string;
  email?: string;
  emailLabel?: string;
  links?: readonly { href: string; label: string }[];
};

export type SupportFaqItem = {
  question: string;
  answer: string;
};

export const SUPPORT_LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/account-deletion", label: "Account & data deletion" },
] as const;

export const supportCategories: SupportCategory[] = [
  {
    title: "Getting started",
    body: `Download ${SITE_NAME} from the App Store or Google Play, create an account, and follow onboarding to add your first plant. Collection data is stored on your device first and may sync when cloud sign-in and backup are enabled. Most collection features work without Premium.`,
  },
  {
    title: "Adding plants",
    body: "Tap Add Plant from your collection to enter a name, species, nickname, location label, watering interval, and optional photo. Species suggestions may appear when AI features are available—they are estimates and should be verified.",
  },
  {
    title: "Care logs and reminders",
    body: "Log watering, notes, and condition updates from a plant's detail screen. Schedule care reminders in the app; notifications are delivered locally on your device. The app does not send remote marketing push campaigns in the current release.",
  },
  {
    title: "Photos and growth timeline",
    body: "Primary and progress photos are stored on your device. Premium subscribers may back up photos to cloud storage when sync runs successfully. Growth Timeline shows progress photos you add over time.",
    email: LEGAL_CONTACT.supportEmail,
    emailLabel: "Support",
  },
  {
    title: "Cloud sync and backup",
    body: "The app is local-first: SQLite on your device is the primary store. When signed in with auto-sync enabled, changes queue to Supabase when online. Open Profile → Data & Backup or Backup Details for honest sync status—deferred or failed items are shown, not hidden.",
    email: LEGAL_CONTACT.supportEmail,
    emailLabel: "Support",
  },
  {
    title: "Premium subscription",
    body: "Premium is an auto-renewing subscription sold through Apple or Google, validated by RevenueCat. It may unlock photo cloud backup, enhanced export, advanced AI quotas, and other features shown in the app. Your collection data remains yours if Premium ends.",
    links: [{ href: "/terms", label: "Subscription terms" }],
  },
  {
    title: "Billing and restore purchases",
    body: "Purchases, renewals, refunds, and receipts are managed by Apple or Google—not by us directly. Use Restore Purchases on the Subscription Plans screen when reinstalling or switching devices with the same store account.",
    email: LEGAL_CONTACT.supportEmail,
    emailLabel: "Support",
  },
  {
    title: "Account deletion",
    body: "Delete your account from Profile → Privacy & Security → Delete Account. Deleting your account does not cancel an active App Store or Google Play subscription. If you cannot access the app, you may request deletion by email.",
    links: [{ href: "/account-deletion", label: "Account & data deletion" }],
    email: LEGAL_CONTACT.privacyEmail,
    emailLabel: "Privacy",
  },
  {
    title: "Privacy and data export",
    body: "Export a JSON copy of your collection from Profile → Data & Backup or Privacy & Security. Basic export is available on the free tier; Premium adds broader export scope. Authentication tokens and billing credentials are never included in exports.",
    links: [{ href: "/privacy", label: "Privacy Policy" }],
    email: LEGAL_CONTACT.privacyEmail,
    emailLabel: "Privacy",
  },
  {
    title: "Troubleshooting",
    body: "If sync, backup, AI, or subscription status looks wrong, open Backup Details or Subscription Plans in the app for diagnostics. Include your platform (iOS/Android), app version, and a short description when emailing support.",
    email: LEGAL_CONTACT.supportEmail,
    emailLabel: "Support",
  },
];

export const supportFaq: SupportFaqItem[] = [
  {
    question: "How do I add my first plant?",
    answer:
      "After onboarding, open your collection and tap Add Plant. Enter at least a name, then optionally add species, photo, location, and watering interval. The plant is saved locally first and syncs when cloud features are enabled.",
  },
  {
    question: "Why are my photos not syncing?",
    answer:
      "Photo cloud backup requires Premium and a successful sync upload. Free accounts keep photos on device only. Check Profile → Data & Backup or Backup Details for queue status, connectivity, and whether Premium is active.",
  },
  {
    question: "How do I restore purchases?",
    answer:
      "Open Subscription Plans in the app and tap Restore Purchases while signed in with the same Apple ID or Google account used for the original purchase. Restoration depends on store records and RevenueCat validation.",
  },
  {
    question: "How do I cancel Premium?",
    answer:
      "Cancel through your Apple App Store or Google Play subscription settings. Cancellation stops future renewals; Premium access typically continues until the end of the current paid period. Deleting the app does not cancel billing.",
  },
  {
    question: "How do I export my data?",
    answer:
      "Go to Profile → Data & Backup → Export Collection Data, or open Export Collection Data from Privacy & Security. The app generates a JSON file and opens the system share sheet so you can save or send it.",
  },
  {
    question: "How do I delete my account?",
    answer: `Open Profile → Privacy & Security → Delete Account and confirm the dialog. If you cannot access the app, email ${LEGAL_CONTACT.privacyEmail} from your account address with the subject line "Data deletion request." See the Account & data deletion page for full details.`,
  },
  {
    question: "Why are AI insights unavailable?",
    answer:
      "Some AI features require sufficient care history, Premium entitlement, cloud availability, or remaining monthly quota. Outputs may also show fallbacks when offline or when limits are reached. AI suggestions are informational—not guaranteed horticultural advice.",
  },
  {
    question: "What happens when I am offline?",
    answer:
      "Core journaling, reminders, and local AI features that do not require network access continue on device. Cloud sync, cloud AI, and photo backup queue changes until you are back online.",
  },
  {
    question: "How do reminders work?",
    answer:
      "Care reminders are scheduled as local notifications on your device. Grant notification permission when prompted. The app does not use remote push notification campaigns in the current release.",
  },
  {
    question: "Who do I contact for privacy or legal questions?",
    answer: `Privacy and data rights: ${LEGAL_CONTACT.privacyEmail}. Terms and legal: ${LEGAL_CONTACT.legalEmail}. General app support: ${LEGAL_CONTACT.supportEmail}.`,
  },
];
