/*
 * Velaré Contact Page — Cinematic Editorial Design
 * Split layout: contact form on one side, info + map on the other.
 * Premium form styling with gold accents.
 * Form sends email via mailto: link (static site, no backend).
 */
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/images";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import GoldDivider from "@/components/GoldDivider";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      // For a static site, we use mailto as the primary method
      const subject = encodeURIComponent(`Velaré Contact: ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:davidbakox@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success after a brief delay
      setTimeout(() => {
        setFormState("success");
        setName("");
        setEmail("");
        setMessage("");
      }, 1000);
    } catch {
      setFormState("error");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t("contact.info.address.label"),
      value: t("contact.info.address"),
    },
    {
      icon: Phone,
      label: t("contact.info.phone.label"),
      value: t("contact.info.phone"),
    },
    {
      icon: Mail,
      label: t("contact.info.email.label"),
      value: t("contact.info.email"),
    },
    {
      icon: Clock,
      label: t("contact.info.hours.label"),
      value: `${t("contact.info.hours.1")}\n${t("contact.info.hours.2")}`,
    },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      <Header />

      {/* ===== PAGE HERO ===== */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.privateDining}
            alt="Velaré private dining"
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
              {t("contact.headline")}
            </h1>
            <div className="w-16 h-px bg-gold mx-auto mt-8 mb-6" />
            <p className="font-body text-warm-white/60 text-base lg:text-lg font-light max-w-lg">
              {t("contact.subtitle")}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT CONTENT ===== */}
      <section className="py-24 lg:py-36 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Contact Form — 7 cols */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div>
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/60 mb-3 block">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("contact.form.name.placeholder")}
                      className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-body text-charcoal text-base outline-none transition-colors duration-300 placeholder:text-charcoal/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/60 mb-3 block">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("contact.form.email.placeholder")}
                      className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-body text-charcoal text-base outline-none transition-colors duration-300 placeholder:text-charcoal/30"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/60 mb-3 block">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t("contact.form.message.placeholder")}
                      className="w-full bg-transparent border-b border-charcoal/20 focus:border-gold py-3 font-body text-charcoal text-base outline-none transition-colors duration-300 resize-none placeholder:text-charcoal/30"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="inline-block px-10 py-4 bg-charcoal text-warm-white text-xs tracking-[0.25em] uppercase font-body hover:bg-gold hover:text-charcoal transition-all duration-500 disabled:opacity-50"
                    >
                      {formState === "sending"
                        ? t("contact.form.sending")
                        : t("contact.form.submit")}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {formState === "success" && (
                    <p className="font-body text-sm text-gold mt-4">
                      {t("contact.form.success")}
                    </p>
                  )}
                  {formState === "error" && (
                    <p className="font-body text-sm text-red-600 mt-4">
                      {t("contact.form.error")}
                    </p>
                  )}
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info — 5 cols */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <div className="space-y-10">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold/30">
                        <info.icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-1">
                          {info.label}
                        </p>
                        <p className="font-body text-charcoal/80 text-sm leading-relaxed whitespace-pre-line">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Decorative element */}
              <ScrollReveal delay={0.4}>
                <div className="mt-16 p-8 bg-charcoal text-center">
                  <p className="font-accent italic text-gold text-lg">
                    "Where Flavor Becomes Experience"
                  </p>
                  <GoldDivider className="mt-6" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
