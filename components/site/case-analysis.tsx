import { Reveal } from "@/components/site/reveal";
import { SearchIcon } from "@/components/site/icons";
import { caseAnalysis } from "@/lib/content";

export function CaseAnalysis() {
  return (
    <section className="border-t border-line-soft py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[64ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            Rigor técnico
          </p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            Nuestro enfoque
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Cada actuación administrativa se estudia mediante un análisis técnico del
            procedimiento — no se atiende como un trámite más. Estos son los criterios
            jurídicos que revisamos en cada expediente.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseAnalysis.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="group h-full rounded-card border border-line-soft bg-paper-raised p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-seal hover:shadow-xl">
                <SearchIcon className="h-6 w-6 text-seal transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mb-1.5 mt-4 text-[15.5px] font-bold leading-snug">{item.title}</h3>
                <p className="text-[13.5px] text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
