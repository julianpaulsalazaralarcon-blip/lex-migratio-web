const BAR_HEIGHT = 38;

export function TopUtilityBar() {
  return (
    <div
      className="sticky top-0 z-[60] hidden items-center justify-between bg-ink px-6 text-paper md:flex"
      style={{ height: BAR_HEIGHT }}
    >
      <p className="font-mono text-[11.5px] tracking-wide text-paper/75">
        ¿Recibió una notificación de Migración Colombia? Actúe dentro del término legal.
      </p>
      <div className="flex items-center gap-4 font-mono text-[11.5px]">
        <a href="#" className="text-paper/75 transition-colors hover:text-paper">
          WhatsApp
        </a>
        <a
          href="#cta"
          className="rounded-sm bg-brick px-3 py-1 font-semibold uppercase tracking-wide text-paper transition-colors hover:brightness-110"
        >
          Defensa urgente
        </a>
      </div>
    </div>
  );
}

export const TOP_UTILITY_BAR_HEIGHT = BAR_HEIGHT;
