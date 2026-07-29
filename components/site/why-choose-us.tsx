import { Reveal } from "@/components/site/reveal";
import { ShieldCheckIcon } from "@/components/site/icons";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="border-t border-line-soft py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Enfoque</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            ¿Por qué elegir LEX MIGRATIO?
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="group h-full rounded-card border border-line-soft bg-paper-raised p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-seal hover:shadow-xl">
                <ShieldCheckIcon className="h-7 w-7 text-seal transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mb-1.5 mt-4 text-[16px] font-bold leading-snug">{item.title}</h3>
                <p className="text-[13.5px] text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
