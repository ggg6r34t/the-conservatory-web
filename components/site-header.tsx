import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--outline-variant)_35%,transparent)] bg-[color-mix(in_srgb,var(--background)_94%,transparent)] backdrop-blur-lg">
      <div className="container-site flex items-center justify-between gap-8 py-5 md:py-6">
        <Link
          href="/"
          aria-label="The Conservatory home"
          className="text-primary no-underline hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <BrandLockup
            tone="onLight"
            textClassName="font-serif text-[1.125rem] font-bold tracking-tight md:text-xl"
          />
        </Link>
        <nav aria-label="Primary">
          <ul className="m-0 flex list-none flex-wrap items-center gap-0.5 p-0 sm:gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-[var(--radius-pill)] px-3.5 py-2 text-[var(--text-small)] font-bold text-on-surface-variant no-underline transition-colors hover:bg-surface-container-high hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
