import Link from "next/link";
import { BrandLockup } from "@/components/brand-lockup";
import { FOOTER_APP_LINKS, FOOTER_LEGAL_LINKS, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-auto border-t border-[color-mix(in_srgb,var(--outline-variant)_40%,transparent)] bg-surface-container-low">
      <div className="container-site pt-16 md:pt-20">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-xs">
            <BrandLockup tone="onLight" textClassName="type-title" />
            <p className="type-body mt-4 m-0">
              A <span className="font-bold text-primary">Northfold</span> studio app
            </p>
            <p className="type-small mt-3 m-0">© {year} {SITE_NAME}</p>
          </div>
          <div className="footer-columns flex flex-col gap-10 sm:flex-row sm:gap-16 lg:gap-24">
            <nav aria-label="Explore" className="footer-column">
              <p className="footer-column-label m-0">Explore</p>
              <ul className="footer-column-list m-0 list-none p-0">
                {FOOTER_APP_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="footer-column-link text-[var(--text-body)] font-bold text-primary no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company" className="footer-column">
              <p className="footer-column-label m-0">Company</p>
              <ul className="footer-column-list m-0 list-none p-0">
                {FOOTER_LEGAL_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="footer-column-link text-[var(--text-body)] font-bold text-primary no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-masthead-band" aria-hidden="true">
          <p className="footer-masthead m-0">{SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
