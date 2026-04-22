"use client";
import React, { useState, useRef } from "react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const EQUIPMENT = [
  {
    video: "/Kirby.mp4",
    poster: "/kirby-poster.jpg",
    titleKey: "Система глубокой очистки Kirby",
    titlePL: "System głębokiego czyszczenia Kirby",
    titleENG: "Kirby Deep Cleaning System",
    points: {
      RU: [
        "Удаляет пыль, грязь и до 99% пылевых клещей",
        "Вытягивает загрязнения из самых глубоких слоёв ткани",
        "Идеально подходит для аллергиков и семей с детьми",
      ],
      PL: [
        "Usuwa kurz, brud i do 99% roztoczy",
        "Wyciąga zabrudzenia z najgłębszych warstw tkaniny",
        "Idealny dla alergików i rodzin z dziećmi",
      ],
      ENG: [
        "Removes dust, dirt and up to 99% of dust mites",
        "Extracts dirt from the deepest layers of fabric",
        "Perfect for allergy sufferers and families with children",
      ],
    },
    subtitle: {
      RU: "Мощный американский аппарат для глубокой сухой и влажной чистки",
      PL: "Potężny amerykański aparat do głębokiego czyszczenia na sucho i na mokro",
      ENG: "Powerful American machine for deep dry and wet cleaning",
    },
  },
  {
    video: "/SantoemmaSabrina.mp4",
    poster: "/sabrina-poster.jpg",
    titleKey: "Экстракторная чистка — Santoemma Sabrina",
    titlePL: "Czyszczenie ekstraktorowe — Santoemma Sabrina",
    titleENG: "Extractor Cleaning — Santoemma Sabrina",
    points: {
      RU: [
        "Под давлением подаёт чистящий раствор",
        "Вымывает грязь и пятна изнутри ткани",
        "Одновременно вытягивает всю влагу обратно",
      ],
      PL: [
        "Podaje roztwór czyszczący pod ciśnieniem",
        "Wypłukuje brud i plamy z wnętrza tkaniny",
        "Jednocześnie wyciąga całą wilgoć z powrotem",
      ],
      ENG: [
        "Delivers cleaning solution under pressure",
        "Washes dirt and stains from inside the fabric",
        "Simultaneously extracts all moisture back",
      ],
    },
    subtitle: {
      RU: "Профессиональный моющий аппарат — результат: максимально чистая и свежая мебель",
      PL: "Profesjonalna myjka — efekt: maksymalnie czyste i świeże meble",
      ENG: "Professional washing machine — result: maximally clean and fresh furniture",
    },
  },
  {
    video: "/Karcher.mp4",
    poster: "/karcher-poster.jpg",
    titleKey: "Паровая дезинфекция — Karcher",
    titlePL: "Dezynfekcja parowa — Karcher",
    titleENG: "Steam Disinfection — Karcher",
    points: {
      RU: [
        "Уничтожает бактерии, вирусы и клещей",
        "Удаляет запахи",
        "Очищает без химии — экологично и безопасно",
      ],
      PL: [
        "Niszczy bakterie, wirusy i roztocza",
        "Usuwa nieprzyjemne zapachy",
        "Czyści bez chemii — ekologicznie i bezpiecznie",
      ],
      ENG: [
        "Destroys bacteria, viruses and mites",
        "Eliminates odors",
        "Cleans without chemicals — eco-friendly and safe",
      ],
    },
    subtitle: {
      RU: "Высокотемпературный пар",
      PL: "Para w wysokiej temperaturze",
      ENG: "High-temperature steam",
    },
  },
];

