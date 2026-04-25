"use client";
import { createContext, useContext, useState } from "react";
import type { Lang } from "./translations";

type LangContextType = { lang: Lang; setLang: (l: Lang) => void };

const LanguageContext = createContext<LangContextType>({ lang: "PL", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("PL");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
