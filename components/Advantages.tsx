import Image from "next/image";
import { ASSETS } from "@/lib/assets";

const CARDS = [
  { icon: ASSETS.adv1, iconW: 40, iconH: 40, title: "3-х ступенчатая очистка",      text: "Удаляем грязь и клещей из самых глубоких слоёв ткани." },
  { icon: ASSETS.adv2, iconW: 30, iconH: 30, title: "Дезинфекция от клещей",         text: "Удаление до 99% клещей и аллергенов" },
  { icon: ASSETS.adv3, iconW: 30, iconH: 30, title: "Сушка за 2-4 часа",             text: "Быстрый результат без долгого ожидания" },
  { icon: ASSETS.adv4, iconW: 30, iconH: 30, title: "Безопасно для детей и животных", text: "Экологичные средства без вреда для здоровья" },
  { icon: ASSETS.adv5, iconW: 30, iconH: 30, title: "Удаление до 99% загрязнений",   text: "Глубокая очистка на профессиональном уровне" },
  { icon: ASSETS.adv6, iconW: 30, iconH: 30, title: "Без агрессивной химии",         text: "Только безопасные и проверенные средства" },
];

export default function Advantages() {
  return (
    <section id="advantages" className="bg-[#f9fafb]">
      <div className="max-w-[1200px] mx-auto px-[80px] py-[96px] pb-[104px] max-md:px-6 max-md:py-14">
        <h2 className="font-manrope font-semibold text-[36px] max-md:text-[26px] text-black text-center mb-[72px] max-md:mb-10">
          Наши преимущества
        </h2>
        <div className="flex flex-wrap gap-[21px] max-lg:gap-4">
          {CARDS.map((c) => (
            <div key={c.title}
                 className="bg-white rounded-[20px] pt-9 pr-10 pb-12 pl-8 w-[333px] max-lg:w-[calc(50%-8px)] max-md:w-full"
                 style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.10)" }}>
              <div className="bg-[#d0fae5] rounded-[10px] w-[65px] h-[65px] flex items-center justify-center mb-5 shrink-0">
                <Image src={c.icon} alt="" width={c.iconW} height={c.iconH} unoptimized />
              </div>
              <p className="font-manrope font-bold text-[20px] text-black/80 tracking-[0.6px] mb-4 leading-snug">{c.title}</p>
              <p className="font-inter font-medium text-[16px] text-black/80 tracking-[0.48px] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
