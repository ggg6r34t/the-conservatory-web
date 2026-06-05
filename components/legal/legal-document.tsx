import type { LegalDocument } from "@/lib/legal-content";
import { LegalPageShell } from "@/components/legal/legal-page-shell";
import { LegalSection } from "@/components/legal/legal-section";

type LegalDocumentViewProps = {
  document: LegalDocument;
  mainLabel?: string;
  contact?: {
    title?: string;
    description?: string;
    email: string;
    emailLabel?: string;
    mailtoSubject?: string;
  };
  relatedLinks?: readonly { href: string; label: string }[];
};

export function LegalDocumentView({
  document,
  mainLabel,
  contact,
  relatedLinks,
}: LegalDocumentViewProps) {
  return (
    <LegalPageShell
      mainLabel={mainLabel ?? document.title}
      eyebrow={document.prefaceLabel}
      title={document.title}
      subtitle={document.subtitle}
      preface={{ title: document.prefaceTitle, body: document.prefaceBody }}
      contact={contact}
      relatedLinks={relatedLinks}
    >
      {document.sections.map((section) => (
        <LegalSection key={`${section.eyebrow}-${section.title}`} section={section} />
      ))}
    </LegalPageShell>
  );
}
