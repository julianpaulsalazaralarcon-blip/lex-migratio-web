import { Reveal } from "@/components/site/reveal";
import { SearchIcon } from "@/components/site/icons";
import { caseAnalysis } from "@/lib/content";

export function CaseAnalysis() {
  return (
    <section className="py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[64ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            Rigor técnico
          </p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            ¿Qué analizamos en cada caso?
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Criterios propios de la revisión de legalidad de un acto administrativo
            sancionatorio migratorio.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {caseAnalysis.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="flex items-start gap-3 border-l-2 border-line pl-4 transition-colors hover:border-seal">
                <SearchIcon className="mt-0.5 h-4 w-4 shrink-0 text-seal" />
                <div>
                  <h3 className="text-[14.5px] font-bold">{item.title}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
