import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark py-12 border-t border-dark-foreground/10">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display text-sm">S</span>
            </div>
            <span className="font-display text-lg text-dark-foreground">Shield Pest</span>
          </div>
          <p className="text-dark-foreground/50 text-sm leading-relaxed">
            Austin's trusted, family-owned pest control since 2009. Protecting your home, your way.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-dark-foreground mb-3 text-sm">Quick Links</h4>
          <div className="space-y-2">
            {["Services", "Guarantee", "Reviews", "Our Team", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="block text-dark-foreground/50 text-sm hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-dark-foreground mb-3 text-sm">Get In Touch</h4>
          <a href="tel:5125551234" className="flex items-center gap-2 text-gold font-semibold mb-2">
            <Phone className="w-4 h-4" />
            (512) 555-1234
          </a>
          <p className="text-dark-foreground/50 text-sm">
            info@shieldpest.com<br />
            Austin, TX 78701
          </p>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10 mt-10 pt-6 text-center">
        <p className="text-dark-foreground/30 text-xs">
          © 2025 Shield Pest Control. All rights reserved. Licensed by the Texas Department of Agriculture.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
