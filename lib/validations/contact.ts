import { z } from "zod";
import { services } from "@/lib/content";

// Reutiliza las áreas de práctica reales del sitio como opciones de "tipo de consulta",
// más una opción abierta para lo que no encaje en ninguna.
export const inquiryTypes = [...services.map((s) => s.title), "Otro"] as unknown as [
  string,
  ...string[],
];

const phoneRegex = /^[0-9+()\s-]{7,20}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Ingresa tu nombre completo.")
    .max(120, "El nombre es demasiado largo."),
  email: z.string().trim().email("Ingresa un correo electrónico válido."),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Ingresa un teléfono válido (solo números, espacios, +, ( ) y -)."),
  inquiryType: z.enum(inquiryTypes, {
    error: "Selecciona el tipo de consulta.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más (mínimo 20 caracteres).")
    .max(2000, "El mensaje es demasiado largo (máximo 2000 caracteres)."),
  // Honeypot: acepta CUALQUIER contenido a propósito. Si viene relleno, la ruta de
  // la API lo trata como spam y responde éxito falso — pero eso debe decidirlo la
  // ruta, no el esquema, o revelaríamos al bot que fue detectado con un error 400.
  website: z.string().optional().default(""),
  // Marca de tiempo de cuándo se renderizó el formulario, usada para detectar envíos
  // demasiado rápidos para ser humanos.
  renderedAt: z.coerce.number(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Estado inicial "en blanco" del formulario. inquiryType empieza vacío a propósito
// (no en `inquiryTypes`) para obligar a una elección explícita; el esquema lo rechaza
// con un mensaje claro si se envía sin seleccionar.
export const contactFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
  website: "",
};
