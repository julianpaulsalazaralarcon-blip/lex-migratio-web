import { Reveal } from "@/components/site/reveal";
import { caseTimeline, type TimelineStep } from "@/lib/content";

type ProcessTimelineProps = {
  items?: TimelineStep[];
  eyebrow?: string;
  title?: string;
  id?: string;
};

export function ProcessTimeline({
  items = caseTimeline,
  eyebrow = "Metodología",
  title = "¿Cómo trabajamos su caso?",
  id,
}: ProcessTimelineProps) {
  return (
    <section id={id} className="border-y border-line-soft bg-paper-raised py-24">
      <div className="container">
        <Reveal className="mb-14 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">{eyebrow}</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">{title}</h2>
        </Reveal>

        <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-0">
          {/* Línea vertical (móvil/tablet) */}
          <div
            className="absolute left-[15px] top-2 h-[calc(100%-16px)] w-px bg-line lg:hidden"
            aria-hidden
          />
          {/* Línea horizontal (desktop) */}
          <div className="absolute inset-x-0 top-[15px] hidden h-px bg-line lg:block" aria-hidden />

          {items.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 0.06}
              className="relative flex flex-1 gap-4 pl-11 lg:flex-col lg:items-center lg:gap-3 lg:pl-0 lg:pr-4 lg:text-center"
            >
              <span className="absolute left-0 top-0 z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-seal font-mono text-[12px] font-bold text-paper-raised lg:static">
                {i + 1}
              </span>
              <div className="pb-8 lg:pb-0">
                <h3 className="text-[14.5px] font-bold">{item.step}</h3>
                <p className="mt-1 text-[12.5px] text-muted lg:max-w-[16ch]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
