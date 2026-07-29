import { TopUtilityBar } from "@/components/site/top-utility-bar";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Authority } from "@/components/site/authority";
import { Services } from "@/components/site/services";
import { Segments } from "@/components/site/segments";
import { LegalLedger } from "@/components/site/legal-ledger";
import { FaqGlossary } from "@/components/site/faq-glossary";
import { CtaFinal } from "@/components/site/cta-final";
import { SiteFooter } from "@/components/site/site-footer";
import { StickyMobileCta } from "@/components/site/sticky-mobile-cta";

export default function Home() {
  return (
    <div className="pb-[74px] md:pb-0">
      <TopUtilityBar />
      <SiteHeader />
      <main>
        <Hero />
        <Authority />
        <Services />
        <Segments />
        <LegalLedger />
        <FaqGlossary />
        <CtaFinal />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </div>
  );
}
