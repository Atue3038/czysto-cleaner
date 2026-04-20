"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

const LINKS = [
  { label: "Услуги",       href: "#advantages" },
  { label: "Прайм",        href: "#prices" },
  { label: "Пакеты",       href: "#packages" },
  { label: "Оборудование", href: "#equipment" },
  { label: "Контакты",     href: "#contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[104px] max-lg:h-[80px]"
           style={{ boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.07)" }}>
        <div className="relative max-w-[1200px] mx-auto h-full flex items-center justify-center px-5">
          <Link href="/" className="absolute left-[78px] top-1/2 -translate-y-1/2 max-lg:left-6">
            <Image src={ASSETS.logo} alt="Czysto Cleaner" width={117} height={80}
                   style={{ height: 80, width: "auto" }} priority unoptimized />
          </Link>
          <ul className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="font-manrope font-medium text-[18px] text-black hover:text-[#00db9a] transition-colors whitespace-nowrap">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-1 cursor-pointer">
              <span className="font-manrope font-medium text-[18px] text-black">RU</span>
              <Image src={ASSETS.langArrow} alt="" width={10} height={8} unoptimized />
            </li>
          </ul>
          <Link href="#contacts" className="hidden lg:flex absolute right-[80px] top-1/2 -translate-y-1/2 bg-[#00db9a] text-white font-manrope font-semibold text-[20px] px-6 py-[13px] rounded-[15px] hover:bg-[#00c48a] transition-colors whitespace-nowrap">
            Заказать
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
        <Link href="#contacts" onClick={() => setOpen(false)} className="mt-4 bg-[#00db9a] text-white text-center font-manrope font-semibold text-xl py-3 rounded-[15px]">Заказать</Link>
      </div>
    </>
  );
}
