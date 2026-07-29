import { Reveal } from "@/components/site/reveal";
import { institutions } from "@/lib/content";

export function Authority() {
  return (
    <section className="border-y border-line-soft bg-paper-raised py-10">
      <div className="container">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[26ch] font-mono text-[11.5px] uppercase leading-relaxed tracking-[0.1em] text-muted">
            Cada estrategia se construye sobre el marco regulado por
          </p>
          <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {institutions.map((inst) => (
              <div key={inst.name} className="border-l-2 border-seal pl-3.5">
                <div className="text-[14px] font-semibold leading-tight">{inst.name}</div>
                <div className="mt-0.5 text-[12px] text-muted">{inst.role}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
