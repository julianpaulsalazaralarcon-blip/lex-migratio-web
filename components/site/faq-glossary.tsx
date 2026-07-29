import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { faqs, glossary } from "@/lib/content";

export function FaqGlossary() {
  return (
    <section id="recursos" className="border-y border-line-soft bg-paper-raised py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Centro de ayuda</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            Antes de su evaluación jurídica, resuelva lo básico
          </h2>
        </Reveal>

        <Reveal>
          <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-seal">
            Preguntas frecuentes
          </p>
          <Accordion type="single" collapsible className="flex flex-col gap-2.5">
            {faqs.map((faq) => (
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

        <Reveal className="mt-12">
          <p className="mb-3.5 font-mono text-xs uppercase tracking-[0.14em] text-seal">Glosario</p>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {glossary.map((entry) => (
              <div key={entry.term} className="rounded-card border border-line-soft bg-paper p-4">
                <b className="mb-1.5 block font-mono text-[13px] tracking-wide text-seal">{entry.term}</b>
                <span className="text-[13px] text-muted">{entry.definition}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
