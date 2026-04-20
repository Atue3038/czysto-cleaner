import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/lib/assets";

const SecTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-manrope font-semibold text-[36px] max-md:text-[26px] text-black text-center mb-[72px] max-md:mb-10">
    {children}
  </h2>
);

const SEC = "max-w-[1200px] mx-auto px-[80px] py-[96px] pb-[104px] max-md:px-6 max-md:py-14";

// ── VIDEO ─────────────────────────────────────────────────────────────────────
export function VideoSection() {
  return (
    <section className="bg-[#f9fafb]">
      <div className={SEC}>
        <SecTitle>Видео процесса очистки</SecTitle>
        <div className="w-full h-[588px] max-md:h-[220px] bg-[#d9d9d9] rounded-[30px] max-md:rounded-[20px]"
             style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.25)" }}>
          {/* Замените на: <iframe src="https://www.youtube.com/embed/ID" className="w-full h-full rounded-[30px]" allowFullScreen /> */}
        </div>
      </div>
    </section>
  );
}

// ── PRICES ────────────────────────────────────────────────────────────────────
export function Prices() {
  return (
    <section id="prices" className="bg-white">
      <div className={SEC}>
        <SecTitle>Прайс-лист</SecTitle>
        <div className="flex flex-wrap gap-12 justify-center max-md:flex-col max-md:items-center">

          {/* Диваны */}
          <div className="bg-white border border-[rgba(203,203,203,0.7)] rounded-[25px] px-10 py-12 w-[496px] max-md:w-full flex flex-col gap-6"
               style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.05)" }}>
            <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">Диваны</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">Обычный диван</p>
                <p className="font-inter font-medium text-[12px] text-black/70 tracking-[0.36px] mt-2">+ подушки + сушка</p>
              </div>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">500 zl</p>
            </div>
            <div className="h-px bg-[rgba(203,203,203,0.7)]" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">Угловой диван</p>
                <p className="font-inter font-medium text-[12px] text-black/70 tracking-[0.36px] mt-2">+ подушки + сушка</p>
              </div>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">700 zl</p>
            </div>
          </div>

          {/* Матрасы */}
          <div className="bg-white border border-[rgba(203,203,203,0.7)] rounded-[25px] px-10 py-12 w-[496px] max-md:w-full flex flex-col gap-6"
               style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.05)" }}>
            <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">Матрасы</p>
            <div className="flex items-center justify-between">
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">Односпальный</p>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">150 zl</p>
            </div>
            <div className="h-px bg-[rgba(203,203,203,0.7)]" />
            <div className="flex items-center justify-between">
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">Двуспальный</p>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">300 zl</p>
            </div>
          </div>

        </div>
        <p className="text-center mt-12 font-inter text-[12px] text-black/80 tracking-[0.72px]">
          Дополнительные элементы рассчитываются отдельно
        </p>
      </div>
    </section>
  );
}

