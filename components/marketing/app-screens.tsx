import Image from "next/image";
import type { ReactNode } from "react";
import type { ShowcaseScreenId } from "@/lib/narrative-content";
import { BOTANICAL_IMAGES } from "@/lib/narrative-content";

export function AppScreen({ id }: { id: ShowcaseScreenId }) {
  switch (id) {
    case "plant":
      return <PlantDetailScreen />;
    case "timeline":
      return <TimelineScreen />;
    case "journal":
      return <JournalScreen />;
    case "archive":
      return <ArchiveScreen />;
    case "premium":
      return <PremiumScreen />;
    case "profile":
      return <ProfileScreen />;
    case "calendar":
      return <CalendarScreen />;
    case "logs":
      return <CareLogsScreen />;
    default:
      return <PlantDetailScreen />;
  }
}

function MockIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center text-primary ${className}`}
      aria-hidden
    >
      {children}
    </span>
  );
}

function MockBackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MockScreenShell({
  title,
  children,
  rightAction,
}: {
  title: string;
  children: ReactNode;
  rightAction?: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-surface text-on-surface">
      <header className="flex shrink-0 items-center justify-between px-4 pb-2 pt-8">
        <div className="flex min-w-0 items-center gap-2.5">
          <MockIcon>
            <MockBackIcon />
          </MockIcon>
          <p className="m-0 truncate font-serif text-[13px] font-bold leading-tight text-primary">
            {title}
          </p>
        </div>
        {rightAction ?? <span className="h-8 w-8 shrink-0" aria-hidden />}
      </header>
      <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden px-4 pb-3">
        {children}
      </div>
    </div>
  );
}

function StatusLeafIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlantDetailScreen() {
  return (
    <MockScreenShell
      title="Plant Details"
      rightAction={
        <MockIcon>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MockIcon>
      }
    >
      <div className="relative h-[258px] shrink-0 overflow-hidden rounded-[18px] bg-surface-container-high">
        <Image
          src={BOTANICAL_IMAGES.monstera}
          alt=""
          fill
          sizes="280px"
          className="object-cover object-center"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-[14px] bg-surface-container-lowest px-2.5 py-2 shadow-[0_4px_14px_rgba(22,56,40,0.1)]">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant">
            <StatusLeafIcon />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[7px] font-bold tracking-[0.14em] text-on-surface-variant">
              STATUS
            </span>
            <span className="mt-0.5 text-[11px] font-medium text-on-surface">STABLE</span>
          </span>
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-(--secondary-fixed) py-1.5 pl-3 pr-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
          <span className="text-[9px] font-bold tracking-[0.16em] text-secondary">
            AROID FAMILY
          </span>
        </span>
        <p className="m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
          Monstera
        </p>
        <p className="m-0 font-serif text-[11px] italic leading-snug text-on-surface-variant">
          Swiss Cheese
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-3">
        <span className="flex items-center justify-center gap-2 rounded-pill bg-primary py-3 text-[11px] font-bold text-on-primary">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z" />
          </svg>
          Water Now
        </span>
        <span className="flex items-center justify-center gap-2 rounded-pill border border-outline-variant bg-surface-container-lowest py-3 text-[11px] font-bold text-primary">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Add Log
        </span>
      </div>

      <div className="shrink-0 overflow-hidden rounded-[18px] bg-surface-container-low px-4 py-3">
        <p className="m-0 font-serif text-[14px] font-bold leading-snug text-primary">
          More history needed
        </p>
        <p className="mt-2 m-0 text-[10px] leading-[1.55] text-on-surface-variant">
          This insight needs additional care logs or photos before it can offer a thoughtful read.
        </p>
      </div>
    </MockScreenShell>
  );
}

const TIMELINE_FILMSTRIP = [
  BOTANICAL_IMAGES.pilea,
  BOTANICAL_IMAGES.monstera,
  BOTANICAL_IMAGES.pothos,
] as const;

function TimelineScreen() {
  return (
    <div className="relative h-full">
      <MockScreenShell title="Growth Progress">
        <div className="shrink-0">
          <p className="m-0 text-[8px] font-bold tracking-[0.2em] text-secondary">
            WITNESS THE JOURNEY
          </p>
          <p className="mt-2 m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
            Monstera
          </p>
        </div>

        <div className="shrink-0 overflow-hidden">
          <div className="flex gap-2">
            {TIMELINE_FILMSTRIP.map((src) => (
              <div
                key={src}
                className="relative h-[108px] w-[80px] shrink-0 overflow-hidden rounded-[14px] bg-surface-container-high"
              >
                <Image src={src} alt="" fill sizes="80px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-h-0 flex-col gap-3 overflow-hidden">
          <span className="inline-flex w-fit rounded bg-surface-container-high px-2 py-0.5 text-[8px] font-bold tracking-[0.08em] text-secondary-container">
            JUNE 04, 2025
          </span>
          <p className="m-0 font-serif text-[18px] font-bold leading-tight text-on-surface">
            New leaves
          </p>
          <div className="relative h-[172px] shrink-0 overflow-hidden rounded-[18px] bg-surface-container-low">
            <Image
              src={BOTANICAL_IMAGES.monstera}
              alt=""
              fill
              sizes="260px"
              className="object-cover object-center"
            />
          </div>
          <p className="m-0 shrink-0 text-[10px] leading-[1.55] text-on-surface-variant">
            The fenestrations are opening on the newest leaf — a quiet sign after the move to
            the window.
          </p>
        </div>
      </MockScreenShell>

      <span className="absolute bottom-11 right-4 z-10 inline-flex items-center gap-2 rounded-pill bg-primary px-3.5 py-2.5 text-[10px] font-bold text-on-primary shadow-[var(--shadow-soft)]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
        Add Photo
      </span>
    </div>
  );
}

function JournalScreen() {
  return (
    <MockScreenShell title="Your Field Notes">
      <div className="shrink-0">
        <p className="m-0 text-[8px] font-bold tracking-[0.2em] text-secondary">
          MARCH HIGHLIGHT
        </p>
        <p className="mt-2 m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
          A quieter month, still growing
        </p>
      </div>
      <div className="relative h-[172px] shrink-0 overflow-hidden rounded-[18px] bg-surface-container-high">
        <Image
          src={BOTANICAL_IMAGES.pothos}
          alt=""
          fill
          sizes="260px"
          className="object-cover object-center"
        />
      </div>
      <p className="m-0 shrink-0 text-[10px] leading-[1.55] text-on-surface-variant">
        Twelve care moments. Two new leaves. The light shifted toward the window.
      </p>
      <span className="mt-auto shrink-0 text-[10px] font-bold text-secondary">
        Read journal →
      </span>
    </MockScreenShell>
  );
}

const ARCHIVE_GRID = [
  BOTANICAL_IMAGES.monstera,
  BOTANICAL_IMAGES.pothos,
  BOTANICAL_IMAGES.pilea,
  BOTANICAL_IMAGES.ivy,
] as const;

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"] as const;

const CALENDAR_CELLS: (number | null)[] = [
  ...Array.from({ length: 3 }, () => null),
  ...Array.from({ length: 30 }, (_, i) => i + 1),
  ...Array.from({ length: 9 }, () => null),
];

const CARE_DAYS = new Set([8, 15, 22, 29]);

function ArchiveScreen() {
  return (
    <MockScreenShell title="Archive">
      <div className="relative h-[258px] shrink-0 overflow-hidden rounded-[18px] bg-surface-container-high">
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-1.5 p-1.5">
          {ARCHIVE_GRID.map((src) => (
            <div key={src} className="relative min-h-0 overflow-hidden rounded-[12px]">
              <Image src={src} alt="" fill sizes="140px" className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-[14px] bg-surface-container-lowest px-2.5 py-2 shadow-[0_4px_14px_rgba(22,56,40,0.1)]">
          <span className="flex flex-col leading-none">
            <span className="text-[7px] font-bold tracking-[0.14em] text-on-surface-variant">
              COLLECTION
            </span>
            <span className="mt-0.5 text-[11px] font-medium text-on-surface">4 SPECIMENS</span>
          </span>
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-(--secondary-fixed) py-1.5 pl-3 pr-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
          <span className="text-[9px] font-bold tracking-[0.16em] text-secondary">
            YOUR COLLECTION
          </span>
        </span>
        <p className="m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
          Four specimens
        </p>
        <p className="m-0 font-serif text-[11px] italic leading-snug text-on-surface-variant">
          Curated like a museum wall
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-3">
        <span className="flex items-center justify-center gap-2 rounded-pill bg-primary py-3 text-[11px] font-bold text-on-primary">
          View gallery
        </span>
        <span className="flex items-center justify-center gap-2 rounded-pill border border-outline-variant bg-surface-container-lowest py-3 text-[11px] font-bold text-primary">
          Add specimen
        </span>
      </div>

      <div className="shrink-0 overflow-hidden rounded-[18px] bg-surface-container-low px-4 py-3">
        <p className="m-0 font-serif text-[14px] font-bold leading-snug text-primary">
          Every plant remembered
        </p>
        <p className="mt-2 m-0 text-[10px] leading-[1.55] text-on-surface-variant">
          Photos, tags, and years held together — the archive grows with your care.
        </p>
      </div>
    </MockScreenShell>
  );
}

function PremiumScreen() {
  return (
    <MockScreenShell title="Membership">
      <div className="relative h-[258px] shrink-0 overflow-hidden rounded-[18px] bg-surface-container-high">
        <Image
          src={BOTANICAL_IMAGES.ivy}
          alt=""
          fill
          sizes="280px"
          className="object-cover object-center"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-[14px] bg-surface-container-lowest px-2.5 py-2 shadow-[0_4px_14px_rgba(22,56,40,0.1)]">
          <span className="flex flex-col leading-none">
            <span className="text-[7px] font-bold tracking-[0.14em] text-on-surface-variant">
              MEMBERSHIP
            </span>
            <span className="mt-0.5 text-[11px] font-medium text-on-surface">THE STEWARD</span>
          </span>
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-(--secondary-fixed) py-1.5 pl-3 pr-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
          <span className="text-[9px] font-bold tracking-[0.16em] text-secondary">
            ACCOUNT STEWARDSHIP
          </span>
        </span>
        <p className="m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
          Subscription Editorial
        </p>
        <p className="m-0 font-serif text-[11px] italic leading-snug text-on-surface-variant">
          Refine your botanical journey
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-3">
        <span className="flex items-center justify-center gap-2 rounded-pill bg-primary py-3 text-[11px] font-bold text-on-primary">
          View plans
        </span>
        <span className="flex items-center justify-center gap-2 rounded-pill border border-outline-variant bg-surface-container-lowest py-3 text-[11px] font-bold text-primary">
          Restore purchase
        </span>
      </div>

      <div className="shrink-0 overflow-hidden rounded-[18px] bg-surface-container-low px-4 py-3">
        <p className="m-0 font-serif text-[14px] font-bold leading-snug text-primary">
          The Steward
        </p>
        <p className="mt-2 m-0 text-[10px] leading-[1.55] text-on-surface-variant">
          Cloud-backed photos, richer export, and reflections when you want them.
        </p>
      </div>
    </MockScreenShell>
  );
}

function ProfileScreen() {
  return (
    <MockScreenShell title="Profile">
      <div className="relative h-[258px] shrink-0 overflow-hidden rounded-[18px] bg-surface-container-high">
        <Image
          src={BOTANICAL_IMAGES.pothos}
          alt=""
          fill
          sizes="280px"
          className="object-cover object-center"
        />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-[14px] bg-surface-container-lowest px-2.5 py-2 shadow-[0_4px_14px_rgba(22,56,40,0.1)]">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-fixed bg-secondary-container font-serif text-[10px] font-bold text-primary">
            AM
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[7px] font-bold tracking-[0.14em] text-on-surface-variant">
              CURATOR
            </span>
            <span className="mt-0.5 text-[11px] font-medium text-on-surface">Alex Morgan</span>
          </span>
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-(--secondary-fixed) py-1.5 pl-3 pr-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
          <span className="text-[9px] font-bold tracking-[0.16em] text-secondary">
            CURATOR&apos;S CORNER
          </span>
        </span>
        <p className="m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
          Alex Morgan
        </p>
        <p className="m-0 font-serif text-[11px] italic leading-snug text-on-surface-variant">
          alex@conservatory.garden
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-3">
        <span className="flex items-center justify-center gap-2 rounded-pill bg-primary py-3 text-[11px] font-bold text-on-primary">
          Archive gallery
        </span>
        <span className="flex items-center justify-center gap-2 rounded-pill border border-outline-variant bg-surface-container-lowest py-3 text-[11px] font-bold text-primary">
          App settings
        </span>
      </div>

      <div className="shrink-0 overflow-hidden rounded-[18px] bg-surface-container-low px-4 py-3">
        <p className="m-0 font-serif text-[14px] font-bold leading-snug text-primary">
          12 active · 18-day streak
        </p>
        <p className="mt-2 m-0 text-[10px] leading-[1.55] text-on-surface-variant">
          Three plants remembered in the graveyard. Data stays local-first on this device.
        </p>
      </div>
    </MockScreenShell>
  );
}

function CalendarScreen() {
  return (
    <MockScreenShell title="Care Calendar">
      <div className="relative h-[258px] shrink-0 overflow-hidden rounded-[18px] bg-surface-container-lowest px-3 pb-3 pt-3">
        <p className="m-0 text-[8px] font-bold tracking-[0.2em] text-secondary">
          BOTANICAL PLANNER
        </p>
        <p className="mt-1 m-0 font-serif text-[18px] font-bold leading-tight text-primary">
          April
        </p>
        <div className="mt-2.5 grid grid-cols-7 gap-0.5">
          {WEEKDAY_LABELS.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="flex h-4 items-center justify-center text-[7px] font-bold tracking-[0.08em] text-on-surface-variant"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-7 gap-0.5">
          {CALENDAR_CELLS.map((day, i) =>
            day === null ? (
              <span key={`empty-${i}`} className="h-[26px] shrink-0" aria-hidden />
            ) : (
              <span
                key={day}
                className={`flex h-[26px] shrink-0 items-center justify-center rounded-full text-[8px] ${CARE_DAYS.has(day)
                    ? "bg-primary font-bold text-on-primary"
                    : "text-on-surface-variant"
                  }`}
              >
                {day}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-2">
        <span className="inline-flex w-fit items-center gap-2 rounded-pill bg-(--secondary-fixed) py-1.5 pl-3 pr-3.5">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
          <span className="text-[9px] font-bold tracking-[0.16em] text-secondary">
            UP NEXT
          </span>
        </span>
        <p className="m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
          Water Monstera
        </p>
        <p className="m-0 font-serif text-[11px] italic leading-snug text-on-surface-variant">
          Tuesday · Living room
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-3">
        <span className="flex items-center justify-center gap-2 rounded-pill bg-primary py-3 text-[11px] font-bold text-on-primary">
          Mark done
        </span>
        <span className="flex items-center justify-center gap-2 rounded-pill border border-outline-variant bg-surface-container-lowest py-3 text-[11px] font-bold text-primary">
          Snooze
        </span>
      </div>

      <div className="shrink-0 overflow-hidden rounded-[18px] bg-surface-container-low px-4 py-3">
        <p className="m-0 font-serif text-[14px] font-bold leading-snug text-primary">
          Care rhythm
        </p>
        <p className="mt-2 m-0 text-[10px] leading-[1.55] text-on-surface-variant">
          Upcoming watering, feeding, and gentle care — derived from your plants and reminders.
        </p>
      </div>
    </MockScreenShell>
  );
}

function CareLogsScreen() {
  const logs = [
    { action: "Watered Monstera", when: "Today · 9:14 AM" },
    { action: "Misted Pothos", when: "Yesterday · 6:02 PM" },
    { action: "Fed Pilea", when: "Apr 12" },
    { action: "Pruned Ivy", when: "Apr 8" },
  ];

  return (
    <MockScreenShell title="Care Logs">
      <div className="shrink-0">
        <p className="m-0 text-[8px] font-bold tracking-[0.2em] text-secondary">
          RECENT CARE
        </p>
        <p className="mt-2 m-0 font-serif text-[22px] font-bold leading-[1.05] text-primary">
          Every moment remembered
        </p>
      </div>

      <div className="flex shrink-0 gap-1.5">
        <span className="rounded-pill bg-primary px-2.5 py-1 text-[8px] font-bold text-on-primary">
          All
        </span>
        <span className="rounded-pill bg-surface-container-high px-2.5 py-1 text-[8px] font-bold text-on-surface-variant">
          Water
        </span>
        <span className="rounded-pill bg-surface-container-high px-2.5 py-1 text-[8px] font-bold text-on-surface-variant">
          Feed
        </span>
      </div>

      {logs.map((log) => (
        <div
          key={log.action}
          className="shrink-0 rounded-[14px] bg-surface-container-low px-3 py-2.5"
        >
          <p className="m-0 text-[11px] font-bold text-on-surface">{log.action}</p>
          <p className="m-0 text-[9px] text-on-surface-variant">{log.when}</p>
        </div>
      ))}

      <span className="mt-auto shrink-0 text-[10px] font-bold text-secondary">
        View all logs →
      </span>
    </MockScreenShell>
  );
}
