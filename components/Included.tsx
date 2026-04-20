import Link from "next/link";
import Image from "next/image";
import { IconCheck } from "@/components/Icons";

const ITEMS = [
  "3-х этапная глубокая очистка",
  "Удаление грязи, пыли и клещей",
  "Паровая дезинфекция",
  "Выведение пятен",
  "Профессиональная сушка",
];

export default function Included() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-[80px] py-[96px] pb-[104px] max-md:px-6 max-md:py-14">
        <h2 className="font-manrope font-semibold text-[36px] max-md:text-[26px] text-black text-center mb-[72px] max-md:mb-10">
          Что входит в услугу
        </h2>
        <div className="flex gap-12 items-center max-md:flex-col">
          <div className="shrink-0 w-[402px] h-[402px] rounded-[25px] overflow-hidden max-md:w-full max-md:h-[260px]"
               style={{ boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.10)" }}>
            <Image src="/images/included-photo.jpg" alt="Процесс чистки" width={402} height={402}
                   className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-10 w-[377px] max-md:w-full">
            <ul className="flex flex-col gap-6">
              {ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="shrink-0"><IconCheck /></div>
                  <span className="font-inter font-medium text-[20px] max-md:text-[17px] text-black tracking-[0.6px]">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contacts"
                  className="flex items-center justify-center bg-[#00db9a] text-white font-inter font-semibold text-[22px] h-[60px] rounded-[15px] hover:bg-[#00c48a] transition-colors"
                  style={{ boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.15)" }}>
              Забронировать чистку
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}