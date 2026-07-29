import { z } from "zod";

// Motivo principal de la consulta — clasificación pensada para facilitar el triage
// de correos entrantes, no un espejo literal de los títulos de servicios.
export const inquiryTypes = [
  "Defensa en proceso administrativo sancionatorio",
  "Visa colombiana",
  "Permiso de ingreso o permanencia",
  "Cumplimiento empresarial (SIRE)",
  "Salida de menores del país",
  "Regularización migratoria",
  "Protección internacional",
  "Otro",
] as unknown as [string, ...string[]];

// Etapa del caso — opcional; ayuda a priorizar la respuesta antes del primer contacto.
export const caseStages = [
  "Solo necesito orientación jurídica",
  "Recibí una actuación administrativa",
  "Ya presenté descargos",
  "Recibí una resolución sancionatoria",
  "Deseo presentar recursos",
  "Otro",
] as unknown as [string, ...string[]];

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
    error: "Selecciona el motivo de tu consulta.",
  }),
  // Opcional: acepta cualquier texto para no bloquear el envío si el valor no calza
  // exactamente con las opciones (por ejemplo, un default legado desde una landing).
  caseStage: z.string().optional().default(""),
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
// con un mensaje claro si se envía sin seleccionar. caseStage sí puede quedar vacío.
export const contactFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  caseStage: "",
  message: "",
  website: "",
};
