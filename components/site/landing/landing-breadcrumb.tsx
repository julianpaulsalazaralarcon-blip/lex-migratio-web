export function LandingBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label="breadcrumb" className="border-b border-line-soft py-3.5">
      <div className="container flex items-center gap-2 font-mono text-[12px] text-muted">
        <a href="/" className="hover:text-seal">
          Inicio
        </a>
        <span aria-hidden>/</span>
        <a href="/#servicios" className="hover:text-seal">
          Servicios
        </a>
        <span aria-hidden>/</span>
        <span className="text-ink">{title}</span>
      </div>
    </nav>
  );
}
