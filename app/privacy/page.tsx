"use client";
import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";

const CONTENT = {
  RU: {
    title: "Политика конфиденциальности",
    updated: "Последнее обновление: апрель 2025",
    sections: [
      {
        title: "1. Общие положения",
        text: "Настоящая Политика конфиденциальности описывает, как Czysto Cleaner собирает, использует и защищает персональные данные пользователей сайта czysto-cleaner.vercel.app в соответствии с требованиями GDPR (Общий регламент о защите данных) и польским законом о защите персональных данных (RODO).",
      },
      {
        title: "2. Какие данные мы собираем",
        text: "Мы можем собирать следующие данные: имя и фамилия, номер телефона, адрес электронной почты — только при добровольном обращении через форму обратной связи или мессенджеры. Технические данные (IP-адрес, тип браузера) собираются автоматически для обеспечения работы сайта.",
      },
      {
        title: "3. Использование файлов cookie",
        text: "Наш сайт использует файлы cookie для корректной работы сайта, сохранения языковых настроек и анализа посещаемости. Вы можете отказаться от использования cookie, нажав «Отклонить» в баннере. При этом некоторые функции сайта могут быть ограничены.",
      },
      {
        title: "4. Цели обработки данных",
        text: "Ваши данные используются исключительно для: ответа на запросы и организации услуги химчистки, улучшения качества сайта и сервиса. Мы не передаём ваши данные третьим лицам и не используем их для рекламы.",
      },
      {
        title: "5. Ваши права",
        text: "В соответствии с GDPR/RODO вы имеете право: запросить доступ к своим данным, потребовать исправления или удаления данных, отозвать согласие на обработку данных в любое время, подать жалобу в надзорный орган (UODO — Urząd Ochrony Danych Osobowych).",
      },
      {
        title: "6. Контакты",
        text: "По вопросам защиты данных обращайтесь: czysto.cleaner@gmail.com или по телефону +48 575 673 474.",
      },
    ],
    back: "← Вернуться на главную",
  },
  PL: {
    title: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: kwiecień 2025",
    sections: [
      {
        title: "1. Postanowienia ogólne",
        text: "Niniejsza Polityka prywatności opisuje, w jaki sposób Czysto Cleaner zbiera, wykorzystuje i chroni dane osobowe użytkowników strony czysto-cleaner.vercel.app zgodnie z wymogami RODO (Rozporządzenie o Ochronie Danych Osobowych) oraz polską ustawą o ochronie danych osobowych.",
      },
      {
        title: "2. Jakie dane zbieramy",
        text: "Możemy zbierać następujące dane: imię i nazwisko, numer telefonu, adres e-mail — wyłącznie przy dobrowolnym kontakcie przez formularz lub komunikatory. Dane techniczne (adres IP, typ przeglądarki) są zbierane automatycznie w celu zapewnienia działania strony.",
      },
      {
        title: "3. Wykorzystanie plików cookie",
        text: "Nasza strona używa plików cookie do prawidłowego działania serwisu, zapamiętywania ustawień językowych i analizy ruchu. Możesz zrezygnować z cookie, klikając «Odrzuć» w banerze. Niektóre funkcje strony mogą być wówczas ograniczone.",
      },
      {
        title: "4. Cele przetwarzania danych",
        text: "Twoje dane są wykorzystywane wyłącznie do: odpowiedzi na zapytania i organizacji usługi prania tapicerki, poprawy jakości strony i usług. Nie przekazujemy Twoich danych osobom trzecim ani nie wykorzystujemy ich do celów reklamowych.",
      },
      {
        title: "5. Twoje prawa",
        text: "Zgodnie z RODO masz prawo do: dostępu do swoich danych, żądania ich sprostowania lub usunięcia, wycofania zgody na przetwarzanie danych w dowolnym momencie, wniesienia skargi do organu nadzorczego (UODO — Urząd Ochrony Danych Osobowych).",
      },
      {
        title: "6. Kontakt",
        text: "W sprawach ochrony danych prosimy o kontakt: czysto.cleaner@gmail.com lub pod numerem +48 575 673 474.",
      },
    ],
    back: "← Powrót na stronę główną",
  },
  ENG: {
    title: "Privacy Policy",
    updated: "Last updated: April 2025",
    sections: [
      {
        title: "1. General Provisions",
        text: "This Privacy Policy describes how Czysto Cleaner collects, uses and protects personal data of users of czysto-cleaner.vercel.app in accordance with GDPR (General Data Protection Regulation) and Polish personal data protection law (RODO).",
      },
      {
        title: "2. What Data We Collect",
        text: "We may collect: name, phone number, email address — only when voluntarily provided through contact forms or messengers. Technical data (IP address, browser type) is collected automatically to ensure the website functions properly.",
      },
      {
        title: "3. Use of Cookies",
        text: "Our website uses cookies for proper operation, saving language preferences and traffic analysis. You may decline cookies by clicking «Decline» in the banner. Some website features may be limited as a result.",
      },
      {
        title: "4. Purposes of Data Processing",
        text: "Your data is used exclusively for: responding to enquiries and organising cleaning services, improving website and service quality. We do not share your data with third parties or use it for advertising.",
      },
      {
        title: "5. Your Rights",
        text: "Under GDPR/RODO you have the right to: access your data, request correction or deletion, withdraw consent to data processing at any time, lodge a complaint with the supervisory authority (UODO — Urząd Ochrony Danych Osobowych).",
      },
      {
        title: "6. Contact",
        text: "For data protection enquiries: czysto.cleaner@gmail.com or +48 575 673 474.",
      },
    ],
    back: "← Back to homepage",
  },
};

export default function PrivacyPage() {
  const { lang } = useLang();
  const tr = CONTENT[lang as "RU" | "PL" | "ENG"];

  return (
    <>
      <Navbar />
      <main className="bg-[#f9fafb] min-h-screen pt-[104px] max-lg:pt-[80px]">
        <div className="max-w-[760px] mx-auto px-6 py-10">

          {/* Шапка */}
          <div className="mb-10">
            <Link href="/"
                  className="font-inter text-[14px] text-[#005E3F] hover:text-[#00db9a] transition-colors mb-8 inline-block">
              {tr.back}
            </Link>
            <h1 className="font-manrope font-bold text-[36px] max-md:text-[26px] text-black mt-4 mb-2">
              {tr.title}
            </h1>
            <p className="font-inter text-[13px] text-black/40">{tr.updated}</p>
          </div>

          {/* Секции */}
          <div className="flex flex-col gap-8">
            {tr.sections.map((s, i) => (
              <div key={i} className="bg-white rounded-[20px] px-8 py-7"
                   style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.06)" }}>
                <h2 className="font-manrope font-bold text-[18px] text-black mb-3">{s.title}</h2>
                <p className="font-inter text-[15px] text-black/70 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
