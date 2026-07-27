import { Reveal } from "@/components/site/reveal";
import { legalFramework } from "@/lib/content";

export function LegalLedger() {
  return (
    <section id="confianza" className="py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Fundamento normativo</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            Cada recomendación, con su cita legal
          </h2>
        </Reveal>
        <Reveal>
          <div className="divide-y divide-line-soft border-y border-line">
            {legalFramework.map((ref) => (
              <div key={ref.code} className="flex flex-wrap items-baseline gap-5 py-4">
                <span className="min-w-[220px] font-mono text-[13px] tabular-nums text-seal">
                  {ref.code}
                </span>
                <span className="flex-1 text-[14.5px] text-muted">{ref.description}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
