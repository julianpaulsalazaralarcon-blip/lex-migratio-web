import { Button } from "@/components/ui/button";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-line-soft bg-paper-raised p-3 shadow-[0_-8px_24px_-16px_rgba(0,0,0,0.4)] md:hidden">
      <Button variant="ghost" className="flex-1 justify-center" asChild>
        <a href="#">WhatsApp</a>
      </Button>
      <Button variant="primary" className="flex-1 justify-center" asChild>
        <a href="#cta">Agendar consulta</a>
      </Button>
    </div>
  );
}
