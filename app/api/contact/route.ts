import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations/contact";

// Un envío humano nunca completa un formulario en menos de esto.
const MIN_FILL_SECONDS = 3;

// Límite best-effort por IP. En serverless (Vercel) esta memoria no persiste entre
// invocaciones frías, así que esto no reemplaza un limitador real (p. ej. Upstash
// Redis) para tráfico alto — pero sí frena ráfagas repetidas en una misma instancia.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

const GENERIC_ERROR = "Ocurrió un error. Intente nuevamente.";

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Demasiados intentos. Intenta de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: GENERIC_ERROR }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Revisa los campos del formulario.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { name, email, phone, inquiryType, caseStage, message, website, renderedAt } = parsed.data;

  // Honeypot: un bot que rellena este campo oculto recibe un "éxito" falso,
  // sin que se envíe ningún correo, para no revelar que fue detectado.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Guard de tiempo: envíos más rápidos que lo humanamente posible se descartan
  // silenciosamente, con la misma respuesta de éxito.
  const elapsedSeconds = (Date.now() - renderedAt) / 1000;
  if (!Number.isFinite(elapsedSeconds) || elapsedSeconds < MIN_FILL_SECONDS) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "[contact] RESEND_API_KEY no está configurada. Define la variable de entorno para poder enviar correos."
    );
    return NextResponse.json({ ok: false, message: GENERIC_ERROR }, { status: 500 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "contacto@lexmigratio.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "LEX MIGRATIO <onboarding@resend.dev>";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Nueva consulta — ${inquiryType} — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Teléfono: ${phone}`,
        `Motivo de la consulta: ${inquiryType}`,
        `Etapa del caso: ${caseStage || "No especificada"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend devolvió un error:", error);
      return NextResponse.json({ ok: false, message: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Falló el envío del correo:", err);
    return NextResponse.json({ ok: false, message: GENERIC_ERROR }, { status: 500 });
  }
}
