import type { Metadata } from "next";
import { Lora, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/content";
import "./globals.css";

// TODO: reemplazar por el dominio real cuando esté disponible.
const SITE_URL = "https://www.lexmigratio.co";

const display = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const TITLE = `${siteConfig.name} — Defensa Migratoria y Procesos Sancionatorios en Colombia`;
const DESCRIPTION =
  `${siteConfig.name}: firma especializada en defensa migratoria en Colombia. ` +
  "Representación en procesos administrativos sancionatorios adelantados por Migración " +
  "Colombia, recursos contra sanciones migratorias, visas colombianas, cumplimiento " +
  "empresarial SIRE y permisos de ingreso y permanencia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${siteConfig.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "LEX MIGRATIO",
    "defensa migratoria Colombia",
    "proceso administrativo sancionatorio Migración Colombia",
    "abogado migratorio Colombia",
    "recurso contra sanción migratoria",
    "deportación Colombia defensa",
    "expulsión Colombia defensa",
    "visa colombiana",
    "SIRE Migración Colombia",
    "permisos migratorios Colombia",
    "derecho migratorio Colombia",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteConfig.name,
  alternateName: siteConfig.fullName,
  slogan: siteConfig.slogan,
  description: DESCRIPTION,
  areaServed: "CO",
  url: SITE_URL,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressCountry: "CO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
