"use client";
import { createContext, useContext, useState } from "react";
import type { Lang } from "./translations";

type LangContextType = { lang: Lang; setLang: (l: Lang) => void };

const LanguageContext = createContext<LangContextType>({ lang: "RU", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("RU");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
