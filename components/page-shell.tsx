import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageShellProps = {
  children: React.ReactNode;
  mainLabel?: string;
};

export function PageShell({
  children,
  mainLabel = "Main content",
}: PageShellProps) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main
        id="main"
        aria-label={mainLabel}
        className="linen-surface flex-1 w-full"
      >
        <div className="section-chapter section-chapter-tight pb-24 pt-8">
          <div className="container-site">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
