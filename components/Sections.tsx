"use client";
import React from "react";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";
import {
  IconStar2, IconBroom, IconPhone, IconEnvelope, IconArrow,
  IconFlash, IconDrop, IconWind, IconShield2,
  IconShieldBig, IconTickCircle, IconSettings
} from "@/components/Icons";

const EQUIP_ICONS = [IconFlash, IconDrop, IconWind, IconShield2];

const SecTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-manrope font-semibold text-[36px] max-md:text-[26px] text-black text-center mb-[72px] max-md:mb-10">
    {children}
  </h2>
);

const SEC = "max-w-[1200px] mx-auto px-[80px] py-[96px] pb-[104px] max-md:px-6 max-md:py-14";

export function VideoSection() {
  const { lang } = useLang();
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="bg-[#f9fafb]">
      <div className={SEC}>
        <SecTitle>{t[lang].video.title}</SecTitle>
        <div className="flex justify-center">
          <div className="relative w-[400px] max-md:w-full max-md:max-w-[320px] aspect-[9/16] rounded-[30px] max-md:rounded-[20px] overflow-hidden bg-black"
               style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.25)" }}>
            <video
              ref={videoRef}
              src="/cleaning-video.mp4"
              className="w-full h-full object-contain"
              playsInline
              controls={playing}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                   onClick={handlePlay}>
                <div className="w-[80px] h-[80px] bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                     style={{ boxShadow: "0px 4px 20px rgba(0,0,0,0.25)" }}>
                  <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
                    <path d="M2 2L26 16L2 30V2Z" fill="#00db9a" stroke="#00db9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Prices() {
  const { lang } = useLang();
  const tr = t[lang].prices;
  return (
    <section id="prices" className="bg-white">
      <div className={SEC}>
        <SecTitle>{tr.title}</SecTitle>
        <div className="flex flex-wrap gap-12 justify-center max-md:flex-col max-md:items-center">
          <div className="bg-white border border-[rgba(203,203,203,0.7)] rounded-[25px] px-10 py-12 w-[496px] max-md:w-full flex flex-col gap-6"
               style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.05)" }}>
            <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">{tr.sofas}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">{tr.regular}</p>
                <p className="font-inter font-medium text-[12px] text-black/70 tracking-[0.36px] mt-2">{tr.regularSub}</p>
              </div>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">500 zl</p>
            </div>
            <div className="h-px bg-[rgba(203,203,203,0.7)]" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">{tr.corner}</p>
                <p className="font-inter font-medium text-[12px] text-black/70 tracking-[0.36px] mt-2">{tr.cornerSub}</p>
              </div>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">700 zl</p>
            </div>
          </div>
          <div className="bg-white border border-[rgba(203,203,203,0.7)] rounded-[25px] px-10 py-12 w-[496px] max-md:w-full flex flex-col gap-6"
               style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.05)" }}>
            <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">{tr.mattresses}</p>
            <div className="flex items-center justify-between">
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">{tr.single}</p>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">150 zl</p>
            </div>
            <div className="h-px bg-[rgba(203,203,203,0.7)]" />
            <div className="flex items-center justify-between">
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">{tr.double}</p>
              <p className="font-manrope font-medium text-[24px] text-[#189966] tracking-[0.72px]">300 zl</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-12 font-inter text-[12px] text-black/80 tracking-[0.72px]">{tr.note}</p>
      </div>
    </section>
  );
}

