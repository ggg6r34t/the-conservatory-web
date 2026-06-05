import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { EditorialPanel } from "@/components/editorial-panel";
import { LegalContactCard } from "@/components/legal/legal-contact-card";
import { createPageMetadata } from "@/lib/metadata";
import {
  SUPPORT_LEGAL_LINKS,
  supportCategories,
  supportFaq,
} from "@/lib/support-content";
import { LEGAL_CONTACT, SITE_NAME } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Support",
  description: `Help, FAQs, and contact for ${SITE_NAME}—plants, sync, Premium, exports, account deletion, and privacy.`,
  path: "/support",
});

export default function SupportPage() {
  return (
    <PageShell mainLabel="Support">
      <div className="mx-auto max-w-[var(--measure-prose)]">
        <header>
          <p className="type-eyebrow m-0">Support</p>
          <h1 className="type-chapter-title mt-5">We&apos;re here when you need us</h1>
          <p className="type-body-lg mt-7 m-0">
            {SITE_NAME} is built for calm, local-first plant journaling. Most
            answers live inside the app under Profile. Browse the topics below or
            email us—we read every message.
          </p>
        </header>

        <div className="mt-10">
          <LegalContactCard
            title="Contact support"
            description="Account, sync, Premium, exports, and general app questions."
            email={LEGAL_CONTACT.supportEmail}
            emailLabel="Support"
          />
        </div>

        <section aria-labelledby="support-categories-heading" className="mt-14">
          <h2 id="support-categories-heading" className="type-title m-0">
            Support topics
          </h2>
          <div className="mt-8 flex flex-col gap-8">
            {supportCategories.map((topic) => (
              <EditorialPanel key={topic.title}>
                <h3 className="type-title m-0">{topic.title}</h3>
                <p className="type-body mt-4 m-0">{topic.body}</p>
                {topic.email ? (
                  <p className="type-body mt-5 m-0">
                    <span className="font-bold text-on-surface">
                      {topic.emailLabel}:{" "}
                    </span>
                    <a
                      href={`mailto:${topic.email}`}
                      className="font-bold text-primary no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {topic.email}
                    </a>
                  </p>
                ) : null}
                {topic.links && topic.links.length > 0 ? (
                  <p className="type-body mt-5 m-0">
                    {topic.links.map((link, index) => (
                      <span key={link.href}>
                        {index > 0 ? " · " : null}
                        <Link
                          href={link.href}
                          className="font-bold text-primary no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                          {link.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                ) : null}
              </EditorialPanel>
            ))}
          </div>
        </section>

        <section aria-labelledby="support-faq-heading" className="mt-16">
          <h2 id="support-faq-heading" className="type-title m-0">
            Frequently asked questions
          </h2>
          <div className="support-faq mt-8 flex flex-col gap-4">
            {supportFaq.map((item) => (
              <details
                key={item.question}
                className="support-faq__item rounded-[var(--radius-panel)] bg-surface-container-lowest p-5 shadow-[var(--shadow-soft)]"
              >
                <summary className="type-body cursor-pointer font-bold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {item.question}
                </summary>
                <p className="type-body mt-4 m-0 text-on-surface-variant">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <nav
          aria-label="Legal and policy links"
          className="mt-16 rounded-[var(--radius-panel)] border border-[color-mix(in_srgb,var(--outline-variant)_40%,transparent)] bg-surface-container-low p-6 md:p-8"
        >
          <p className="type-eyebrow m-0">Policies</p>
          <ul className="mt-4 flex flex-col gap-2 m-0 list-none p-0">
            {SUPPORT_LEGAL_LINKS.map((link) => (
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
      </div>
    </PageShell>
  );
}
