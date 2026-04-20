import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  title: "Czysto Cleaner — Химчистка мебели с дезинфекцией",
  description:
    "Профессиональная химчистка мебели и матрасов. Удаляем клещей. Сушка за 2–4 часа. Безопасно для детей.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
