import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
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
      <SiteHeader />
      <main>
        <Hero />
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
