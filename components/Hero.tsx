"use client";
import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import { IconArrow } from "@/components/Icons";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section className="relative mt-[104px] max-lg:mt-[80px] h-[559px] max-md:min-h-[380px] max-md:h-auto overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Image src={ASSETS.heroBg} alt="" fill className="object-cover" style={{ opacity: 0.6 }} priority unoptimized />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-6 py-16">
        <div className="flex flex-col items-center gap-14 max-w-[835px] text-center">
          <div className="flex flex-col items-center gap-8">
            <h1 className="font-manrope font-semibold text-[48px] max-md:text-[32px] leading-[1.18] text-black">
              {tr.title}
            </h1>
            <p className="font-inter font-medium text-[20px] max-md:text-[16px] text-black/70">
              {tr.subtitle}
            </p>
          </div>
          <Link href="#contacts"
                className="inline-flex items-center gap-2.5 bg-[#00db9a] text-white font-manrope font-semibold text-[20px] px-6 py-3 rounded-[15px] hover:bg-[#00c48a] transition-colors"
                style={{ boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.10)" }}>
            {tr.button}
            <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
