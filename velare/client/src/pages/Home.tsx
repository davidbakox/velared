/*
 * Velaré Home Page — Cinematic Editorial Design
 * Full-bleed hero, asymmetric split-screen sections, parallax depth,
 * gold accent lines, editorial typography, staggered scroll reveals.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/images";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GoldDivider from "@/components/GoldDivider";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Velaré restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6"
          >
            <span className="font-accent italic text-gold text-lg lg:text-xl tracking-wide">
              Velaré
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-warm-white font-medium leading-[1.1] max-w-5xl text-balance"
          >
            {t("hero.headline")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="w-16 h-px bg-gold mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="font-body text-warm-white/70 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-light"
          >
            {t("hero.subheadline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-10"
          >
            <Link href="/contact">
              <span className="inline-block px-10 py-4 border border-gold text-gold text-xs sm:text-sm tracking-[0.25em] uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-500">
                {t("hero.cta")}
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold/0 via-gold to-gold/0 animate-pulse" />
        </motion.div>
      </section>

      {/* ===== EXPERIENCE SECTION — Split Screen ===== */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image — 7 cols */}
            <ScrollReveal className="lg:col-span-7" direction="left">
              <div className="relative">
                <img
                  src={IMAGES.dish}
                  alt="Gourmet plated dish"
                  className="w-full aspect-square object-cover"
                />
                {/* Gold corner accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-gold/40" />
              </div>
            </ScrollReveal>

            {/* Text — 5 cols */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
                  {t("experience.label")}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-6 mb-8 leading-[1.15]">
                  {t("experience.title")}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="w-12 h-px bg-gold mb-8" />
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <p className="font-body text-charcoal/70 text-base lg:text-lg leading-[1.8] font-light">
                  {t("experience.description")}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS SECTION ===== */}
      <section className="py-24 lg:py-36 bg-charcoal text-warm-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-20">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
              {t("highlights.label")}
            </span>
            <GoldDivider className="mt-8" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { title: t("highlights.cuisine.title"), desc: t("highlights.cuisine.desc"), num: "01" },
              { title: t("highlights.ambience.title"), desc: t("highlights.ambience.desc"), num: "02" },
              { title: t("highlights.wine.title"), desc: t("highlights.wine.desc"), num: "03" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center lg:text-left">
                  <span className="font-display text-6xl lg:text-7xl text-gold/15 font-medium leading-none">
                    {item.num}
                  </span>
                  <h3 className="font-display text-xl lg:text-2xl text-warm-white mt-4 mb-4">
                    {item.title}
                  </h3>
                  <div className="w-8 h-px bg-gold/50 mb-6 mx-auto lg:mx-0" />
                  <p className="font-body text-warm-white/60 text-sm lg:text-base leading-[1.8] font-light">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERIOR IMAGE BREAK ===== */}
      <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden">
        <img
          src={IMAGES.interior}
          alt="Velaré dining room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal className="text-center mb-16">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold">
              {t("testimonials.label")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-6">
              {t("testimonials.title")}
            </h2>
            <GoldDivider className="mt-8" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {[1, 2, 3].map((num, i) => (
              <ScrollReveal key={num} delay={i * 0.15}>
                <div className="text-center">
                  <p className="font-accent italic text-charcoal/80 text-lg lg:text-xl leading-[1.8] mb-8">
                    {t(`testimonial.${num}.text`)}
                  </p>
                  <div className="w-8 h-px bg-gold mx-auto mb-4" />
                  <p className="font-body text-sm text-charcoal font-medium tracking-wider">
                    {t(`testimonial.${num}.author`)}
                  </p>
                  <p className="font-body text-xs text-charcoal/50 tracking-wider mt-1">
                    {t(`testimonial.${num}.role`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.culinary}
            alt="Chef plating a dessert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <GoldDivider className="mb-10" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-6 leading-[1.15]">
              {t("cta.title")}
            </h2>
            <p className="font-body text-warm-white/60 text-base lg:text-lg leading-[1.8] font-light mb-10 max-w-xl mx-auto">
              {t("cta.description")}
            </p>
            <Link href="/contact">
              <span className="inline-block px-10 py-4 bg-gold text-charcoal text-xs sm:text-sm tracking-[0.25em] uppercase font-body font-medium hover:bg-gold-light transition-all duration-500">
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
