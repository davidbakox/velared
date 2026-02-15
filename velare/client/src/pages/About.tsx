/*
 * Velaré About Page — Cinematic Editorial Design
 * Elegant storytelling with asymmetric layouts, large typography,
 * and atmospheric imagery. Split-screen narrative flow.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/images";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GoldDivider from "@/components/GoldDivider";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      {/* ===== PAGE HERO ===== */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Velaré atmosphere"
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
              {t("about.headline")}
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mt-8 mb-6" />
            <p className="font-body text-warm-white/60 text-base lg:text-lg font-light max-w-lg">
              {t("about.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== STORY — Part 1 ===== */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text — wider */}
            <div className="lg:col-span-6 lg:order-1">
              <ScrollReveal>
                <span className="font-display text-8xl lg:text-9xl text-gold/10 font-medium leading-none block mb-[-1rem]">
                  01
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="font-body text-charcoal/75 text-base lg:text-lg leading-[1.9] font-light">
                  {t("about.story.p1")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="w-12 h-px bg-gold mt-10" />
              </ScrollReveal>
            </div>

            {/* Image */}
            <ScrollReveal className="lg:col-span-6 lg:order-2" direction="right">
              <div className="relative">
                <img
                  src={IMAGES.culinary}
                  alt="Chef at work"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-gold/40" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== STORY — Part 2 (reversed) ===== */}
      <section className="py-24 lg:py-36 bg-warm-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal className="lg:col-span-6 lg:order-1" direction="left">
              <div className="relative">
                <img
                  src={IMAGES.dish}
                  alt="Gourmet cuisine"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-gold/40" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <div className="lg:col-span-6 lg:order-2">
              <ScrollReveal>
                <span className="font-display text-8xl lg:text-9xl text-gold/10 font-medium leading-none block mb-[-1rem]">
                  02
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="font-body text-charcoal/75 text-base lg:text-lg leading-[1.9] font-light">
                  {t("about.story.p2")}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="w-12 h-px bg-gold mt-10" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FULL-WIDTH IMAGE BREAK ===== */}
      <section className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img
          src={IMAGES.interior}
          alt="Velaré interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </section>

      {/* ===== STORY — Part 3 ===== */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="lg:col-span-6 lg:order-1">
              <ScrollReveal>
                <span className="font-display text-8xl lg:text-9xl text-gold/10 font-medium leading-none block mb-[-1rem]">
                  03
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="font-body text-charcoal/75 text-base lg:text-lg leading-[1.9] font-light">
                  {t("about.story.p3")}
                </p>
              </ScrollReveal>
            </div>

            {/* Image */}
            <ScrollReveal className="lg:col-span-6 lg:order-2" direction="right">
              <div className="relative">
                <img
                  src={IMAGES.privateDining}
                  alt="Private dining"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-gold/40" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-24 lg:py-36 bg-charcoal text-warm-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <GoldDivider className="mb-10" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-8">
              {t("about.philosophy.title")}
            </h2>
            <p className="font-accent italic text-warm-white/70 text-lg lg:text-xl leading-[1.8]">
              {t("about.philosophy.desc")}
            </p>
            <GoldDivider className="mt-10" />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
