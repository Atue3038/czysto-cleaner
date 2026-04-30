import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Czysto Cleaner — Głębokie czyszczenie i sprzątanie | Warszawa",
  description:
    "Profesjonalne czyszczenie kanap, materaców i mebli tapicerowanych w Warszawie. Usuwanie roztoczy, plam i alergenów. Czyszczenie 3-etapowe. Suszenie w 2–4 godziny. Bezpieczne dla dzieci i zwierząt.",
  keywords: [
    "pranie kanapy Warszawa",
    "pranie dywanów",
    "pranie materaca",
    "czyszczenie tapicerki",
    "odkaźanie kanapy",
    "usuwanie roztoczy",
    "sofa cleaning Warsaw",
    "mattress cleaning Warsaw",
    "Kirby cleaning",
    "химчистка мебели Варшава",
  ],
  authors: [{ name: "Czysto Cleaner" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Czysto Cleaner — Głębokie czyszczenie i sprzątanie | Warszawa",
    description:
      "Profesjonalne czyszczenie kanap, materaców i mebli w Warszawie. Usuwanie roztoczy do 99%. Suszenie 2–4h. Bezpieczne dla dzieci.",
    url: "https://www.czysto-cleaner.pl",
    siteName: "Czysto Cleaner",
    images: [{ url: "/favicon-512.png", width: 512, height: 512 }],
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
