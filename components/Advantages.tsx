"use client";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import { IconClean, IconShield, IconClock, IconHeart, IconStar, IconLeaf } from "@/components/Icons";

const ICONS = [IconClean, IconShield, IconClock, IconHeart, IconStar, IconLeaf];

export default function Advantages() {
  const { lang } = useLang();
  const tr = t[lang].advantages;

  return (
    <section id="advantages" className="bg-[#f9fafb]">
      <div className="max-w-[1200px] mx-auto px-[80px] py-[96px] pb-[104px] max-md:px-6 max-md:py-14">
        <h2 className="font-manrope font-semibold text-[36px] max-md:text-[26px] text-black text-center mb-[72px] max-md:mb-10">
          {tr.title}
        </h2>
        <div className="grid gap-[21px] max-md:gap-4"
             style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {tr.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i}
                   className="bg-white rounded-[20px] pt-9 pr-10 pb-12 pl-8 transition-shadow duration-200"
                   style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.10)" }}
                   onMouseEnter={e => (e.currentTarget.style.boxShadow = "0px 6px 20px 0px rgba(0,0,0,0.18)")}
                   onMouseLeave={e => (e.currentTarget.style.boxShadow = "0px 2px 8px 0px rgba(0,0,0,0.10)")}>
                <div className="bg-[#d0fae5] rounded-[10px] w-[65px] h-[65px] flex items-center justify-center mb-5">
                  <Icon />
                </div>
                <p className="font-manrope font-bold text-[20px] text-black/80 tracking-[0.6px] mb-4 leading-snug">{c.title}</p>
                <p className="font-inter font-medium text-[16px] text-black/80 tracking-[0.48px] leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: c.text }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
