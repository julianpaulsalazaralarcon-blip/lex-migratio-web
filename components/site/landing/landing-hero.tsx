import { Button } from "@/components/ui/button";
import { iconMap } from "@/components/site/icons";
import { siteConfig, type Service } from "@/lib/content";

type LandingHeroProps = {
  icon: Service["icon"];
  eyebrow: string;
  title: string;
  subtitle: string;
  badgeLabel: string;
  primaryCta: string;
  secondaryCta: string;
};

export function LandingHero({
  icon,
  eyebrow,
  title,
  subtitle,
  badgeLabel,
  primaryCta,
  secondaryCta,
}: LandingHeroProps) {
  const Icon = iconMap[icon];

  return (
    <section className="relative overflow-clip pb-10 pt-16">
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
            {siteConfig.name} · {eyebrow}
          </p>
          <h1 className="mt-3.5 font-display text-[clamp(30px,4.4vw,46px)] leading-[1.14]">
            {title}
          </h1>
          <p className="mt-5 max-w-[62ch] text-[17.5px] text-muted">{subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <Button variant="primary" asChild>
              <a href="#cta">{primaryCta}</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#procedimiento">{secondaryCta}</a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center py-5">
          {/* Colores fijos a propósito: misma tarjeta "siempre oscura" que el resto del sitio. */}
          <div className="flex w-[280px] flex-col items-center gap-4 rounded-2xl border border-[#0A4A3B] bg-[#1B2A45] p-8 text-center text-[#F7F2E7] shadow-2xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent">
              <Icon className="h-7 w-7 text-accent" />
            </div>
            <p className="font-display text-lg font-semibold">{siteConfig.name}</p>
            <p className="font-mono text-[11.5px] tracking-wide text-[#F7F2E7]/70">
              {badgeLabel}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
