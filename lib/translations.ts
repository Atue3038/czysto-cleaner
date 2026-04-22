export type Lang = "RU" | "PL" | "ENG";

export const t = {
  RU: {
    nav: { services: "Услуги", prices: "Прайс", packages: "Пакеты", equipment: "Оборудование", contacts: "Контакты", order: "Заказать" },
    hero: {
      title: "Химчистка мебели с дезинфекцией",
      subtitle: "Удаляем клещей\u00a0•\u00a0Сушка за 2–4 часа\u00a0•\u00a0Безопасно для детей",
      button: "Заказать чистку",
    },
    advantages: {
      title: "Наши преимущества",
      cards: [
        { title: "VIP уровень обслуживания",        text: "Тщательный подход и результат, близкий к идеалу" },
        { title: "Работа с дорогой мебелью",          text: "Бережный уход за деликатными тканями, мягкой мебелью и коврами" },
        { title: "ЭКО и безопасность",             text: "Безопасные для детей, животных и аллергиков эко-средства и мощная паровая очистка, уничтожающая 99.9% бактерий и клещей" },
        { title: "Профессиональное оборудование", text: "Моющий пылесос Kirby 2-го поколения, Sabrina, мощные парогенераторы и тряпки Raypath, позволяющие деликатно и в то же время глубоко очистить поверхность" },
        { title: "Чистим до результата",      text: "Без ограничений по времени — работаем, пока не будет идеально без каких-либо доплат с вашей стороны." },
        { title: "3-х ступенчатая очистка",             text: "Уникальная технология глубокой очистки ткани в 3 этапа, включающая глубокое удаление грязи, паровую дезинфекцию и финальную чистку с промыванием экстрактором." },
      ],
    },
    promo: { gift: "Мытьё окон в подарок!", condition: "При заказе от 1000 zl" },
    included: {
      title: "Что входит в услугу",
      items: ["3-х этапная глубокая очистка", "Удаление грязи, пыли и клещей", "Паровая дезинфекция", "Выведение пятен", "Профессиональная сушка"],
      button: "Забронировать чистку",
    },
    video: { title: "Видео процесса очистки" },
    prices: {
      title: "Прайс-лист", sofas: "Диваны", regular: "Обычный диван", regularSub: "+ подушки + сушка",
      corner: "Угловой диван", cornerSub: "+ подушки + сушка",
      mattresses: "Матрасы", single: "Односпальный", double: "Двуспальный",
      note: "Дополнительные элементы рассчитываются отдельно",
    },
    packages: {
      title: "Пакетные предложения",
      pack1title: "Пакет 1", pack1desc: "Диван + 2 кровати + мойка окон",
      pack2title: "Пакет 2", pack2desc: "2 дивана + 3 кровати + ковры + окна",
      popular: "Популярный", button: "Забронировать",
    },
    additional: {
      title: "Дополнительные услуги",
      items: [
        { name: "Комплексная уборка",  desc: "Чистка 2 ковров + дезинфекция + мойка полов",       price: "500 zl" },
        { name: "Аренда оборудования", desc: "Kirby + Santoemma Sabrina + Karcher с инструктажем", price: "500 zl/день" },
      ],
    },
    equipment: {
      title: "Профессиональное оборудование",
      items: [
        { name: "Kirby",             items: ["• удаляет до 99% клещей", "• глубокая чистка"] },
        { name: "Santoemma Sabrina", items: ["• вымывает грязь изнутри ткани", "• вытягивает влагу"] },
        { name: "Karcher (пар)",     items: ["• уничтожает бактерии и вирусы", "• очистка без химии"] },
        { name: "Raypath",           items: ["• гипоаллергенная технология", "• безопасно для детей"] },
      ],
    },
    guarantees: {
      title: "Наши гарантии",
      items: [
        { title: "Страхование ответственности (ОС)", text: "Полная защита вашего имущества" },
        { title: "Гарантия безопасности имущества",  text: "Работаем аккуратно и профессионально" },
        { title: "Профессиональное оборудование",    text: "Используем только сертифицированную технику" },
      ],
    },
    cta: {
      title: "Закажите чистку уже сегодня",
      subtitle: "Профессиональная химчистка с гарантией качества и безопасности",
      email: "Написать на email",
      hours: "Работаем ежедневно с 8:00 до 20:00",
      visit: "Выезд мастера в день обращения",
    },
  },

  PL: {
    nav: { services: "Usługi", prices: "Cennik", packages: "Pakiety", equipment: "Sprzęt", contacts: "Kontakt", order: "Zamów" },
    hero: {
      title: "Czyszczenie tapicerki z dezynfekcją",
      subtitle: "Usuwamy roztocza\u00a0•\u00a0Suszenie 2–4h\u00a0•\u00a0Bezpieczne dla dzieci",
      button: "Zamów czyszczenie",
    },
    advantages: {
      title: "Nasze zalety",
      cards: [
        { title: "Obsługa na poziomie VIP",          text: "Staranne podejście i wynik bliski perfekcji" },
        { title: "Praca z drogimi meblami",                text: "Delikatna pielęgnacja delikatnych tkanin, mebli tapicerowanych i dywanów" },
        { title: "EKO i bezpieczeństwo",           text: "Bezpieczne dla dzieci, zwierząt i alergików środki ekologiczne oraz potężne czyszczenie parowe, niszczące 99,9% bakterii i roztoczy" },
        { title: "Profesjonalny sprzęt", text: "Odkurzacz piorący Kirby 2. generacji, Sabrina, potężne parownice i ściereczki Raypath, pozwalające delikatnie i jednocześnie głęboko oczyścić powierzchnię" },
        { title: "Czyścimy do skutku",            text: "Bez ograniczeń czasowych — pracujemy, aż będzie idealnie, bez żadnych dopłat z Twojej strony." },
        { title: "Trójetapowe czyszczenie",                        text: "Unikalna technologia głębokiego czyszczenia tkaniny w 3 etapach, obejmująca głębokie usuwanie brudu, dezynfekcję parową i finalne czyszczenie z płukaniem ekstraktorowym." },
      ],
    },
    promo: { gift: "Mycie okien w prezencie!", condition: "Przy zamówieniu od 1000 zł" },
    included: {
      title: "Co wchodzi w skład usługi",
      items: ["Trójetapowe głębokie czyszczenie", "Usuwanie brudu, kurzu i roztoczy", "Dezynfekcja parowa", "Usuwanie plam", "Profesjonalne suszenie"],
      button: "Zarezerwuj czyszczenie",
    },
    video: { title: "Film z procesu czyszczenia" },
    prices: {
      title: "Cennik", sofas: "Sofy", regular: "Zwykła sofa", regularSub: "+ poduszki + suszenie",
      corner: "Sofa narożna", cornerSub: "+ poduszki + suszenie",
      mattresses: "Materace", single: "Jednoosobowy", double: "Dwuosobowy",
      note: "Dodatkowe elementy są wyceniane osobno",
    },
    packages: {
      title: "Pakiety usług",
      pack1title: "Pakiet 1", pack1desc: "Sofa + 2 łóżka + mycie okien",
      pack2title: "Pakiet 2", pack2desc: "2 sofy + 3 łóżka + dywany + okna",
      popular: "Popularny", button: "Zarezerwuj",
    },
    additional: {
      title: "Usługi dodatkowe",
      items: [
        { name: "Kompleksowe sprzątanie", desc: "Czyszczenie 2 dywanów + dezynfekcja + mycie podłóg", price: "500 zł" },
        { name: "Wynajem sprzętu",        desc: "Kirby + Santoemma Sabrina + Karcher z instruktażem",  price: "500 zł/dzień" },
      ],
    },
    equipment: {
      title: "Profesjonalny sprzęt",
      items: [
        { name: "Kirby",             items: ["• usuwa do 99% roztoczy", "• głębokie czyszczenie"] },
        { name: "Santoemma Sabrina", items: ["• wypłukuje brud z wnętrza tkaniny", "• wyciąga wilgoć"] },
        { name: "Karcher (para)",    items: ["• niszczy bakterie i wirusy", "• czyszczenie bez chemii"] },
        { name: "Raypath",           items: ["• technologia hipoalergiczna", "• bezpieczne dla dzieci"] },
      ],
    },
    guarantees: {
      title: "Nasze gwarancje",
      items: [
        { title: "Ubezpieczenie odpowiedzialności (OC)", text: "Pełna ochrona Twojego mienia" },
        { title: "Gwarancja bezpieczeństwa mienia",      text: "Pracujemy starannie i profesjonalnie" },
        { title: "Profesjonalny sprzęt",                 text: "Używamy tylko certyfikowanej techniki" },
      ],
    },
    cta: {
      title: "Zamów czyszczenie już dziś",
      subtitle: "Profesjonalne czyszczenie tapicerki z gwarancją jakości i bezpieczeństwa",
      email: "Napisz e-mail",
      hours: "Pracujemy codziennie 8:00–20:00",
      visit: "Wyjazd specjalisty w dniu zgłoszenia",
    },
  },

  ENG: {
    nav: { services: "Services", prices: "Prices", packages: "Packages", equipment: "Equipment", contacts: "Contacts", order: "Order" },
    hero: {
      title: "Furniture Cleaning with Disinfection",
      subtitle: "Removes mites\u00a0•\u00a0Drying in 2–4h\u00a0•\u00a0Safe for children",
      button: "Book a cleaning",
    },
    advantages: {
      title: "Our advantages",
      cards: [
        { title: "VIP level service",         text: "Meticulous approach and near-perfect results" },
        { title: "Work with expensive furniture",         text: "Gentle care for delicate fabrics, upholstered furniture and carpets" },
        { title: "ECO and safety",           text: "Safe for children, pets and allergy sufferers eco-friendly products and powerful steam cleaning that destroys 99.9% of bacteria and mites" },
        { title: "Professional equipment",     text: "Kirby 2nd generation vacuum cleaner, Sabrina, powerful steam generators and Raypath cloths, allowing delicate yet deep surface cleaning" },
        { title: "We clean until perfect",             text: "No time limits — we work until perfect with no additional charges from you." },
        { title: "3-stage cleaning",                    text: "Unique technology of deep fabric cleaning in 3 stages, including deep dirt removal, steam disinfection and final cleaning with extractor flushing." },
      ],
    },
    promo: { gift: "Window cleaning as a gift!", condition: "For orders from 1000 zl" },
    included: {
      title: "What's included",
      items: ["Three-stage deep cleaning", "Removal of dirt, dust and mites", "Steam disinfection", "Stain removal", "Professional drying"],
      button: "Book a cleaning",
    },
    video: { title: "Cleaning process video" },
    prices: {
      title: "Price list", sofas: "Sofas", regular: "Regular sofa", regularSub: "+ cushions + drying",
      corner: "Corner sofa", cornerSub: "+ cushions + drying",
      mattresses: "Mattresses", single: "Single", double: "Double",
      note: "Additional items are priced separately",
    },
    packages: {
      title: "Package deals",
      pack1title: "Package 1", pack1desc: "Sofa + 2 beds + window cleaning",
      pack2title: "Package 2", pack2desc: "2 sofas + 3 beds + carpets + windows",
      popular: "Popular", button: "Book now",
    },
    additional: {
      title: "Additional services",
      items: [
        { name: "Comprehensive cleaning", desc: "Cleaning 2 carpets + disinfection + floor washing", price: "500 zl" },
        { name: "Equipment rental",       desc: "Kirby + Santoemma Sabrina + Karcher with briefing", price: "500 zl/day" },
      ],
    },
    equipment: {
      title: "Professional equipment",
      items: [
        { name: "Kirby",             items: ["• removes up to 99% of mites", "• deep cleaning"] },
        { name: "Santoemma Sabrina", items: ["• flushes dirt from inside fabric", "• extracts moisture"] },
        { name: "Karcher (steam)",   items: ["• destroys bacteria and viruses", "• chemical-free cleaning"] },
        { name: "Raypath",           items: ["• hypoallergenic technology", "• safe for children"] },
      ],
    },
    guarantees: {
      title: "Our guarantees",
      items: [
        { title: "Liability insurance (OC)",  text: "Full protection of your property" },
        { title: "Property safety guarantee", text: "We work carefully and professionally" },
        { title: "Professional equipment",    text: "We use only certified machinery" },
      ],
    },
    cta: {
      title: "Book your cleaning today",
      subtitle: "Professional furniture cleaning with quality and safety guarantee",
      email: "Send an email",
      hours: "We work daily 8:00–20:00",
      visit: "Master arrives on the day of request",
    },
  },
} as const;
