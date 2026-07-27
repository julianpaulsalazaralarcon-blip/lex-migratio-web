import { Reveal } from "@/components/site/reveal";
import { iconMap } from "@/components/site/icons";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Áreas de práctica</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            Siete rutas legales, una sola asesoría
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <div className="group relative h-full overflow-clip rounded-card border border-line-soft bg-paper-raised p-6 transition-all hover:-translate-y-1.5 hover:border-seal hover:shadow-xl">
                  <span
                    className="absolute right-0 top-0 h-0 w-0 border-l-0 border-t-0 border-r-[28px] border-b-[28px] border-l-transparent border-t-transparent border-b-transparent border-r-line-soft transition-colors group-hover:border-r-accent"
                    aria-hidden
                  />
                  <Icon className="mb-4 h-8 w-8 text-seal" />
                  <h3 className="mb-2 text-[17px] font-bold">{service.title}</h3>
                  <p className="text-sm text-muted">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
