import { Reveal } from "@/components/site/reveal";

type ApplicableCasesProps = {
  title: string;
  items: string[];
};

export function ApplicableCases({ title, items }: ApplicableCasesProps) {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal className="mb-8 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            ¿Cuándo aplica?
          </p>
          <h2 className="mt-3 font-display text-[clamp(24px,3vw,32px)]">{title}</h2>
        </Reveal>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 0.04}>
              <li className="flex items-start gap-2.5 border-l-2 border-seal pl-3.5 text-[14.5px] text-ink">
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
