import { Hero } from "@/components/site/hero";
import { SituationPicker } from "@/components/site/situation-picker";
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
      <SituationPicker />
      <Authority />
      <Services />
      <WhyChooseUs />
      <ProcessTimeline subtitle="Cada asunto requiere un análisis jurídico individual. Nuestro acompañamiento se desarrolla mediante una metodología estructurada que prioriza la seguridad jurídica, la estrategia y la protección de los derechos del cliente." />
      <CaseAnalysis />
      <Segments />
      <LegalLedger />
      <FaqGlossary />
      <CtaFinal />
    </>
  );
}
