import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/config";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Guarantee", href: "#guarantee" },
  { label: "Reviews", href: "#reviews" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">{siteConfig.company.shortName.charAt(0)}</span>
          </div>
          <span
            className={`font-display text-xl transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-dark-foreground"
            }`}
          >
            {siteConfig.company.shortName}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-accent ${
                scrolled ? "text-foreground" : "text-dark-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Phone + CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.company.phone.replace(/\D/g, "")}`}
            className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-accent"
            }`}
          >
            <Phone className="w-4 h-4" />
            {siteConfig.company.phone}
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all duration-300 cursor-pointer"
          >
            Free Quote
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-200 cursor-pointer ${
              scrolled ? "text-foreground" : "text-dark-foreground"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-xl border-b border-border px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-foreground font-medium text-base border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.company.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-primary font-semibold mt-4"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.company.phone}
          </a>
        </div>
      )}
    </nav>
  );
};

export default StickyNav;
