import { legalEffectiveDateIso, legalEffectiveDateLabel } from "@/lib/legal-utils";

type LegalUpdatedDateProps = {
  className?: string;
};

export function LegalUpdatedDate({ className = "" }: LegalUpdatedDateProps) {
  return (
    <p className={`type-small m-0 ${className}`}>
      Effective{" "}
      <time dateTime={legalEffectiveDateIso()}>{legalEffectiveDateLabel()}</time>
    </p>
  );
}
