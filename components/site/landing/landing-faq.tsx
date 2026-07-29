import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import type { FaqItem } from "@/lib/content";

type LandingFaqProps = {
  title: string;
  items: FaqItem[];
};

export function LandingFaq({ title, items }: LandingFaqProps) {
  return (
    <section className="border-y border-line-soft bg-paper-raised py-20">
      <div className="container">
        <Reveal className="mb-8 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-display text-[clamp(24px,3vw,32px)]">{title}</h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="flex flex-col gap-2.5">
            {items.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                  <p className="mt-2 font-mono text-[11.5px] text-seal">{faq.citation}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
