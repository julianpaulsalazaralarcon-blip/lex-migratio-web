import { Reveal } from "@/components/site/reveal";

type RisksSectionProps = {
  title: string;
  items: string[];
};

export function RisksSection({ title, items }: RisksSectionProps) {
  return (
    <section className="border-y border-line-soft bg-paper-raised py-20">
      <div className="container">
        <Reveal className="mb-8 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-brick">
            Riesgos jurídicos
          </p>
          <h2 className="mt-3 font-display text-[clamp(24px,3vw,32px)]">{title}</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <div className="flex items-start gap-3 rounded-card border border-brick/25 bg-brick/[0.05] p-4">
                <span className="mt-0.5 text-brick" aria-hidden>
                  ⚠
                </span>
                <p className="text-[14px] text-ink">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
