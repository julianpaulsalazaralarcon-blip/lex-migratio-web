import { Button } from "@/components/ui/button";
import { DefenseCaseCard } from "@/components/site/defense-case-card";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="overflow-clip pb-10 pt-16">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            {siteConfig.name} · Defensa Migratoria Estratégica
          </p>
          <h1 className="mt-3.5 font-display text-[clamp(34px,5.4vw,54px)] leading-[1.08]">
            Su defensa frente a Migración Colombia, construida con estrategia jurídica.
          </h1>
          <p className="mt-3 font-display text-lg italic text-accent">{siteConfig.slogan}</p>
          <p className="mt-5 max-w-[62ch] text-[17.5px] text-muted">
            Representación en procesos administrativos sancionatorios, cumplimiento empresarial
            ante el SIRE y visas de ingreso para extranjeros — con fundamento normativo
            verificable en cada actuación. También asesoramos regularización venezolana como
            parte de nuestra práctica.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button variant="primary" asChild>
              <a href="#cta">Agenda tu consulta</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#servicios">¿Recibió una notificación de cargos?</a>
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