function VideoBlock({ src, poster }: { src: string; poster: string }) {
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    ref.current?.play();
    setPlaying(true);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <>
      <div className="relative w-full rounded-[20px] overflow-hidden bg-black shrink-0"
           style={{ aspectRatio: "1/1", boxShadow: "0px 4px 20px rgba(0,0,0,0.18)" }}>
        <video
          ref={ref}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          playsInline
          preload="none"
          controls={playing}
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 cursor-pointer"
               onClick={handlePlay}>
            <div className="w-[64px] h-[64px] bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                 style={{ boxShadow: "0px 4px 16px rgba(0,0,0,0.25)" }}>
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" style={{ transform: "translateX(2px)" }}>
                <path d="M2 2L20 13L2 24V2Z" fill="#00db9a" stroke="#00db9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        )}
        {playing && (
          <button
            onClick={toggleFullscreen}
            className="absolute top-3 right-3 w-[40px] h-[40px] bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
            style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.3)" }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 3H8M3 3V8M3 3L8 8M17 3H12M17 3V8M17 3L12 8M3 17H8M3 17V12M3 17L8 12M17 17H12M17 17V12M17 17L12 12" 
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      
      {/* Fullscreen modal */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
             onClick={toggleFullscreen}>
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 w-[48px] h-[48px] bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            style={{ boxShadow: "0px 4px 16px rgba(0,0,0,0.5)" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <video
            src={src}
            poster={poster}
            className="max-w-full max-h-full"
            playsInline
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function DescBlock({ item, lang, index }: { item: typeof EQUIPMENT[0]; lang: "RU" | "PL" | "ENG"; index: number }) {
  const title = index === 0 ? item.titleKey : index === 1 ? item.titleKey : item.titleKey;
  const titleMap = { RU: item.titleKey, PL: item.titlePL, ENG: item.titleENG };
  const subtitle = item.subtitle[lang];
  const points = item.points[lang];

  return (
    <div className="flex flex-col gap-6 justify-center">
      <h3 className="font-manrope font-bold text-[24px] text-black leading-snug">
        {titleMap[lang]}
      </h3>
      <p className="font-inter text-[15px] text-black/60 italic">{subtitle}</p>
      <ul className="flex flex-col gap-6">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="shrink-0 w-[22px] h-[22px] rounded-full bg-[#d0fae5] flex items-center justify-center mt-0.5">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="#005E3F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-inter font-medium text-[16px] text-black/80 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EquipmentShowcase() {
  const { lang } = useLang();
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const handleDotClick = (i: number) => {
    setActive(i);
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({ left: i * el.offsetWidth, behavior: "smooth" });
    }
    // Сброс автоплея при ручном взаимодействии
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    startAutoplay();
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setActive(idx);
    }
  };

  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % EQUIPMENT.length;
        const el = scrollRef.current;
        if (el) {
          el.scrollTo({ left: next * el.offsetWidth, behavior: "smooth" });
        }
        return next;
      });
    }, 5000); // 5 секунд
  };

  // Автоплей на мобильных
  React.useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      startAutoplay();
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const titles: Record<string, string> = {
    RU: "Как работает наше оборудование",
    PL: "Jak działa nasz sprzęt",
    ENG: "How our equipment works",
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-[80px] py-[96px] pb-[104px] max-md:px-6 max-md:py-14">
        <h2 className="font-manrope font-semibold text-[36px] max-md:text-[26px] text-black text-center mb-[72px] max-md:mb-10">
          {titles[lang]}
        </h2>

        {/* DESKTOP — чередование */}
        <div className="hidden md:flex flex-col gap-16">
          {EQUIPMENT.map((item, i) => (
            <div key={i} className={`flex gap-12 items-center ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <VideoBlock src={item.video} poster={item.poster} />
              </div>
              <div className="flex-1">
                <DescBlock item={item} lang={lang as "RU" | "PL" | "ENG"} index={i} />
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE — свайп */}
        <div className="md:hidden flex flex-col gap-4">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {EQUIPMENT.map((item, i) => {
              const titleMap = { RU: item.titleKey, PL: item.titlePL, ENG: item.titleENG };
              const subtitle = item.subtitle[lang as "RU" | "PL" | "ENG"];
              const points = item.points[lang as "RU" | "PL" | "ENG"];
              return (
              <div key={i} className="min-w-full snap-center flex flex-col gap-5 px-1">
                {/* Заголовок сверху */}
                <h3 className="font-manrope font-bold text-[22px] text-black leading-snug">
                  {titleMap[lang as "RU" | "PL" | "ENG"]}
                </h3>
                {/* Видео */}
                <VideoBlock src={item.video} poster={item.poster} />
                {/* Подзаголовок и текст */}
                <p className="font-inter text-[14px] text-black/60 italic">{subtitle}</p>
                <ul className="flex flex-col gap-4">
                  {points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="shrink-0 w-[22px] h-[22px] rounded-full bg-[#d0fae5] flex items-center justify-center mt-0.5">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#005E3F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-inter font-medium text-[15px] text-black/80 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>

          {/* Точки-навигация */}
          <div className="flex justify-center gap-2 mt-2">
            {EQUIPMENT.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className="transition-all duration-300"
                style={{
                  width: active === i ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: active === i ? "#00db9a" : "#d0fae5",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
