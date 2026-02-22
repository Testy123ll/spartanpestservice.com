import { Phone } from "lucide-react";
import { siteConfig } from "@/config";

const Footer = () => (
  <footer className="bg-dark py-12 border-t border-dark-foreground/10">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              {siteConfig.company.logoUrl ? (
                <img src={siteConfig.company.logoUrl} alt={siteConfig.company.name} className="w-full h-full object-contain" />
              ) : (
                <span className="text-primary-foreground font-display font-bold text-sm tracking-widest">{siteConfig.company.shortName.substring(0, 2).toUpperCase()}</span>
              )}
            </div>
            <span className="font-display text-lg text-dark-foreground">{siteConfig.company.name}</span>
          </div>
          <p className="text-dark-foreground/50 text-sm leading-relaxed">
            {siteConfig.company.city}'s trusted, family-owned pest control since 2009. Protecting your home, your way.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-dark-foreground mb-3 text-sm">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Guarantee", "Reviews", "Our Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block text-dark-foreground/50 text-sm hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-dark-foreground mb-3 text-sm">Get In Touch</h4>
          <a href={`tel:${siteConfig.company.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-accent font-semibold mb-2">
            <Phone className="w-4 h-4" />
            {siteConfig.company.phone}
          </a>
          <p className="text-dark-foreground/50 text-sm">
            {siteConfig.company.email}<br />
            {siteConfig.company.city}, {siteConfig.company.state} {siteConfig.company.zip}
          </p>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 mt-10 pt-6 text-center">
        <p className="text-dark-foreground/30 text-xs">
          © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved. Licensed by the {siteConfig.company.state === 'TX' ? 'Texas' : siteConfig.company.state} Department of Agriculture.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
