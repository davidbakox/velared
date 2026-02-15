/*
 * Velaré Services Page — Cinematic Editorial Design
 * Alternating split-screen layouts, large imagery, editorial typography.
 * Services: Fine Dining, Seasonal Menus, Private Dining, Events & Celebrations.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/images";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GoldDivider from "@/components/GoldDivider";
import { Link } from "wouter";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.fine.title"),
      desc: t("services.fine.desc"),
      image: IMAGES.dish,
      num: "01",
    },
    {
      title: t("services.seasonal.title"),
      desc: t("services.seasonal.desc"),
      image: IMAGES.culinary,
      num: "02",
    },
    {
      title: t("services.private.title"),
      desc: t("services.private.desc"),
      image: IMAGES.privateDining,
      num: "03",
    },
    {
      title: t("services.events.title"),
      desc: t("services.events.desc"),
      image: IMAGES.interior,
      num: "04",
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      {/* ===== PAGE HERO ===== */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.interior}
            alt="Velaré dining experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/80" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <ScrollReveal>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4 block">
              Velaré
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-warm-white font-medium leading-[1.1]">
              {t("services.headline")}
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mt-8 mb-6" />
            <p className="font-body text-warm-white/60 text-base lg:text-lg font-light max-w-lg">
              {t("services.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      {services.map((service, i) => {
        const isReversed = i % 2 === 1;
        return (
          <section
            key={i}
            className={`py-20 lg:py-32 ${i % 2 === 0 ? "bg-ivory" : "bg-warm-white"}`}
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? "direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <ScrollReveal
                  className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
                  direction={isReversed ? "right" : "left"}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover hover:scale-[1.02] transition-transform duration-700"
                    />
                    {/* Number overlay */}
                    <div className="absolute top-6 left-6">
                      <span className="font-display text-7xl lg:text-8xl text-warm-white/10 font-medium leading-none">
                        {service.num}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Text */}
                <div
                  className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
                  style={{ direction: "ltr" }}
                >
                  <ScrollReveal delay={0.2}>
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
                      {service.num}
                    </span>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-charcoal mt-4 mb-6 leading-[1.15]">
                      {service.title}
                    </h2>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                    <div className="w-12 h-px bg-gold mb-6" />
                  </ScrollReveal>
                  <ScrollReveal delay={0.5}>
                    <p className="font-body text-charcoal/70 text-base lg:text-lg leading-[1.8] font-light">
                      {service.desc}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-24 lg:py-32 bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <GoldDivider className="mb-10" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-6">
              {t("cta.title")}
            </h2>
            <p className="font-body text-warm-white/60 text-base lg:text-lg leading-[1.8] font-light mb-10 max-w-xl mx-auto">
              {t("cta.description")}
            </p>
            <Link href="/contact">
              <span className="inline-block px-10 py-4 border border-gold text-gold text-xs sm:text-sm tracking-[0.25em] uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-500">
                {t("cta.button")}
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
