/*
 * Velaré 404 Page — Cinematic Editorial Design
 * Elegant, on-brand 404 page with gold accents.
 */
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-charcoal">
        <span className="font-display text-[10rem] sm:text-[14rem] lg:text-[18rem] font-medium text-gold/10 leading-none select-none">
          404
        </span>
        <div className="mt-[-3rem] sm:mt-[-4rem]">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-warm-white mb-4">
            Page Not Found
          </h1>
          <div className="w-16 h-px bg-gold mx-auto my-6" />
          <p className="font-body text-warm-white/50 text-base lg:text-lg font-light max-w-md mx-auto mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <span className="inline-block px-10 py-4 border border-gold text-gold text-xs tracking-[0.25em] uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-500">
              {t("nav.home")}
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
