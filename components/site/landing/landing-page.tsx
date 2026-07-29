import { LandingBreadcrumb } from "@/components/site/landing/landing-breadcrumb";
import { LandingHero } from "@/components/site/landing/landing-hero";
import { ProblemSection } from "@/components/site/landing/problem-section";
import { RisksSection } from "@/components/site/landing/risks-section";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { LandingFaq } from "@/components/site/landing/landing-faq";
import { ApplicableCases } from "@/components/site/landing/applicable-cases";
import { CtaFinal } from "@/components/site/cta-final";
import type { LandingContent } from "@/lib/landings";

export function LandingPage({ content }: { content: LandingContent }) {
  return (
    <>
      <LandingBreadcrumb title={content.breadcrumbTitle} />
      <LandingHero icon={content.icon} {...content.hero} />
      <ProblemSection {...content.problem} />
      <RisksSection {...content.risks} />
      <ProcessTimeline id="procedimiento" title={content.procedure.title} items={content.procedure.steps} />
      <LandingFaq {...content.faq} />
      <ApplicableCases {...content.applicableCases} />
      <CtaFinal {...content.cta} defaultInquiryType={content.serviceTitle} />
    </>
  );
}
