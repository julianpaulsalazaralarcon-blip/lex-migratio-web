"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { services, siteConfig } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-paper/90 backdrop-blur-md">
      <div className="container flex items-center justify-between py-3.5">
        <a href="#top" className="flex shrink-0 items-center gap-2.5">
          <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0 text-seal" aria-hidden="true" focusable="false">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="20" cy="20" r="12.5" stroke="currentColor" strokeWidth="1" fill="none" />
            <text x="20" y="24" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="currentColor">
              {siteConfig.monogram}
            </text>
          </svg>
          <span className="whitespace-nowrap font-display text-lg font-semibold tracking-wide">
            {siteConfig.name}
          </span>
          <span className="hidden whitespace-nowrap font-mono text-[11px] tracking-wide text-muted xl:inline">
            {siteConfig.slogan}
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          <div className="group relative">
            <button className="whitespace-nowrap rounded px-3 py-2.5 text-sm hover:text-seal">Servicios</button>
            <div className="invisible absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 translate-y-1.5 grid-cols-2 gap-1 rounded-md border border-line-soft bg-paper-raised p-4 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href="#servicios"
                  className="rounded px-2 py-2 text-[13.5px] hover:bg-line-soft"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
          {siteConfig.nav.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded px-3 py-2.5 text-sm hover:text-seal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <a href="#cta">Agenda tu consulta</a>
          </Button>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="rounded border border-line p-2 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col gap-1 bg-paper p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <div className="mb-3 flex justify-end">
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line-soft py-4 text-lg"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" className="mt-4 justify-center" asChild>
              <a href="#cta" onClick={() => setOpen(false)}>Agenda tu consulta</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
