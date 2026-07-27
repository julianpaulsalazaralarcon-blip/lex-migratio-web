import { services, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0 text-seal">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
                <text x="20" y="24" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
                  {siteConfig.monogram}
                </text>
              </svg>
              <span className="font-display text-lg font-semibold tracking-wide">{siteConfig.name}</span>
            </div>
            <p className="max-w-[30ch] text-[13.5px] text-muted">{siteConfig.tagline}</p>
            <p className="mt-1.5 max-w-[30ch] font-display italic text-[13.5px] text-accent">
              {siteConfig.slogan}
            </p>
          </div>
          <div>
            <h4 className="mb-3.5 text-[13px] uppercase tracking-wide text-muted">Servicios</h4>
            {services.slice(0, 3).map((s) => (
              <a key={s.slug} href="#servicios" className="block py-1.5 text-sm hover:text-seal">
                {s.title}
              </a>
            ))}
          </div>
          <div>
            <h4 className="mb-3.5 text-[13px] uppercase tracking-wide text-muted">Recursos</h4>
            <a href="#recursos" className="block py-1.5 text-sm hover:text-seal">Glosario</a>
            <a href="#recursos" className="block py-1.5 text-sm hover:text-seal">Preguntas frecuentes</a>
            <a href="#confianza" className="block py-1.5 text-sm hover:text-seal">Marco legal</a>
          </div>
          <div>
            <h4 className="mb-3.5 text-[13px] uppercase tracking-wide text-muted">Legal</h4>
            <a href="#" className="block py-1.5 text-sm hover:text-seal">Aviso de privacidad</a>
            <a href="#" className="block py-1.5 text-sm hover:text-seal">Términos y condiciones</a>
            <a href="#" className="block py-1.5 text-sm hover:text-seal">Disclaimer</a>
          </div>
          <div>
            <h4 className="mb-3.5 text-[13px] uppercase tracking-wide text-muted">Contacto</h4>
            <p className="py-1.5 text-sm text-muted">{siteConfig.contact.phone}</p>
            <p className="py-1.5 text-sm text-muted">{siteConfig.contact.email}</p>
            <p className="py-1.5 text-sm text-muted">{siteConfig.contact.address}</p>
          </div>
        </div>
        <hr className="my-7 border-line-soft" />
        <div className="flex flex-wrap justify-between gap-3 font-mono text-[12.5px] text-muted">
          <span>© 2026 {siteConfig.name} — {siteConfig.tagline.toUpperCase()}</span>
          <span>BOGOTÁ · MEDELLÍN · BARRANQUILLA</span>
        </div>
      </div>
    </footer>
  );
}