export function Packages() {
  const { lang } = useLang();
  const tr = t[lang].packages;
  return (
    <section id="packages" className="bg-[#f9fafb]">
      <div className={SEC}>
        <SecTitle>{tr.title}</SecTitle>
        <div className="flex flex-wrap gap-8 justify-center mb-14 max-md:flex-col max-md:items-center">
          <div className="bg-white border border-[rgba(203,203,203,0.8)] rounded-[25px] px-10 py-12 w-[464px] max-md:w-full flex flex-col gap-8"
               style={{ boxShadow: "0px 0px 16px 0px rgba(0,0,0,0.05)" }}>
            <div className="flex flex-col gap-6">
              <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">{tr.pack1title}</p>
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">{tr.pack1desc}</p>
            </div>
            <p className="font-manrope font-semibold text-[32px] text-[#189966] tracking-[0.96px]">1000 zl</p>
          </div>
          <div className="relative rounded-[25px] px-10 py-14 w-[465px] max-md:w-full flex flex-col gap-8"
               style={{ background: "linear-gradient(114.98deg, #00bc82 6.42%, #00b8d4 90.42%)", boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.25)" }}>
            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-[#ffb900] rounded-[200px] px-8 py-3 flex items-center gap-2 whitespace-nowrap"
                 style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)" }}>
              <IconStar2 />
              <span className="font-inter text-[14px] text-black tracking-[0.42px]">{tr.popular}</span>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-manrope font-bold text-[22px] text-white tracking-[0.66px]">{tr.pack2title}</p>
              <p className="font-inter font-medium text-[16px] text-white tracking-[0.48px]">{tr.pack2desc}</p>
            </div>
            <p className="font-manrope font-semibold text-[32px] text-white tracking-[0.96px]">1500 zl</p>
          </div>
        </div>
        <div className="text-center">
          <Link href="#contacts"
                className="inline-flex items-center justify-center bg-[#00db9a] text-white font-manrope font-semibold text-[25px] px-8 py-[14px] rounded-[20px] hover:bg-[#00c48a] transition-colors"
                style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.15)" }}>
            {tr.button}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Additional() {
  const { lang } = useLang();
  const tr = t[lang].additional;
  return (
    <section className="bg-white">
      <div className={SEC}>
        <SecTitle>{tr.title}</SecTitle>
        <div className="max-w-[961px] mx-auto bg-[#eef9ff] border border-[#abe1ff] rounded-[25px] px-12 pt-12 pb-[37px] flex gap-5 items-start max-md:flex-col max-md:px-6">
          <div className="bg-[#00b8db] rounded-[22.5px] w-[45px] h-[45px] shrink-0 flex items-center justify-center">
            <IconBroom />
          </div>
          <div className="flex flex-col gap-8 flex-1 pt-2">
            <div className="flex flex-col gap-6">
              <p className="font-manrope font-bold text-[22px] text-black tracking-[0.66px]">{tr.name}</p>
              <p className="font-inter font-medium text-[16px] text-black tracking-[0.48px]">{tr.desc}</p>
            </div>
            <p className="font-manrope font-semibold text-[32px] text-[#0092b8] tracking-[0.96px]">500 zl</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Equipment() {
  const { lang } = useLang();
  const tr = t[lang].equipment;
  return (
    <section id="equipment" className="bg-[#f9fafb]">
      <div className={SEC}>
        <SecTitle>{tr.title}</SecTitle>
        <div className="flex flex-wrap gap-[14px] justify-center">
          {tr.items.map((e, i) => {
            const Icon = EQUIP_ICONS[i];
            return (
              <div key={i}
                   className="bg-white rounded-[20px] px-7 pt-8 pb-11 w-[249.5px] max-lg:w-[calc(50%-7px)] max-md:w-full flex flex-col gap-7 transition-shadow duration-200"
                   style={{ boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.10)" }}
                   onMouseEnter={e2 => (e2.currentTarget.style.boxShadow = "0px 6px 20px 0px rgba(0,0,0,0.18)")}
                   onMouseLeave={e2 => (e2.currentTarget.style.boxShadow = "0px 2px 8px 0px rgba(0,0,0,0.10)")}>
                <div className="bg-[#d0fae5] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center shrink-0">
                  <Icon />
                </div>
                <div className="flex flex-col gap-6">
                  <p className="font-manrope font-bold text-[21px] text-black">{e.name}</p>
                  <ul className="flex flex-col gap-5">
                    {e.items.map((li, j) => (
                      <li key={j} className="font-inter text-[16px] text-black tracking-[0.48px]">{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Guarantees() {
  const { lang } = useLang();
  const tr = t[lang].guarantees;
  const ICONS = [IconShieldBig, IconTickCircle, IconSettings];
  return (
    <section className="bg-white">
      <div className={SEC}>
        <SecTitle>{tr.title}</SecTitle>
        <div className="flex gap-[29px] justify-center items-start max-md:flex-col max-md:items-center">
          {tr.items.map((g, i) => {
            const Icon = ICONS[i];
            return (
              <div key={i} className="flex-1 max-w-[327px] flex flex-col gap-7 items-center text-center max-md:max-w-[360px]">
                <div className="bg-[#d0fae5] rounded-[15px] w-[65px] h-[65px] flex items-center justify-center shrink-0">
                  <Icon />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="font-manrope font-semibold text-[21px] text-black leading-snug">{g.title}</p>
                  <p className="font-inter text-[18px] text-black/70">{g.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  const { lang } = useLang();
  const tr = t[lang].cta;
  return (
    <section id="contacts" style={{ background: "linear-gradient(133.99deg, #00bc7f 7.86%, #00b8d8 94.72%)" }}>
      <div className="max-w-[900px] mx-auto px-6 py-[104px] pb-[112px] max-md:py-16 flex flex-col gap-16 items-center">
        <div className="flex flex-col gap-12 items-center w-full">
          <div className="flex flex-col gap-8 items-center">
            <h2 className="font-manrope font-semibold text-[42px] max-md:text-[28px] text-white tracking-[0.96px] leading-tight text-center whitespace-nowrap max-md:whitespace-normal">
              {tr.title}
            </h2>
            <p className="font-inter font-medium text-[20px] max-md:text-[16px] text-white/80 text-center">
              {tr.subtitle}
            </p>
          </div>
          <div className="flex gap-6 items-center flex-wrap justify-center max-sm:flex-col max-sm:w-full">
            <Link href="tel:+48575673474"
                  className="inline-flex items-center gap-3 bg-white text-[#029061] font-manrope font-semibold text-[24px] px-8 py-[14px] rounded-[15px] hover:opacity-90 transition-opacity max-sm:justify-center max-sm:w-full"
                  style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.15)" }}>
              <IconPhone />
              +48 575 673 474
            </Link>
            <Link href="https://wa.me/48575673474" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white/10 text-white border border-white font-manrope font-semibold text-[24px] px-8 py-[14px] rounded-[15px] hover:bg-white/20 transition-colors max-sm:justify-center max-sm:w-full"
                  style={{ boxShadow: "0px 4px 16px 0px rgba(0,0,0,0.15)" }}>
              <IconEnvelope />
              WhatsApp
              <IconArrow />
            </Link>
          </div>
        </div>
        <p className="font-inter font-medium text-[16px] text-white/80 text-center w-full leading-7">
          {tr.hours}<br/>{tr.visit}
        </p>
      </div>
    </section>
  );
}

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
