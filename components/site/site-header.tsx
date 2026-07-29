"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-paper/90 backdrop-blur-md md:top-[38px]">
      <div className="container flex items-center justify-between py-3.5">
        <a href="/" className="flex shrink-0 items-center gap-2.5">
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

        <nav className="hidden items-center gap-0.5 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded px-3 py-2.5 text-sm hover:text-seal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button variant="primary" size="sm" asChild>
            <a href="#cta">Solicitar evaluación jurídica</a>
          </Button>
        </div>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="rounded border border-line p-2 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col gap-1 bg-paper p-6"
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
              <a href="#cta" onClick={() => setOpen(false)}>Solicitar evaluación jurídica</a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
