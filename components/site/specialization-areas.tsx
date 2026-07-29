import { Reveal } from "@/components/site/reveal";
import { iconMap } from "@/components/site/icons";
import { specializationAreas } from "@/lib/content";

export function SpecializationAreas() {
  return (
    <section className="border-t border-line-soft py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Especialización</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            Áreas de Especialización
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Nuestra práctica profesional se concentra en áreas específicas del derecho migratorio
            colombiano y del derecho administrativo sancionador.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specializationAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <Reveal key={area.title} delay={i * 0.05}>
                <div className="group h-full rounded-card border border-line-soft bg-paper-raised p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-seal hover:shadow-xl">
                  <Icon className="h-7 w-7 text-seal transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-1.5 mt-4 text-[16px] font-bold leading-snug">{area.title}</h3>
                  <p className="text-[13.5px] text-muted">{area.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
