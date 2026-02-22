import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-6">
              Ready for a Pest-Free Home?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-10 max-w-md">
              Get your free inspection today. We'll create a custom treatment
              plan just for your property.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Call Us Anytime
                  </h4>
                  <a
                    href={`tel:${siteConfig.company.phone.replace(/\D/g, "")}`}
                    className="text-accent text-lg font-semibold hover:underline"
                  >
                    {siteConfig.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Service Area
                  </h4>
                  <p className="text-primary-foreground/55">
                    {siteConfig.company.serviceAreas}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold mb-1">
                    Hours
                  </h4>
                  <p className="text-primary-foreground/55">
                    Mon–Sat: 7AM – 7PM · Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">
            <h3 className="font-display text-2xl text-primary-foreground mb-6">
              Schedule Your Free Inspection
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll be in touch shortly.");
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              />
              <textarea
                placeholder="Tell us about your pest issue..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full px-4 py-3.5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold text-base hover:brightness-110 transition-all duration-300 cursor-pointer shadow-lg shadow-accent/20"
              >
                Book My Free Inspection →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
