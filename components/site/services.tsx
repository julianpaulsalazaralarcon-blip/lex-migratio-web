import { Reveal } from "@/components/site/reveal";
import { iconMap } from "@/components/site/icons";
import { practiceAreas, services, type Service } from "@/lib/content";

const findService = (slug: string): Service => {
  const found = services.find((s) => s.slug === slug);
  if (!found) throw new Error(`Servicio no encontrado: ${slug}`);
  return found;
};

const primaryService = findService(practiceAreas.primarySlug);
const secondaryServices = practiceAreas.secondarySlugs.map(findService);
const complementaryServices = practiceAreas.complementarySlugs.map(findService);

export function Services() {
  const PrimaryIcon = iconMap[primaryService.icon];

  return (
    <section id="servicios" className="py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Áreas de práctica</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            Áreas de práctica, una sola estrategia jurídica
          </h2>
        </Reveal>

        {/* Nivel 1 — especialidad principal. Ocupa el ancho completo del
            contenedor para leerse claramente por encima de cualquier otro
            bloque de la sección. Colores fijos a propósito: esta tarjeta
            debe verse igual (navy oscuro) sin importar el tema del sitio. */}
        <Reveal>
          <div className="group relative overflow-clip rounded-card border border-[#0A4A3B] bg-[#1B2A45] p-8 text-[#F7F2E7] shadow-xl transition-all hover:shadow-2xl md:p-14">
            <span
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(600px circle at 15% 0%, hsl(var(--accent) / .16), transparent 60%)",
              }}
              aria-hidden
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Especialidad principal
            </p>
            <div className="mt-5 flex flex-col gap-7 md:flex-row md:items-start md:gap-12">
              <PrimaryIcon className="h-14 w-14 shrink-0 text-accent" />
              <div>
                <h3 className="text-[28px] font-bold md:text-[34px]">{primaryService.title}</h3>
                <p className="mt-3 max-w-[68ch] text-[16px] text-[#F7F2E7]/80">
                  {primaryService.description}
                </p>
                {primaryService.highlights && (
                  <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {primaryService.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13.5px] text-[#F7F2E7]/80">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {primaryService.path && (
                  <a
                    href={primaryService.path}
                    className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-accent hover:underline"
                  >
                    Conocer más
                    <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Nivel 2 — áreas principales, de igual jerarquía visual entre sí. */}
        <Reveal className="mb-5 mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Áreas principales</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {secondaryServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <div className="group relative flex h-full flex-col overflow-clip rounded-card border border-line-soft bg-paper-raised p-7 transition-all hover:-translate-y-1.5 hover:border-seal hover:shadow-xl">
                  <span
                    className="absolute right-0 top-0 h-0 w-0 border-l-0 border-t-0 border-r-[28px] border-b-[28px] border-l-transparent border-t-transparent border-b-transparent border-r-line-soft transition-colors group-hover:border-r-accent"
                    aria-hidden
                  />
                  <Icon className="mb-4 h-9 w-9 text-seal" />
                  <h3 className="mb-2 text-[19px] font-bold">{service.title}</h3>
                  <p className="text-sm text-muted">{service.description}</p>
                  {service.path && (
                    <a
                      href={service.path}
                      className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-seal hover:underline"
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

        {/* Nivel 3 — servicios complementarios: tamaño y peso visual
            deliberadamente menores frente a los niveles 1 y 2. */}
        <div className="mt-14">
          <Reveal className="mb-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Servicios complementarios</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {complementaryServices.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal key={service.slug} delay={i * 0.05}>
                  <div className="group relative flex h-full flex-col overflow-clip rounded-card border border-line-soft bg-paper p-5 transition-all hover:-translate-y-1 hover:border-seal hover:shadow-lg">
                    <Icon className="mb-3 h-6 w-6 text-seal/80" />
                    {service.note && (
                      <span className="mb-1.5 inline-block w-fit rounded-full border border-line-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted">
                        {service.note}
                      </span>
                    )}
                    <h4 className="mb-1.5 text-[15px] font-bold">{service.title}</h4>
                    <p className="text-[13px] text-muted">{service.description}</p>
                    {service.path && (
                      <a
                        href={service.path}
                        className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-semibold text-seal hover:underline"
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
      </div>
    </section>
  );
}
