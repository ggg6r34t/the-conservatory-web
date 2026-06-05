import { CinematicHeader } from "@/components/marketing/cinematic-header";
import { HeroFilm } from "@/components/marketing/hero-film";
import { JourneyRail } from "@/components/marketing/journey-rail";
import { ChapterBegin } from "@/components/marketing/chapter-begin";
import { ChapterGrowth } from "@/components/marketing/chapter-growth";
import { ChapterArchive } from "@/components/marketing/chapter-archive";
import { ChapterGraveyard } from "@/components/marketing/chapter-graveyard";
import { ChapterPremium } from "@/components/marketing/chapter-premium";
import { ChapterShowcase } from "@/components/marketing/chapter-showcase";
import { ChapterDownload } from "@/components/marketing/chapter-download";
import { SiteFooter } from "@/components/site-footer";

export function HomeExperience() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <CinematicHeader />
      <main id="main" aria-label="The Conservatory story">
        <HeroFilm />
        <JourneyRail />
        <ChapterBegin />
        <ChapterGrowth />
        <ChapterArchive />
        <ChapterGraveyard />
        <ChapterPremium />
        <ChapterShowcase />
        <ChapterDownload />
      </main>
      <SiteFooter />
    </>
  );
}
