"use client";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import { IconArrow } from "@/components/Icons";
import { useEffect, useRef } from "react";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative mt-[104px] max-lg:mt-[80px] h-[559px] max-md:min-h-[420px] max-md:h-auto overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image src={ASSETS.heroBg} alt="" fill className="object-cover object-bottom" priority unoptimized />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-6 py-16 max-md:py-14">
        <div ref={contentRef} className="fade-up flex flex-col items-center gap-10 max-md:gap-8 max-w-[835px] text-center">
          <div className="flex flex-col items-center gap-5 max-md:gap-4">
            <h1 className="font-manrope font-semibold text-[48px] max-md:text-[30px] leading-[1.18] text-black"
                style={{ filter: "drop-shadow(0 0 16px rgba(255, 255, 255, 0.55))" }}>
              {tr.title}
            </h1>
            <p className="font-inter font-medium text-[20px] max-md:text-[15px] text-black/70 max-md:max-w-[300px]"
               style={{ filter: "drop-shadow(0 0 16px rgba(255, 255, 255, 0.55))" }}>
              {tr.subtitle}
            </p>
          </div>
          <Link href="#contacts"
                className="inline-flex items-center gap-2.5 bg-[#00db9a] text-white font-manrope font-semibold text-[20px] max-md:text-[17px] px-6 py-3 max-md:px-5 max-md:py-3 rounded-[15px] hover:bg-[#00c48a] transition-colors"
                style={{ boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.55)" }}>
            {tr.button}
            <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
