import { Hero } from "@/components/site/hero";
import { Authority } from "@/components/site/authority";
import { Services } from "@/components/site/services";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { CaseAnalysis } from "@/components/site/case-analysis";
import { Segments } from "@/components/site/segments";
import { LegalLedger } from "@/components/site/legal-ledger";
import { FaqGlossary } from "@/components/site/faq-glossary";
import { CtaFinal } from "@/components/site/cta-final";

export default function Home() {
  return (
    <>
      <Hero />
      <Authority />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline />
      <CaseAnalysis />
      <Segments />
      <LegalLedger />
      <FaqGlossary />
      <CtaFinal />
    </>
  );
}
