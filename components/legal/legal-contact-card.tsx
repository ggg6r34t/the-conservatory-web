type LegalContactCardProps = {
  title?: string;
  description?: string;
  email: string;
  emailLabel?: string;
  mailtoSubject?: string;
};

export function LegalContactCard({
  title = "Contact",
  description,
  email,
  emailLabel,
  mailtoSubject,
}: LegalContactCardProps) {
  const mailtoHref = mailtoSubject
    ? `mailto:${email}?subject=${encodeURIComponent(mailtoSubject)}`
    : `mailto:${email}`;

  return (
    <aside
      className="legal-contact-card rounded-[var(--radius-panel)] bg-surface-container-high p-6 md:p-10"
      aria-label={title}
    >
      <h2 className="type-title m-0">{title}</h2>
      {description ? (
        <p className="type-body mt-4 m-0">{description}</p>
      ) : null}
      <p className="type-body mt-4 m-0">
        {emailLabel ? (
          <span className="font-bold text-on-surface">{emailLabel}: </span>
        ) : null}
        <a
          href={mailtoHref}
          className="font-bold text-primary no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {email}
        </a>
      </p>
    </aside>
  );
}
