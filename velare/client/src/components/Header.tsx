/*
 * Velaré Header — Cinematic Editorial Design
 * Transparent header that becomes solid on scroll.
 * Gold accent lines, elegant serif logo, premium language switcher.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "hu", label: "HU" },
  { code: "ro", label: "RO" },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/">
              <span className="font-display text-2xl lg:text-3xl font-semibold tracking-[0.08em] text-warm-white hover:text-gold transition-colors duration-300">
                VELARÉ
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`font-body text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                      location === link.href
                        ? "text-gold"
                        : "text-warm-white/80 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Right side: Language + Reserve */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 border border-warm-white/20 rounded-sm px-1">
                {languages.map((lang, i) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-1.5 text-xs tracking-[0.15em] font-body transition-all duration-300 ${
                      language === lang.code
                        ? "text-gold bg-warm-white/10"
                        : "text-warm-white/60 hover:text-warm-white"
                    } ${i < languages.length - 1 ? "border-r border-warm-white/10" : ""}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              {/* Reserve Button */}
              <Link href="/contact">
                <span className="inline-block px-6 py-2.5 border border-gold text-gold text-xs tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-300">
                  {t("nav.reserve")}
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-warm-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Gold accent line */}
        <div
          className={`h-px transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent, #C4A265, transparent)",
          }}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`font-display text-2xl tracking-[0.1em] transition-colors duration-300 ${
                        location === link.href
                          ? "text-gold"
                          : "text-warm-white/80 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="flex items-center gap-4 mt-4"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-4 py-2 text-sm tracking-[0.15em] font-body transition-all duration-300 border ${
                      language === lang.code
                        ? "text-gold border-gold"
                        : "text-warm-white/50 border-warm-white/20 hover:text-warm-white hover:border-warm-white/40"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </motion.div>

              {/* Mobile Reserve */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4"
              >
                <Link href="/contact">
                  <span className="inline-block px-8 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-300">
                    {t("nav.reserve")}
                  </span>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
