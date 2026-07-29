import { Reveal } from "@/components/site/reveal";

type ProblemSectionProps = {
  title: string;
  paragraphs: string[];
};

export function ProblemSection({ title, paragraphs }: ProblemSectionProps) {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal className="max-w-[68ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">El problema</p>
          <h2 className="mt-3 font-display text-[clamp(24px,3vw,32px)]">{title}</h2>
          <div className="mt-5 flex flex-col gap-4 text-[16px] text-muted">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
