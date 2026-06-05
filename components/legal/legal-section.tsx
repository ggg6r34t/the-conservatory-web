import type { LegalSection as LegalSectionContent } from "@/lib/legal-content";
import { legalSectionId } from "@/lib/legal-utils";

type LegalSectionProps = {
  section: LegalSectionContent;
  headingLevel?: "h2" | "h3";
};

export function LegalSection({ section, headingLevel = "h2" }: LegalSectionProps) {
  const HeadingTag = headingLevel;
  const sectionId = legalSectionId(section.eyebrow, section.title);
  const headingId = `${sectionId}-heading`;

  return (
    <section aria-labelledby={headingId}>
      <p className="type-eyebrow m-0">{section.eyebrow}</p>
      <HeadingTag id={headingId} className="type-title mt-4">
        {section.title}
      </HeadingTag>
      <div className="mt-5 flex flex-col gap-4">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${sectionId}-p-${index}`} className="type-body m-0">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
