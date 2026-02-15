/*
 * Velaré Footer — Cinematic Editorial Design
 * Deep charcoal background, gold accents, elegant typography.
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal text-warm-white/80">
      {/* Gold line */}
      <div
        className="h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #C4A265, transparent)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display text-2xl tracking-[0.08em] text-warm-white font-semibold">
              VELARÉ
            </span>
            <p className="font-accent italic text-gold/80 text-lg mt-3">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">
              {t("footer.navigation")}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/">
                <span className="font-body text-sm text-warm-white/60 hover:text-gold transition-colors duration-300">
                  {t("nav.home")}
                </span>
              </Link>
              <Link href="/services">
                <span className="font-body text-sm text-warm-white/60 hover:text-gold transition-colors duration-300">
                  {t("nav.services")}
                </span>
              </Link>
              <Link href="/about">
                <span className="font-body text-sm text-warm-white/60 hover:text-gold transition-colors duration-300">
                  {t("nav.about")}
                </span>
              </Link>
              <Link href="/contact">
                <span className="font-body text-sm text-warm-white/60 hover:text-gold transition-colors duration-300">
                  {t("nav.contact")}
                </span>
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">
              {t("footer.hours")}
            </h4>
            <div className="flex flex-col gap-2">
              <p className="font-body text-sm text-warm-white/60">
                {t("contact.info.hours.1")}
              </p>
              <p className="font-body text-sm text-warm-white/60">
                {t("contact.info.hours.2")}
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-6">
              {t("nav.contact")}
            </h4>
            <div className="flex flex-col gap-2">
              <p className="font-body text-sm text-warm-white/60">
                {t("contact.info.address")}
              </p>
              <p className="font-body text-sm text-warm-white/60">
                {t("contact.info.phone")}
              </p>
              <a
                href="mailto:reservations@velare.com"
                className="font-body text-sm text-warm-white/60 hover:text-gold transition-colors duration-300"
              >
                {t("contact.info.email")}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="h-px mt-16 mb-8"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(196,162,101,0.3), transparent)",
          }}
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warm-white/40 tracking-wider">
            &copy; {new Date().getFullYear()} Velaré. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-warm-white/40 hover:text-gold transition-colors tracking-wider">
              Instagram
            </a>
            <a href="#" className="font-body text-xs text-warm-white/40 hover:text-gold transition-colors tracking-wider">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
