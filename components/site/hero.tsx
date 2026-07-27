import { Button } from "@/components/ui/button";
import { PermitCard } from "@/components/site/permit-card";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="overflow-clip pb-10 pt-16">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">
            {siteConfig.name} · Derecho Migratorio Colombiano
          </p>
          <h1 className="mt-3.5 font-display text-[clamp(34px,5.4vw,54px)] leading-[1.08]">
            Tu estatus migratorio, en regla y por escrito.
          </h1>
          <p className="mt-3 font-display text-lg italic text-accent">{siteConfig.slogan}</p>
          <p className="mt-5 max-w-[62ch] text-[17.5px] text-muted">
            Regularización, visas, defensa administrativa y protección internacional — asesoría
            jurídica con fundamento normativo verificable en cada trámite, desde el ETPV hasta la
            reunificación familiar.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button variant="primary" asChild>
              <a href="#cta">Agenda tu consulta</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#ventanillas">¿Qué trámite necesito?</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center py-5">
          <PermitCard />
        </div>
      </div>
    </section>
  );
}
