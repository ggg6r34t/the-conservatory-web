import { LegalDocumentView } from "@/components/legal/legal-document";
import { createPageMetadata } from "@/lib/metadata";
import { privacyPolicyDocument } from "@/lib/legal-content";
import { LEGAL_CONTACT } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: privacyPolicyDocument.description,
  path: "/privacy",
});

const relatedLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/account-deletion", label: "Account & data deletion" },
  { href: "/support", label: "Support" },
] as const;

export default function PrivacyPage() {
  return (
    <LegalDocumentView
      document={privacyPolicyDocument}
      contact={{
        title: "Privacy contact",
        description: "Questions about this policy or your data rights.",
        email: LEGAL_CONTACT.privacyEmail,
        emailLabel: "Privacy",
      }}
      relatedLinks={relatedLinks}
    />
  );
}
