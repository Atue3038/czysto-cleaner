"use client";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function PromoBanner() {
  const { lang } = useLang();
  const tr = t[lang].promo;

  return (
    <section className="bg-white pt-0 pb-20 px-10 max-md:px-6">
      <div className="max-w-[1040px] mx-auto rounded-[25px] px-16 py-10 flex items-center gap-5 max-md:flex-col max-md:text-center max-md:gap-3 max-md:px-8"
           style={{
             background: "linear-gradient(90deg, #ffb900 0%, #ff9500 100%)",
             boxShadow: "0px 4px 20px 0px rgba(255, 149, 0, 0.3)",
           }}>
        <div className="text-[48px] max-md:text-[40px] leading-none">🎁</div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="font-manrope font-bold text-[26px] max-md:text-[22px] text-white leading-tight">
            {tr.gift}
          </p>
          <p className="font-inter font-medium text-[16px] text-white/95">
            {tr.condition}
          </p>
        </div>
      </div>
    </section>
  );
}
