"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import type { Lang } from "@/lib/translations";

const LANGUAGES: Lang[] = ["RU", "PL", "ENG"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLang();
  const tr = t[lang].nav;
  const langRef = useRef<HTMLDivElement>(null);

  const LINKS = [
    { label: tr.services,  href: "#included" },
    { label: tr.prices,    href: "#prices" },
    { label: tr.packages,  href: "#packages" },
    { label: tr.equipment, href: "#equipment" },
    { label: tr.contacts,  href: "#contacts" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[104px] max-lg:h-[80px]"
           style={{ boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.07)" }}>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center px-5">

          <Link href="/" className="absolute left-[78px] top-1/2 -translate-y-1/2 max-lg:left-6">
            <Image src={ASSETS.logo} alt="Czysto Cleaner" width={170} height={110}
                   style={{ height: 100, width: "auto" }} priority unoptimized />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="font-manrope font-medium text-[18px] text-black hover:text-[#00db9a] transition-colors whitespace-nowrap">
                  {l.label}
                </Link>
              </li>
            ))}
            <li ref={langRef} className="relative">
              <button onClick={() => setLangOpen(v => !v)} className="flex items-center gap-1.5 cursor-pointer">
                <span className="font-manrope font-medium text-[18px] text-black hover:text-[#00db9a] transition-colors">{lang}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L5 5L9 1" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {langOpen && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-[12px] shadow-[0px_4px_16px_rgba(0,0,0,0.12)] overflow-hidden min-w-[80px] z-50">
                  {LANGUAGES.filter(l => l !== lang).map((language) => (
                    <button key={language} onClick={() => { setLang(language); setLangOpen(false); }}
                            className="w-full px-4 py-2.5 text-left font-manrope font-medium text-[16px] text-black hover:bg-[#f0fdf8] hover:text-[#00db9a] transition-colors">
                      {language}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <Link href="#contacts" className="hidden lg:flex absolute right-[80px] top-1/2 -translate-y-1/2 bg-[#00db9a] text-white font-manrope font-semibold text-[20px] px-6 py-[13px] rounded-[15px] hover:bg-[#00c48a] transition-colors whitespace-nowrap">
            {tr.order}
          </Link>

          <button className="lg:hidden absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-[5px] p-1" onClick={() => setOpen(v => !v)} aria-label="Меню">
            <span className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-black rounded transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-white z-40 flex-col p-6 overflow-y-auto ${open ? "flex" : "hidden"}`}>
        {LINKS.map((l) => (
          <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-manrope font-semibold text-xl text-black py-4 border-b border-gray-100">{l.label}</Link>
        ))}
        <div className="flex gap-4 py-4 border-b border-gray-100">
          {LANGUAGES.map((language) => (
            <button key={language} onClick={() => setLang(language)}
                    className={`font-manrope font-semibold text-lg transition-colors ${lang === language ? "text-[#00db9a]" : "text-black"}`}>
              {language}
            </button>
          ))}
        </div>
        <Link href="#contacts" onClick={() => setOpen(false)} className="mt-4 bg-[#00db9a] text-white text-center font-manrope font-semibold text-xl py-3 rounded-[15px]">{tr.order}</Link>
      </div>
    </>
  );
}
