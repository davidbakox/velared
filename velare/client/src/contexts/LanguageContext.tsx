import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Language = "en" | "hu" | "ro";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home", hu: "Főoldal", ro: "Acasă" },
  "nav.services": { en: "Services", hu: "Szolgáltatások", ro: "Servicii" },
  "nav.about": { en: "About Us", hu: "Rólunk", ro: "Despre Noi" },
  "nav.contact": { en: "Contact", hu: "Kapcsolat", ro: "Contact" },
  "nav.reserve": { en: "Reserve a Table", hu: "Asztalfoglalás", ro: "Rezervă o Masă" },

  // Hero
  "hero.headline": {
    en: "An Elevated Dining Experience",
    hu: "Egy Magasabb Szintű Gasztronómiai Élmény",
    ro: "O Experiență Culinară Elevată",
  },
  "hero.subheadline": {
    en: "Discover modern European fusion crafted with precision, passion, and artistry.",
    hu: "Fedezze fel a modern európai fúziós konyhát, ahol a precizitás, a szenvedély és a művészet találkozik.",
    ro: "Descoperă bucătăria modernă europeană fusion, creată cu precizie, pasiune și rafinament.",
  },
  "hero.cta": { en: "Reserve a Table", hu: "Asztalfoglalás", ro: "Rezervă o Masă" },

  // Experience Section
  "experience.label": { en: "The Experience", hu: "Az Élmény", ro: "Experiența" },
  "experience.title": {
    en: "Where Every Detail Tells a Story",
    hu: "Ahol Minden Részlet Egy Történetet Mesél",
    ro: "Unde Fiecare Detaliu Spune o Poveste",
  },
  "experience.description": {
    en: "At Velaré, dining transcends the ordinary. Each dish is a masterpiece of flavor, texture, and presentation — a symphony composed by our world-class culinary team. From the moment you step through our doors, every sense is engaged in an unforgettable journey.",
    hu: "A Velaréban az étkezés túlmutat a hétköznapin. Minden fogás az ízek, textúrák és a prezentáció mestermunkája — egy szimfónia, amelyet világszínvonalú kulináris csapatunk komponál. Attól a pillanattól, hogy belép az ajtónkon, minden érzékszervét egy felejthetetlen utazásba vonjuk be.",
    ro: "La Velaré, experiența culinară transcende obișnuitul. Fiecare preparat este o capodoperă de savoare, textură și prezentare — o simfonie compusă de echipa noastră culinară de clasă mondială. Din momentul în care pășiți prin ușile noastre, fiecare simț este angajat într-o călătorie de neuitat.",
  },

  // Highlights
  "highlights.label": { en: "Our Highlights", hu: "Kiemelkedő Ajánlataink", ro: "Punctele Noastre Forte" },
  "highlights.cuisine.title": { en: "European Fusion", hu: "Európai Fúzió", ro: "Fuziune Europeană" },
  "highlights.cuisine.desc": {
    en: "A harmonious blend of continental traditions reimagined with modern techniques and seasonal ingredients.",
    hu: "A kontinentális hagyományok harmonikus ötvözete, modern technikákkal és szezonális alapanyagokkal újragondolva.",
    ro: "O îmbinare armonioasă a tradițiilor continentale, reimaginată cu tehnici moderne și ingrediente de sezon.",
  },
  "highlights.ambience.title": { en: "Refined Ambience", hu: "Kifinomult Hangulat", ro: "Ambient Rafinat" },
  "highlights.ambience.desc": {
    en: "An atmosphere of understated luxury — warm lighting, curated interiors, and an intimate setting for every occasion.",
    hu: "A visszafogott luxus légköre — meleg megvilágítás, gondosan válogatott belső terek és intim környezet minden alkalomra.",
    ro: "O atmosferă de lux discret — iluminat cald, interioare curate și un cadru intim pentru fiecare ocazie.",
  },
  "highlights.wine.title": { en: "Curated Wine Selection", hu: "Válogatott Borkínálat", ro: "Selecție de Vinuri Curate" },
  "highlights.wine.desc": {
    en: "An exceptional collection of wines from Europe's finest vineyards, expertly paired with each course.",
    hu: "Európa legkiválóbb szőlőültetvényeiről származó borok kivételes gyűjteménye, szakértően párosítva minden fogáshoz.",
    ro: "O colecție excepțională de vinuri din cele mai fine podgorii europene, asociate cu experiență fiecărui fel de mâncare.",
  },

  // Testimonials
  "testimonials.label": { en: "Guest Voices", hu: "Vendégeink Véleménye", ro: "Vocile Oaspeților" },
  "testimonials.title": {
    en: "What Our Guests Say",
    hu: "Mit Mondanak Vendégeink",
    ro: "Ce Spun Oaspeții Noștri",
  },
  "testimonial.1.text": {
    en: "\"An extraordinary evening from start to finish. The tasting menu was a revelation — each course more surprising than the last.\"",
    hu: "\"Egy rendkívüli este az elejétől a végéig. A kóstolómenü revelációnak bizonyult — minden fogás meglepőbb volt, mint az előző.\"",
    ro: "\"O seară extraordinară de la început până la sfârșit. Meniul de degustare a fost o revelație — fiecare fel mai surprinzător decât precedentul.\"",
  },
  "testimonial.1.author": { en: "Alexandra M.", hu: "Alexandra M.", ro: "Alexandra M." },
  "testimonial.1.role": { en: "Food Critic, The European Table", hu: "Gasztrokritikus, The European Table", ro: "Critic Culinar, The European Table" },
  "testimonial.2.text": {
    en: "\"Velaré is not just a restaurant — it's an experience. The attention to detail, the service, the atmosphere — everything is impeccable.\"",
    hu: "\"A Velaré nem csupán egy étterem — ez egy élmény. A részletekre való odafigyelés, a kiszolgálás, a hangulat — minden kifogástalan.\"",
    ro: "\"Velaré nu este doar un restaurant — este o experiență. Atenția la detalii, serviciul, atmosfera — totul este impecabil.\"",
  },
  "testimonial.2.author": { en: "Marcus L.", hu: "Marcus L.", ro: "Marcus L." },
  "testimonial.2.role": { en: "Michelin Guide Contributor", hu: "Michelin Kalauz Munkatárs", ro: "Contributor Ghid Michelin" },
  "testimonial.3.text": {
    en: "\"The private dining room was perfect for our anniversary. Intimate, elegant, and the sommelier's pairings were exceptional.\"",
    hu: "\"A privát étkező tökéletes volt az évfordulónkra. Intim, elegáns, és a sommelier párosításai kivételesek voltak.\"",
    ro: "\"Sala privată de dining a fost perfectă pentru aniversarea noastră. Intimă, elegantă, iar selecțiile somelierului au fost excepționale.\"",
  },
  "testimonial.3.author": { en: "Elena & David R.", hu: "Elena és David R.", ro: "Elena & David R." },
  "testimonial.3.role": { en: "Anniversary Celebration", hu: "Évfordulós Ünneplés", ro: "Celebrare Aniversară" },

  // Final CTA
  "cta.title": {
    en: "Begin Your Culinary Journey",
    hu: "Kezdje El Kulináris Utazását",
    ro: "Începeți Călătoria Culinară",
  },
  "cta.description": {
    en: "Reserve your table at Velaré and discover an evening of extraordinary flavors, impeccable service, and unforgettable moments.",
    hu: "Foglalja le asztalát a Velaréban, és fedezzen fel egy estét rendkívüli ízekkel, kifogástalan kiszolgálással és felejthetetlen pillanatokkal.",
    ro: "Rezervați masa la Velaré și descoperiți o seară de savori extraordinare, servicii impecabile și momente de neuitat.",
  },
  "cta.button": { en: "Make a Reservation", hu: "Foglaljon Asztalt", ro: "Faceți o Rezervare" },

  // Services Page
  "services.headline": {
    en: "Our Dining Experience",
    hu: "Szolgáltatásaink",
    ro: "Experiența Noastră Culinară",
  },
  "services.subtitle": {
    en: "Every moment at Velaré is crafted to perfection",
    hu: "A Velaréban minden pillanat a tökéletességre törekszik",
    ro: "Fiecare moment la Velaré este creat spre perfecțiune",
  },
  "services.fine.title": { en: "Fine Dining Experience", hu: "Fine Dining Élmény", ro: "Experiență Fine Dining" },
  "services.fine.desc": {
    en: "Immerse yourself in an evening of culinary excellence. Our multi-course tasting menus showcase the finest seasonal ingredients, transformed through innovative techniques and presented with artistic precision. Each dish tells a story of tradition meeting modernity.",
    hu: "Merüljön el egy kulináris kiválóság estéjében. Többfogásos kóstolómenüink a legjobb szezonális alapanyagokat mutatják be, innovatív technikákkal átalakítva és művészi precizitással tálalva. Minden fogás a hagyomány és a modernitás találkozásának történetét meséli el.",
    ro: "Cufundați-vă într-o seară de excelență culinară. Meniurile noastre de degustare cu mai multe feluri prezintă cele mai fine ingrediente de sezon, transformate prin tehnici inovatoare și prezentate cu precizie artistică. Fiecare preparat spune o poveste a tradiției care întâlnește modernitatea.",
  },
  "services.seasonal.title": { en: "Seasonal Menus", hu: "Szezonális Menük", ro: "Meniuri Sezoniere" },
  "services.seasonal.desc": {
    en: "Our menus evolve with the seasons, celebrating the finest produce at its peak. From spring's delicate herbs to winter's rich, warming flavors — every menu is a reflection of nature's rhythm, curated by our executive chef.",
    hu: "Menüink az évszakokkal együtt fejlődnek, a legjobb terményeket ünnepelve csúcsformájukban. A tavasz finom fűszernövényeitől a tél gazdag, melegítő ízeiig — minden menü a természet ritmusának tükröződése, amelyet vezető séfünk állít össze.",
    ro: "Meniurile noastre evoluează odată cu anotimpurile, celebrând cele mai fine produse la apogeul lor. De la ierburile delicate ale primăverii la aromele bogate și încălzitoare ale iernii — fiecare meniu este o reflecție a ritmului naturii, curată de bucătarul nostru executiv.",
  },
  "services.private.title": { en: "Private Dining", hu: "Privát Étkezés", ro: "Dining Privat" },
  "services.private.desc": {
    en: "For intimate celebrations and exclusive gatherings, our private dining rooms offer a secluded haven of luxury. Personalized menus, dedicated service staff, and bespoke wine pairings create an experience tailored entirely to your vision.",
    hu: "Intim ünneplésekhez és exkluzív összejövetelekhez privát étkezőink a luxus elzárt menedékét kínálják. Személyre szabott menük, dedikált kiszolgáló személyzet és egyedi borpárosítások teremtenek egy teljes mértékben az Ön elképzeléseihez igazított élményt.",
    ro: "Pentru celebrări intime și întâlniri exclusive, sălile noastre private de dining oferă un refugiu izolat de lux. Meniuri personalizate, personal de serviciu dedicat și asocieri de vinuri personalizate creează o experiență adaptată în întregime viziunii dumneavoastră.",
  },
  "services.events.title": { en: "Events & Celebrations", hu: "Események és Ünnepségek", ro: "Evenimente & Celebrări" },
  "services.events.desc": {
    en: "From corporate galas to milestone celebrations, Velaré transforms every event into an extraordinary occasion. Our events team works closely with you to design every detail — from custom menus and floral arrangements to entertainment and ambience.",
    hu: "Vállalati gáláktól a mérföldkő ünnepségekig, a Velaré minden eseményt rendkívüli alkalommá alakít. Rendezvénycsapatunk szorosan együttműködik Önnel, hogy minden részletet megtervezzen — az egyedi menüktől és virágkompozícióktól a szórakoztatásig és a hangulatig.",
    ro: "De la gale corporative la celebrări ale unor momente importante, Velaré transformă fiecare eveniment într-o ocazie extraordinară. Echipa noastră de evenimente lucrează îndeaproape cu dumneavoastră pentru a proiecta fiecare detaliu — de la meniuri personalizate și aranjamente florale la divertisment și ambient.",
  },

  // About Page
  "about.headline": { en: "Our Story", hu: "Történetünk", ro: "Povestea Noastră" },
  "about.subtitle": {
    en: "A passion for excellence, a dedication to craft",
    hu: "Szenvedély a kiválóságért, elkötelezettség a mesterség iránt",
    ro: "O pasiune pentru excelență, o dedicare meșteșugului",
  },
  "about.story.p1": {
    en: "Velaré was born from a singular vision: to create a dining destination where culinary artistry meets refined hospitality. Founded in the heart of Europe, our restaurant represents the culmination of decades of passion, expertise, and an unwavering commitment to excellence.",
    hu: "A Velaré egyetlen vízióból született: egy olyan étkezési célpont létrehozása, ahol a kulináris művészet találkozik a kifinomult vendéglátással. Európa szívében alapítva, éttermünk évtizedes szenvedély, szakértelem és a kiválóság iránti rendíthetetlen elkötelezettség csúcspontját képviseli.",
    ro: "Velaré s-a născut dintr-o viziune singulară: crearea unei destinații culinare unde arta gastronomică întâlnește ospitalitatea rafinată. Fondată în inima Europei, restaurantul nostru reprezintă culminarea a decenii de pasiune, expertiză și un angajament neclintit față de excelență.",
  },
  "about.story.p2": {
    en: "Our executive chef brings together the finest traditions of European cuisine with bold, contemporary innovation. Every ingredient is sourced with intention — from local artisan producers to the finest purveyors across the continent. The result is a menu that honors heritage while embracing the future of gastronomy.",
    hu: "Vezető séfünk az európai konyha legfinomabb hagyományait ötvözi merész, kortárs innovációval. Minden alapanyagot tudatosan választunk ki — helyi kézműves termelőktől a kontinens legkiválóbb beszállítóiig. Az eredmény egy olyan menü, amely tiszteli az örökséget, miközben felkarolja a gasztronómia jövőjét.",
    ro: "Bucătarul nostru executiv reunește cele mai fine tradiții ale bucătăriei europene cu inovația îndrăzneață și contemporană. Fiecare ingredient este procurat cu intenție — de la producători artizanali locali la cei mai fini furnizori de pe continent. Rezultatul este un meniu care onorează patrimoniul în timp ce îmbrățișează viitorul gastronomiei.",
  },
  "about.story.p3": {
    en: "Beyond the cuisine, Velaré is defined by its atmosphere. Our interiors, designed by award-winning architects, create a space where warmth and sophistication coexist. Soft candlelight, rich textures, and thoughtful details transform every visit into a sensory journey — one that lingers long after the last course.",
    hu: "A konyhán túl a Velarét a hangulata határozza meg. Díjnyertes építészek által tervezett belsőnk olyan teret teremt, ahol a melegség és a kifinomultság együtt él. Lágy gyertyafény, gazdag textúrák és átgondolt részletek alakítanak minden látogatást érzéki utazássá — olyanná, amely még az utolsó fogás után is sokáig megmarad.",
    ro: "Dincolo de bucătărie, Velaré este definit de atmosfera sa. Interioarele noastre, proiectate de arhitecți premiați, creează un spațiu unde căldura și sofisticarea coexistă. Lumânări blânde, texturi bogate și detalii atente transformă fiecare vizită într-o călătorie senzorială — una care persistă mult timp după ultimul fel.",
  },
  "about.philosophy.title": { en: "Our Philosophy", hu: "Filozófiánk", ro: "Filosofia Noastră" },
  "about.philosophy.desc": {
    en: "We believe that exceptional dining is an art form. It requires patience, precision, and an uncompromising dedication to quality. At Velaré, we don't simply serve meals — we create memories.",
    hu: "Hisszük, hogy a kivételes étkezés egy művészeti forma. Türelmet, precizitást és a minőség iránti megalkuvást nem ismerő elkötelezettséget igényel. A Velaréban nem egyszerűen ételeket szolgálunk fel — emlékeket teremtünk.",
    ro: "Credem că experiența culinară excepțională este o formă de artă. Necesită răbdare, precizie și o dedicare necompromisă calității. La Velaré, nu servim pur și simplu mese — creăm amintiri.",
  },

  // Contact Page
  "contact.headline": {
    en: "Contact & Reservations",
    hu: "Kapcsolat & Foglalás",
    ro: "Contact & Rezervări",
  },
  "contact.subtitle": {
    en: "We look forward to welcoming you",
    hu: "Várjuk, hogy üdvözölhessük",
    ro: "Așteptăm cu nerăbdare să vă primim",
  },
  "contact.form.name": { en: "Name", hu: "Név", ro: "Nume" },
  "contact.form.email": { en: "Email", hu: "Email", ro: "Email" },
  "contact.form.message": { en: "Message", hu: "Üzenet", ro: "Mesaj" },
  "contact.form.submit": { en: "Send Message", hu: "Üzenet Küldése", ro: "Trimite Mesajul" },
  "contact.form.sending": { en: "Sending...", hu: "Küldés...", ro: "Se trimite..." },
  "contact.form.success": {
    en: "Thank you for your message. We will respond shortly.",
    hu: "Köszönjük üzenetét. Hamarosan válaszolunk.",
    ro: "Vă mulțumim pentru mesaj. Vom răspunde în curând.",
  },
  "contact.form.error": {
    en: "Something went wrong. Please try again or email us directly.",
    hu: "Valami hiba történt. Kérjük, próbálja újra, vagy írjon nekünk közvetlenül.",
    ro: "Ceva nu a mers bine. Vă rugăm încercați din nou sau scrieți-ne direct.",
  },
  "contact.info.address.label": { en: "Address", hu: "Cím", ro: "Adresă" },
  "contact.info.address": { en: "12 Grand Avenue, Budapest, Hungary", hu: "Budapest, Grand Avenue 12., Magyarország", ro: "Grand Avenue 12, Budapesta, Ungaria" },
  "contact.info.phone.label": { en: "Phone", hu: "Telefon", ro: "Telefon" },
  "contact.info.phone": { en: "+36 1 234 5678", hu: "+36 1 234 5678", ro: "+36 1 234 5678" },
  "contact.info.email.label": { en: "Email", hu: "Email", ro: "Email" },
  "contact.info.email": { en: "reservations@velare.com", hu: "reservations@velare.com", ro: "reservations@velare.com" },
  "contact.info.hours.label": { en: "Hours", hu: "Nyitvatartás", ro: "Program" },
  "contact.info.hours.1": { en: "Tuesday – Saturday: 18:00 – 23:00", hu: "Kedd – Szombat: 18:00 – 23:00", ro: "Marți – Sâmbătă: 18:00 – 23:00" },
  "contact.info.hours.2": { en: "Sunday – Monday: Closed", hu: "Vasárnap – Hétfő: Zárva", ro: "Duminică – Luni: Închis" },
  "contact.form.name.placeholder": { en: "Your full name", hu: "Teljes neve", ro: "Numele complet" },
  "contact.form.email.placeholder": { en: "your@email.com", hu: "az.on@email.com", ro: "adresa@email.com" },
  "contact.form.message.placeholder": {
    en: "Tell us about your reservation or inquiry...",
    hu: "Meséljen foglalásáról vagy kérdéséről...",
    ro: "Spuneți-ne despre rezervarea sau întrebarea dumneavoastră...",
  },

  // Footer
  "footer.tagline": { en: "Where Flavor Becomes Experience", hu: "Ahol az Ízek Élménnyé Válnak", ro: "Unde Savoarea Devine Experiență" },
  "footer.rights": { en: "All rights reserved.", hu: "Minden jog fenntartva.", ro: "Toate drepturile rezervate." },
  "footer.hours": { en: "Opening Hours", hu: "Nyitvatartás", ro: "Program" },
  "footer.follow": { en: "Follow Us", hu: "Kövessen Minket", ro: "Urmăriți-ne" },
  "footer.navigation": { en: "Navigation", hu: "Navigáció", ro: "Navigare" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[language] || entry.en || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
