import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { EditorialPanel } from "@/components/editorial-panel";
import { LegalUpdatedDate } from "@/components/legal/legal-updated-date";
import { LegalContactCard } from "@/components/legal/legal-contact-card";

type LegalPageShellProps = {
  mainLabel: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  preface?: { title: string; body: string };
  children: React.ReactNode;
  contact?: {
    title?: string;
    description?: string;
    email: string;
    emailLabel?: string;
    mailtoSubject?: string;
  };
  relatedLinks?: readonly { href: string; label: string }[];
};

export function LegalPageShell({
  mainLabel,
  eyebrow,
  title,
  subtitle,
  preface,
  children,
  contact,
  relatedLinks,
}: LegalPageShellProps) {
  return (
    <PageShell mainLabel={mainLabel}>
      <article className="legal-page mx-auto max-w-[var(--measure-prose)]">
        <header className="mb-12">
          <p className="type-eyebrow m-0">{eyebrow}</p>
          <h1 className="type-chapter-title mt-5">{title}</h1>
          <LegalUpdatedDate className="mt-4" />
          {subtitle ? (
            <p className="mt-2 text-[var(--text-small)] font-bold text-secondary">
              {subtitle}
            </p>
          ) : null}
        </header>

        {preface ? (
          <EditorialPanel className="mb-14">
            <h2 className="type-title m-0">{preface.title}</h2>
            <p className="type-body mt-5 m-0">{preface.body}</p>
          </EditorialPanel>
        ) : null}

        <div className="legal-page__body flex flex-col gap-12">{children}</div>

        {relatedLinks && relatedLinks.length > 0 ? (
          <nav
            aria-label="Related policies"
            className="legal-page__related mt-14 rounded-[var(--radius-panel)] border border-[color-mix(in_srgb,var(--outline-variant)_40%,transparent)] bg-surface-container-low p-6 md:p-8"
          >
            <p className="type-eyebrow m-0">Related</p>
            <ul className="mt-4 flex flex-col gap-2 m-0 list-none p-0">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-body font-bold text-primary no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {contact ? (
          <div className="mt-14">
            <LegalContactCard {...contact} />
          </div>
        ) : null}
      </article>
    </PageShell>
  );
}
