"use client";

import { useRef, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  contactFormDefaultValues,
  contactFormSchema,
  inquiryTypes,
} from "@/lib/validations/contact";

type FieldName = keyof typeof contactFormDefaultValues;
type FieldErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const SUCCESS_MESSAGE = "Su consulta fue enviada correctamente.";
const ERROR_MESSAGE = "Ocurrió un error. Intente nuevamente.";

const fieldClass =
  "w-full rounded-card border border-[#CFC3A6] bg-[#FBF8F1] px-4 py-3 text-[15px] text-[#1B2A45] " +
  "placeholder:text-[#5B6478] transition-colors focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:outline-[#0E5C4A] disabled:opacity-60";

const labelClass = "font-mono text-xs uppercase tracking-[0.08em] text-[#5B6478]";

export function ContactForm({ defaultInquiryType }: { defaultInquiryType?: string } = {}) {
  const [values, setValues] = useState(() =>
    defaultInquiryType
      ? { ...contactFormDefaultValues, inquiryType: defaultInquiryType }
      : contactFormDefaultValues
  );
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const renderedAtRef = useRef(Date.now());

  function updateField(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") return;

    const parsed = contactFormSchema.safeParse({
      ...values,
      renderedAt: renderedAtRef.current,
    });

    if (!parsed.success) {
      const flattened = parsed.error.flatten().fieldErrors;
      setFieldErrors({
        name: flattened.name?.[0],
        email: flattened.email?.[0],
        phone: flattened.phone?.[0],
        inquiryType: flattened.inquiryType?.[0],
        message: flattened.message?.[0],
      });
      setStatus("error");
      setStatusMessage("Revisa los campos marcados antes de enviar.");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setStatusMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; message?: string; fieldErrors?: Record<string, string[]> }
        | null;

      if (res.ok && data?.ok) {
        setStatus("success");
        setStatusMessage(SUCCESS_MESSAGE);
        setValues(contactFormDefaultValues);
        renderedAtRef.current = Date.now();
        return;
      }

      if (data?.fieldErrors) {
        setFieldErrors({
          name: data.fieldErrors.name?.[0],
          email: data.fieldErrors.email?.[0],
          phone: data.fieldErrors.phone?.[0],
          inquiryType: data.fieldErrors.inquiryType?.[0],
          message: data.fieldErrors.message?.[0],
        });
      }
      setStatus("error");
      setStatusMessage(data?.message || ERROR_MESSAGE);
    } catch {
      setStatus("error");
      setStatusMessage(ERROR_MESSAGE);
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="w-full max-w-xl rounded-card border border-[#CFC3A6] bg-[#F7F2E7] p-6 text-left shadow-2xl sm:p-8">
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Honeypot — invisible para personas, visible para bots que rellenan todo. */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
        >
          <label>
            No completar este campo
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => updateField("website", e.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className={labelClass}>
            Nombre completo
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "cf-name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="cf-name-error" className="text-[13px] text-brick">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-email" className={labelClass}>
              Correo electrónico
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "cf-email-error" : undefined}
            />
            {fieldErrors.email && (
              <p id="cf-email-error" className="text-[13px] text-brick">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-phone" className={labelClass}>
              Teléfono
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className={fieldClass}
              value={values.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? "cf-phone-error" : undefined}
            />
            {fieldErrors.phone && (
              <p id="cf-phone-error" className="text-[13px] text-brick">
                {fieldErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-inquiry" className={labelClass}>
            Tipo de consulta
          </label>
          <select
            id="cf-inquiry"
            name="inquiryType"
            required
            className={fieldClass}
            value={values.inquiryType}
            onChange={(e) => updateField("inquiryType", e.target.value)}
            aria-invalid={Boolean(fieldErrors.inquiryType)}
            aria-describedby={fieldErrors.inquiryType ? "cf-inquiry-error" : undefined}
          >
            <option value="" disabled>
              Selecciona un tipo de consulta
            </option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {fieldErrors.inquiryType && (
            <p id="cf-inquiry-error" className="text-[13px] text-brick">
              {fieldErrors.inquiryType}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-message" className={labelClass}>
            Mensaje
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            className={`${fieldClass} resize-y`}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "cf-message-error" : undefined}
          />
          {fieldErrors.message && (
            <p id="cf-message-error" className="text-[13px] text-brick">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {statusMessage && (
          <p
            role="status"
            aria-live="polite"
            className={
              status === "success"
                ? "rounded-card border border-seal bg-seal/10 px-4 py-3 text-sm font-medium text-seal-ink"
                : "rounded-card border border-brick bg-brick/10 px-4 py-3 text-sm font-medium text-brick"
            }
          >
            {statusMessage}
          </p>
        )}

        <Button type="submit" variant="accent" disabled={isSubmitting} className="justify-center">
          {isSubmitting ? "Enviando..." : "Enviar consulta"}
        </Button>

        <p className="text-center text-[12px] text-[#5B6478]">
          Tus datos se usan únicamente para responder tu consulta. No compartimos tu
          información con terceros.
        </p>
      </form>
    </div>
  );
}
