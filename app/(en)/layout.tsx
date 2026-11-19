import type { Metadata } from "next";
import "../globals.css";
import { copy, site } from "@/lib/content";

const t = copy.en;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: t.meta.title,
  description: t.meta.description,
  alternates: { canonical: "/en", languages: { "zh-CN": "/", en: "/en" } },
  openGraph: { title: t.meta.title, description: t.meta.description, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={t.htmlLang}>
      <body>{children}</body>
    </html>
  );
}
