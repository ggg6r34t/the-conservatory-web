import { LegalDocumentView } from "@/components/legal/legal-document";
import { createPageMetadata } from "@/lib/metadata";
import { termsOfServiceDocument } from "@/lib/legal-content";
import { LEGAL_CONTACT } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: termsOfServiceDocument.description,
  path: "/terms",
});

const relatedLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/account-deletion", label: "Account & data deletion" },
  { href: "/support", label: "Support" },
] as const;

export default function TermsPage() {
  return (
    <LegalDocumentView
      document={termsOfServiceDocument}
      contact={{
        title: "Legal contact",
        description: "Questions about these Terms of Service.",
        email: LEGAL_CONTACT.legalEmail,
        emailLabel: "Legal",
      }}
      relatedLinks={relatedLinks}
    />
  );
}
