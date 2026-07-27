"use client";

import { motion } from "framer-motion";

export function PermitCard() {
  return (
    <motion.div
      className="relative w-[290px] rounded-2xl bg-gradient-to-br from-seal-ink to-seal p-5 text-paper-raised shadow-2xl"
      style={{ aspectRatio: "1.58 / 1" }}
      initial={{ opacity: 0, scale: 1.5, rotate: -13 }}
      animate={{ opacity: 1, scale: 1, rotate: -4 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 1.4, 0.4, 1] }}
      whileHover={{ rotate: -1, y: -4 }}
    >
      <div className="flex items-start justify-between">
        <div className="font-mono text-[10px] leading-tight opacity-85">
          <div>REPÚBLICA DE COLOMBIA</div>
          <div>PERMISO POR PROTECCIÓN TEMPORAL</div>
        </div>
        <svg viewBox="0 0 40 40" className="h-10 w-10 opacity-90">
          <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="0.8" fill="none" />
        </svg>
      </div>
      <div className="mt-6 font-display text-[19px]">MARÍA JOSÉ RENDÓN</div>
      <div className="mt-4 flex gap-5 font-mono text-[11px] opacity-90">
        <div>
          <span className="mb-0.5 block text-[9.5px] tracking-wide opacity-70">PPT Nº</span>
          9004512837
        </div>
        <div>
          <span className="mb-0.5 block text-[9.5px] tracking-wide opacity-70">VIGENCIA</span>
          10 AÑOS
        </div>
        <div>
          <span className="mb-0.5 block text-[9.5px] tracking-wide opacity-70">ESTADO</span>
          VIGENTE
        </div>
      </div>
    </motion.div>
  );
}
