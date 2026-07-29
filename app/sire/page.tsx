import type { Metadata } from "next";

import { LandingPage } from "@/components/site/landing/landing-page";
import { landings } from "@/lib/landings";

const content = landings.sire;

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: `/${content.slug}` },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.title,
    description: content.seo.description,
  },
};

export default function SirePage() {
  return <LandingPage content={content} />;
}