// ── PACKAGES ──────────────────────────────────────────────────────────────────
export function Packages() {
  return (
    <section id="packages" className="bg-[#f9fafb]">
      <div className={SEC}>
        <SecTitle>Пакетные предложения</SecTitle>
        <div className="flex flex-wrap gap-8 justify-center mb-14 max-md:flex-col max-md:items-center">

          {/* Пакет 1 */}
          <div className="bg-white border border-[rgba(203,203,203,0.8)] rounded-[25px] px-10 py-12 w-[464px] max-md:w-full flex flex-col gap-8"
               style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.05)" }}>
            <div className="flex flex-col gap-6">
              <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">Пакет 1</p>
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">Диван + 2 кровати + мойка окон</p>
            </div>
            <p className="font-manrope font-semibold text-[32px] text-[#189966] tracking-[0.96px]">1000 zl</p>
          </div>

          {/* Пакет 2 — популярный */}
          <div className="relative rounded-[25px] px-10 py-14 w-[465px] max-md:w-full flex flex-col gap-8"
               style={{ background: "linear-gradient(114.98deg, #00bc82 6.42%, #00b8d4 90.42%)", boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.25)" }}>
            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-[#ffb900] rounded-[200px] px-8 py-3 flex items-center gap-2 whitespace-nowrap"
                 style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)" }}>
              <Image src={ASSETS.badgeStar} alt="★" width={20} height={20} unoptimized />
              <span className="font-inter text-[14px] text-black tracking-[0.42px]">Популярный</span>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-manrope font-bold text-[22px] text-white tracking-[0.66px]">Пакет 2</p>
              <p className="font-inter font-medium text-[16px] text-white tracking-[0.48px]">2 дивана + 3 кровати + ковры + окна</p>
            </div>
            <p className="font-manrope font-semibold text-[32px] text-white tracking-[0.96px]">1500 zl</p>
          </div>

        </div>
        <div className="text-center">
          <Link href="#contacts"
                className="inline-flex items-center justify-center bg-[#00db9a] text-white font-manrope font-semibold text-[25px] px-8 py-[14px] rounded-[20px] hover:bg-[#00c48a] transition-colors"
                style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.15)" }}>
            Забронировать
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── ADDITIONAL ────────────────────────────────────────────────────────────────
export function Additional() {
  return (
    <section className="bg-white">
      <div className={SEC}>
        <SecTitle>Дополнительные услуги</SecTitle>
        <div className="max-w-[961px] mx-auto bg-[#eef9ff] border border-[#abe1ff] rounded-[25px] px-12 pt-12 pb-[37px] flex gap-5 items-start max-md:flex-col max-md:px-6">
          <div className="bg-[#00b8db] rounded-[22.5px] w-[45px] h-[45px] shrink-0 flex items-center justify-center">
            <Image src={ASSETS.addlIcon} alt="" width={29} height={29} unoptimized />
          </div>
          <div className="flex flex-col gap-8 flex-1 pt-2">
            <div className="flex flex-col gap-6">
              <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">Комплексная уборка</p>
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">Чистка 2 ковров + дезинфекция + мойка полов</p>
            </div>
            <p className="font-manrope font-semibold text-[32px] text-[#0092b8] tracking-[0.96px]">500 zl</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── EQUIPMENT ─────────────────────────────────────────────────────────────────
const EQUIP = [
  { icon: ASSETS.equipKirby,   name: "Kirby",             items: ["• удаляет до 99% клещей", "• глубокая чистка"] },
  { icon: ASSETS.equipSabrina, name: "Santoemma Sabrina", items: ["• вымывает грязь изнутри ткани", "• вытягивает влагу"] },
  { icon: ASSETS.equipKarcher, name: "Karcher (пар)",     items: ["• уничтожает бактерии и вирусы", "• очистка без химии"] },
  { icon: ASSETS.equipRaypath, name: "Raypath",           items: ["• гипоаллергенная технология", "• безопасно для детей"] },
];

export function Equipment() {
  return (
    <section id="equipment" className="bg-[#f9fafb]">
      <div className={SEC}>
        <SecTitle>Профессиональное оборудование</SecTitle>
        <div className="flex flex-wrap gap-[14px] justify-center">
          {EQUIP.map((e) => (
            <div key={e.name} className="bg-white rounded-[20px] px-7 pt-8 pb-11 w-[249.5px] max-lg:w-[calc(50%-7px)] max-md:w-full flex flex-col gap-7"
                 style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.10)" }}>
              <div className="bg-[#d0fae5] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center shrink-0">
                <Image src={e.icon} alt="" width={24} height={24} unoptimized />
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-manrope font-bold text-[21px] text-black">{e.name}</p>
                <ul className="flex flex-col gap-5">
                  {e.items.map((li) => (
                    <li key={li} className="font-inter text-[16px] text-black tracking-[0.48px]">{li}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── GUARANTEES ────────────────────────────────────────────────────────────────
const GUAR = [
  { icon: ASSETS.guar1, title: "Страхование ответственности (ОС)", text: "Полная защита вашего имущества" },
  { icon: ASSETS.guar2, title: "Гарантия безопасности имущества",  text: "Работаем аккуратно и профессионально" },
  { icon: ASSETS.guar3, title: "Профессиональное оборудование",    text: "Используем только сертифицированную технику" },
];

export function Guarantees() {
  return (
    <section className="bg-white">
      <div className={SEC}>
        <SecTitle>Наши гарантии</SecTitle>
        <div className="flex gap-[29px] justify-center items-start max-md:flex-col max-md:items-center">
          {GUAR.map((g) => (
            <div key={g.title} className="flex-1 max-w-[327px] flex flex-col gap-7 items-center text-center max-md:max-w-[360px]">
              <div className="bg-[#d0fae5] rounded-[15px] w-[65px] h-[65px] flex items-center justify-center shrink-0">
                <Image src={g.icon} alt="" width={33} height={33} unoptimized />
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-manrope font-semibold text-[21px] text-black leading-snug">{g.title}</p>
                <p className="font-inter text-[18px] text-black/70">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section id="contacts" style={{ background: "linear-gradient(133.99deg, #00bc7f 7.86%, #00b8d8 94.72%)" }}>
      <div className="max-w-[726px] mx-auto px-6 py-[104px] pb-[112px] max-md:py-16 flex flex-col gap-16 items-start">
        <div className="flex flex-col gap-12 items-center w-full">
          <div className="flex flex-col gap-8 items-center">
            <h2 className="font-manrope font-semibold text-[48px] max-md:text-[30px] text-white tracking-[0.96px] leading-tight w-full">
              Закажите чистку уже сегодня
            </h2>
            <p className="font-inter font-medium text-[20px] max-md:text-[16px] text-white/80 text-center">
              Профессиональная химчистка с гарантией качества и безопасности
            </p>
          </div>
          <div className="flex gap-6 items-center flex-wrap justify-center max-sm:flex-col max-sm:w-full">
            {/* Телефон — показывает номер, при клике звонит */}
            <Link href="tel:+48575673474"
                  className="inline-flex items-center gap-3 bg-white text-[#029061] font-manrope font-semibold text-[24px] px-8 py-[14px] rounded-[15px] hover:opacity-90 transition-opacity max-sm:justify-center max-sm:w-full"
                  style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.15)" }}>
              <Image src={ASSETS.ctaCall} alt="" width={24} height={24} unoptimized />
              +48 575 673 474
            </Link>
            {/* WhatsApp — открывает приложение с этим контактом сразу */}
            <Link href="https://wa.me/48575673474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/10 text-white border border-white font-manrope font-semibold text-[24px] px-8 py-[14px] rounded-[15px] hover:bg-white/20 transition-colors max-sm:justify-center max-sm:w-full"
                  style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.15)" }}>
              <Image src={ASSETS.ctaEnvelope} alt="" width={29} height={29} unoptimized />
              WhatsApp
              <Image src={ASSETS.ctaArrow} alt="" width={14} height={4} unoptimized />
            </Link>
          </div>
        </div>
        <p className="font-inter font-medium text-[16px] text-white/80 text-center w-full leading-7">
          Работаем ежедневно с 8:00 до 20:00<br/>
          Выезд мастера в день обращения
        </p>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] px-[80px] py-10 text-center max-md:px-6">
      <p className="font-inter text-[13px] text-white/45 leading-7">
        © 2024 Czysto Cleaner. Профессиональная химчистка мебели и матрасов.<br/>
        Польша · Варшава и окрестности
      </p>
    </footer>
  );
}
