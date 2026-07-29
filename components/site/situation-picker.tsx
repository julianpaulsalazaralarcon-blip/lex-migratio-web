import { Reveal } from "@/components/site/reveal";
import { iconMap } from "@/components/site/icons";
import { situations } from "@/lib/content";

export function SituationPicker() {
  return (
    <section className="border-t border-line-soft py-20">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Orientación inicial</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">¿Cuál es su situación?</h2>
          <p className="mt-3 text-[15px] text-muted">
            Seleccione la opción que mejor describa su caso. Lo orientaremos hacia el servicio jurídico más
            adecuado.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="group flex h-full flex-col rounded-card border border-line-soft bg-paper-raised p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-seal hover:shadow-xl">
                  <Icon className="h-8 w-8 text-seal transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2 mt-4 text-[16px] font-bold leading-snug">{item.title}</h3>
                  <p className="text-[13.5px] text-muted">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-seal hover:underline"
                  >
                    {item.ctaLabel}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
