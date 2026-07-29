import { Button } from "@/components/ui/button";
import { DefenseCaseCard } from "@/components/site/defense-case-card";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-clip pb-10 pt-16">
      {/* Fondo sutil: grid de líneas finas + blur radial discreto — decorativo, no interactivo. */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--line) / 0.4) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--line) / 0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black 40%, transparent 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 z-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(var(--seal))" }}
        aria-hidden
      />

      <div className="container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            {siteConfig.name} · Defensa Migratoria Estratégica
          </p>
          <h1 className="mt-3.5 font-display text-[clamp(32px,4.8vw,50px)] leading-[1.12]">
            ¿Migración Colombia inició una actuación administrativa en su contra?
          </h1>
          <p className="mt-3 font-display text-lg italic text-accent">{siteConfig.slogan}</p>
          <p className="mt-5 max-w-[62ch] text-[17.5px] text-muted">
            Defendemos sus derechos mediante una estrategia jurídica especializada en
            procedimientos administrativos sancionatorios, recursos, control de legalidad y
            derecho migratorio colombiano.
          </p>

          <div className="mt-6 flex gap-3 rounded-card border border-brick/30 bg-brick/[0.07] p-4">
            <span className="text-lg leading-none text-brick" aria-hidden>
              ⚠
            </span>
            <p className="text-[14px] leading-relaxed">
              <span className="font-semibold text-brick">
                Los términos para presentar descargos son limitados.
              </span>{" "}
              <span className="text-muted">
                Una actuación oportuna puede marcar la diferencia entre una sanción y una
                defensa efectiva.
              </span>
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button variant="primary" asChild>
              <a href="#cta">Solicitar defensa jurídica</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#servicios">Recibí una notificación</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <DefenseCaseCard />
        </div>
      </div>
    </section>
  );
}
