import { LegalDocumentView } from "@/components/legal/legal-document";
import { createPageMetadata } from "@/lib/metadata";
import { accountDeletionPolicyDocument } from "@/lib/legal-content";
import { LEGAL_CONTACT } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Delete your account",
  description: accountDeletionPolicyDocument.description,
  path: "/account-deletion",
});

const relatedLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/support", label: "Support" },
] as const;

export default function AccountDeletionPage() {
  return (
    <LegalDocumentView
      document={accountDeletionPolicyDocument}
      contact={{
        title: "Deletion requests",
        description:
          "Use this address if you cannot delete from the app or need help confirming completion.",
        email: LEGAL_CONTACT.privacyEmail,
        emailLabel: "Privacy",
        mailtoSubject: "Data deletion request",
      }}
      relatedLinks={relatedLinks}
    />
  );
}
