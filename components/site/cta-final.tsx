import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";

type CtaFinalProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  defaultInquiryType?: string;
};

export function CtaFinal({
  eyebrow = "Expediente Nº 2026-0002",
  heading = "Reciba una evaluación jurídica preliminar en 24 horas",
  description = "Cuéntenos su situación — proceso sancionatorio, cumplimiento SIRE, visa o regularización. Sin trámites genéricos: cada caso, con su propio expediente.",
  defaultInquiryType,
}: CtaFinalProps) {
  return (
    <section id="cta" className="bg-ink py-24 text-paper dark:bg-paper-raised dark:text-ink">
      <div className="container flex flex-col items-center">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
          <h2 className="font-display text-[clamp(26px,4vw,38px)]">{heading}</h2>
          <p className="max-w-[52ch] text-muted">{description}</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex w-full justify-center">
          <ContactForm defaultInquiryType={defaultInquiryType} />
        </Reveal>
      </div>
    </section>
  );
}
