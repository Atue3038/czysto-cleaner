import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Czysto Cleaner — Химчистка мебели и матрасов с дезинфекцией | Варшава",
  description:
    "Профессиональная химчистка диванов, матрасов и мягкой мебели в Варшаве. Удаление клещей, пятен и аллергенов. 3-ступенчатая очистка. Сушка за 2–4 часа. Безопасно для детей и животных. Выезд в день обращения.",
  keywords: [
    "химчистка мебели Варшава",
    "химчистка дивана",
    "чистка матраса",
    "удаление клещей из дивана",
    "химчистка мягкой мебели",
    "чистка ковров Варшава",
    "дезинфекция мебели",
    "pranie kanapy Warszawa",
    "pranie dywanów",
    "pranie materaca",
    "czyszczenie tapicerki",
    "odkaźanie kanapy",
    "usuwanie roztoczy",
    "sofa cleaning Warsaw",
    "mattress cleaning Warsaw",
    "upholstery cleaning",
    "furniture cleaning Poland",
    "Kirby cleaning",
    "professional cleaning Warsaw",
  ],
  authors: [{ name: "Czysto Cleaner" }],
  openGraph: {
    title: "Czysto Cleaner — Химчистка мебели с дезинфекцией | Варшава",
    description:
      "Профессиональная химчистка диванов, матрасов и ковров в Варшаве. Удаление клещей до 99%. Сушка 2–4 часа. Безопасно для детей.",
    url: "https://www.czysto-cleaner.pl",
    siteName: "Czysto Cleaner",
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
