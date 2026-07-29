"use client";

import { motion } from "framer-motion";

export function DefenseCaseCard() {
  return (
    <motion.div
      // Colores fijos a propósito: esta tarjeta representa un documento oficial
      // y debe leerse igual (navy oscuro) sin importar el tema claro/oscuro del sitio.
      className="relative w-[300px] rounded-2xl bg-gradient-to-br from-[#1B2A45] to-[#0A4A3B] p-5 text-[#F7F2E7] shadow-2xl"
      style={{ aspectRatio: "1.58 / 1" }}
      initial={{ opacity: 0, scale: 1.5, rotate: 10 }}
      animate={{ opacity: 1, scale: 1, rotate: 3 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 1.4, 0.4, 1] }}
      whileHover={{ rotate: 0.5, y: -4 }}
    >
      <div className="flex items-start justify-between">
        <div className="font-mono text-[10px] leading-tight opacity-85">
          <div>REPÚBLICA DE COLOMBIA</div>
          <div>ACTO ADMINISTRATIVO SANCIONATORIO</div>
        </div>
        <motion.div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent text-accent"
          initial={{ rotate: -18, scale: 0.6, opacity: 0 }}
          animate={{ rotate: -12, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
        >
          <span className="text-center font-mono text-[7.5px] font-bold leading-[1.05]">
            EN
            <br />
            DEFENSA
          </span>
        </motion.div>
      </div>

      <div className="mt-6 font-display text-[18px]">Notificación de cargos</div>

      <div className="mt-4 flex gap-5 font-mono text-[11px] opacity-90">
        <div>
          <span className="mb-0.5 block text-[9.5px] tracking-wide opacity-70">ETAPA</span>
          DESCARGOS
        </div>
        <div>
          <span className="mb-0.5 block text-[9.5px] tracking-wide opacity-70">TÉRMINO</span>
          15 DÍAS
        </div>
        <div>
          <span className="mb-0.5 block text-[9.5px] tracking-wide opacity-70">ESTADO</span>
          EN TRÁMITE
        </div>
      </div>
    </motion.div>
  );
}
