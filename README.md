# LEX MIGRATIO — Firma Especializada en Derecho Migratorio Colombiano

_"Rigor jurídico. Soluciones migratorias."_

Sitio web construido con Next.js (App Router), React, TypeScript, Tailwind CSS,
Framer Motion y componentes estilo shadcn/ui.

## Requisitos

- Node.js 18.18 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

```
app/                  Rutas (App Router), layout raíz y estilos globales
components/ui/        Primitivas estilo shadcn/ui (button, accordion, tabs)
components/site/      Componentes de la página (header, hero, servicios, ventanillas, etc.)
lib/content.ts        Todo el contenido jurídico del sitio, tipado
lib/utils.ts          Helper cn() para clases condicionales
```

## Contenido

Todo el contenido jurídico en `lib/content.ts` está redactado a partir de fuentes
normativas verificadas (Decreto 216/2021, Resolución 971/2021, Decreto 1067/2015,
Resolución 5477/2022, Resolución 2061/2020, Sentencia SU-543 de 2023, Constitución
Política). Las páginas legales propias del sitio (privacidad, términos, disclaimer)
son texto operativo pendiente de redacción y no están incluidas.

## Marca

El nombre, eslogan, monograma temporal ("LM") y los datos de contacto viven
centralizados en `siteConfig` (`lib/content.ts`). El logo actual es texto
institucional (monograma + nombre) hasta que se diseñe el logotipo definitivo.
Los datos de `siteConfig.contact` (teléfono, correo, dirección) son
marcadores temporales — reemplázalos ahí y se propagan automáticamente al
footer y a los metadatos SEO (JSON-LD) en `app/layout.tsx`. El dominio en
`SITE_URL` (`app/layout.tsx`) también es un marcador pendiente de reemplazo.

## Formulario de contacto ("Agenda tu consulta")

El formulario en `#cta` (`components/site/contact-form.tsx`) envía las consultas
por correo usando [Resend](https://resend.com) desde `app/api/contact/route.ts`.

**Validación:** nombre, correo, teléfono, tipo de consulta y mensaje se validan
con el mismo esquema Zod (`lib/validations/contact.ts`) en el cliente (feedback
inmediato) y en el servidor (nunca confiar solo en el cliente).

**Anti-spam:** honeypot invisible (`website`) + guard de tiempo (rechaza envíos
a menos de 3s de cargada la página) + límite best-effort de 5 envíos / 10 min
por IP (en memoria — no persiste entre invocaciones frías de serverless; para
tráfico alto real, migrar a Upstash Redis u otro store compartido).

**Variables de entorno** (copiar `.env.example` a `.env.local`):

| Variable | Requerida | Descripción |
|---|---|---|
| `RESEND_API_KEY` | Sí | API key de Resend. Sin ella, el endpoint responde el mensaje de error genérico en vez de fallar de forma insegura. |
| `CONTACT_TO_EMAIL` | No (default `contacto@lexmigratio.com`) | Buzón que recibe las consultas. |
| `CONTACT_FROM_EMAIL` | No (default `LEX MIGRATIO <onboarding@resend.dev>`) | Remitente. Debe pertenecer a un dominio verificado en Resend. |

Nunca se escriben claves directamente en el código — todo pasa por
`process.env`.

## Tema claro/oscuro

El tema se gestiona con `next-themes` (estrategia de clase `.dark` en `<html>`),
siguiendo la preferencia del sistema por defecto.
