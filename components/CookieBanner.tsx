"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";

const TEXTS = {
  RU: {
    text: "Мы используем файлы cookie для улучшения работы сайта. Продолжая использование сайта, вы соглашаетесь с нашей",
    policy: "политикой конфиденциальности",
    accept: "Принять",
    decline: "Отклонить",
  },
  PL: {
    text: "Używamy plików cookie, aby poprawić działanie strony. Korzystając ze strony, zgadzasz się z naszą",
    policy: "polityką prywatności",
    accept: "Akceptuj",
    decline: "Odrzuć",
  },
  ENG: {
    text: "We use cookies to improve your experience. By continuing to use this site, you agree to our",
    policy: "privacy policy",
    accept: "Accept",
    decline: "Decline",
  },
};

export default function CookieBanner() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const tr = TEXTS[lang as "RU" | "PL" | "ENG"];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined")
      localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    if (typeof window !== "undefined")
      localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-[760px] mx-auto bg-white rounded-[20px] px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6"
           style={{ boxShadow: "0px 8px 32px rgba(0,0,0,0.14)" }}>
        {/* Иконка */}
        <div className="shrink-0 w-[44px] h-[44px] bg-[#d0fae5] rounded-full flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="#005E3F" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="2" fill="#005E3F"/>
            <circle cx="18" cy="6" r="1.5" fill="#005E3F"/>
            <circle cx="8" cy="5" r="1" fill="#005E3F"/>
            <circle cx="19" cy="13" r="1" fill="#005E3F"/>
          </svg>
        </div>

        {/* Текст */}
        <p className="font-inter text-[13px] text-black/70 leading-relaxed flex-1">
          {tr.text}{" "}
          <a href="/privacy" className="text-[#005E3F] underline underline-offset-2 hover:text-[#00db9a] transition-colors">
            {tr.policy}
          </a>
          .
        </p>

        {/* Кнопки */}
        <div className="flex gap-2 shrink-0 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none font-inter font-medium text-[13px] text-black/50 border border-black/15 rounded-[10px] px-4 py-2.5 hover:bg-black/5 transition-colors">
            {tr.decline}
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none font-inter font-semibold text-[13px] text-white bg-[#00db9a] rounded-[10px] px-5 py-2.5 hover:bg-[#00c48a] transition-colors"
            style={{ boxShadow: "0px 2px 8px rgba(0,219,154,0.35)" }}>
            {tr.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
