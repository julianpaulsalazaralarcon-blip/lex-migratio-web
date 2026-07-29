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
            Siete frentes de defensa, una sola estrategia
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];

            if (service.featured) {
              return (
                <Reveal key={service.slug} delay={i * 0.05} className="sm:col-span-2">
                  {/* Colores fijos a propósito: esta tarjeta debe leerse igual
                      (navy oscuro) sin importar el tema claro/oscuro del sitio. */}
                  <div className="group relative h-full overflow-clip rounded-card border border-[#0A4A3B] bg-[#1B2A45] p-8 text-[#F7F2E7] shadow-xl transition-all hover:-translate-y-1.5 hover:shadow-2xl md:p-10">
                    <span
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(480px circle at 15% 0%, hsl(var(--accent) / .16), transparent 60%)",
                      }}
                      aria-hidden
                    />
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                      Servicio prioritario
                    </p>
                    <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                      <Icon className="h-11 w-11 shrink-0 text-accent" />
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="mt-2.5 max-w-[60ch] text-[15px] text-[#F7F2E7]/80">
                          {service.description}
                        </p>
                        {service.highlights && (
                          <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {service.highlights.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-[13.5px] text-[#F7F2E7]/80">
                                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {service.path && (
                          <a
                            href={service.path}
                            className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent hover:underline"
                          >
                            Conocer más
                            <span aria-hidden>→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <div className="group relative flex h-full flex-col overflow-clip rounded-card border border-line-soft bg-paper-raised p-6 transition-all hover:-translate-y-1.5 hover:border-seal hover:shadow-xl">
                  <span
                    className="absolute right-0 top-0 h-0 w-0 border-l-0 border-t-0 border-r-[28px] border-b-[28px] border-l-transparent border-t-transparent border-b-transparent border-r-line-soft transition-colors group-hover:border-r-accent"
                    aria-hidden
                  />
                  <Icon className="mb-4 h-8 w-8 text-seal" />
                  <h3 className="mb-2 text-[17px] font-bold">{service.title}</h3>
                  <p className="text-sm text-muted">{service.description}</p>
                  {service.path && (
                    <a
                      href={service.path}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-seal hover:underline"
                    >
                      Conocer más
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
