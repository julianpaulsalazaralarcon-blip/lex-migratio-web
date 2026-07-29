import { Reveal } from "@/components/site/reveal";
import { legalFoundations } from "@/lib/content";

export function Authority() {
  return (
    <section className="border-y border-line-soft bg-paper-raised py-16">
      <div className="container">
        <Reveal className="mb-9 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            Nuestra práctica jurídica se fundamenta en
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
            {legalFoundations.map((item) => (
              <div
                key={item.name}
                className="rounded-card border border-line-soft bg-paper px-4 py-6 text-center transition-colors hover:border-seal"
              >
                <span className="font-mono text-[13px] leading-snug tracking-wide text-ink">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
