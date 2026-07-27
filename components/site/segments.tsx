"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/site/reveal";
import { segments } from "@/lib/content";

export function Segments() {
  return (
    <section id="ventanillas" className="border-y border-line-soft bg-paper-raised py-24">
      <div className="container">
        <Reveal className="mb-11 max-w-[62ch]">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-seal">Orientación por perfil</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.4vw,36px)]">
            Ventanilla de atención — ¿cuál es la tuya?
          </h2>
        </Reveal>

        <Tabs defaultValue={segments[0].slug}>
          <Reveal>
            <TabsList className="mb-7">
              {segments.map((segment) => (
                <TabsTrigger key={segment.slug} value={segment.slug}>
                  {segment.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          {segments.map((segment) => (
            <TabsContent key={segment.slug} value={segment.slug}>
              <h3 className="mb-2.5 text-xl font-bold">{segment.title}</h3>
              <p className="mb-4 text-[15px] text-muted">{segment.description}</p>
              <div className="flex flex-wrap gap-2">
                {segment.tags.map((tag) => (
                  <span key={tag} className="rounded bg-line-soft px-2.5 py-1.5 font-mono text-[11.5px]">
                    {tag}
                  </span>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
