import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function CtaFinal() {
  return (
    <section id="cta" className="bg-ink py-24 text-paper dark:bg-paper-raised dark:text-ink">
      <div className="container">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Expediente Nº 2026-0002
          </p>
          <h2 className="font-display text-[clamp(26px,4vw,38px)]">Empecemos con tu caso hoy</h2>
          <p className="max-w-[52ch] text-muted">
            Una consulta inicial define la ruta más corta hacia tu regularización. Sin trámites
            genéricos: cada caso, con su propio expediente.
          </p>
          <Button variant="accent" asChild>
            <a href="#">Agendar consulta</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
