import { useState } from "react";
import { Shield, Star, Phone } from "lucide-react";
import { siteConfig } from "@/config";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", pest: "" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={(siteConfig.media?.heroImage || (siteConfig as any).hero?.image || "")}
          alt={`Beautiful ${siteConfig.company.city || siteConfig.company.state || 'local'} backyard with family enjoying pest-free outdoor living`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/70 via-dark/40 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Headline */}
          <div className="text-center lg:text-left">
            <div className="animate-blur-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6 text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-dark-foreground">{siteConfig.company.city}'s #1 Family-Safe Pest Control</span>
            </div>

            <h1
              className="animate-blur-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-dark-foreground"
            >
              Protect What
              <br />
              <span className="text-accent">Matters Most</span>
            </h1>

            <p className="animate-blur-up delay-200 mt-6 text-lg md:text-xl text-dark-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Family &amp; pet-friendly pest protection backed by our Happiness Promise. Locally owned, deeply trusted.
            </p>

            <div className="animate-blur-up delay-300 flex flex-wrap items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                {[...Array(Math.floor(siteConfig.reviews.averageRating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
                {(siteConfig.reviews.averageRating % 1 !== 0) && <Star className="w-5 h-5 fill-accent/50 text-accent" />}
                <span className="text-dark-foreground/80 text-sm ml-2">{siteConfig.reviews.averageRating}/5 on Google</span>
              </div>
              <div className="text-dark-foreground/60 text-sm">{siteConfig.reviews.totalReviews.toLocaleString()}+ Reviews</div>
            </div>

            <a
              href={`tel:${siteConfig.company.phone.replace(/\D/g, "")}`}
              className="animate-blur-up delay-400 mt-8 inline-flex items-center gap-2 text-accent font-semibold text-lg hover:underline transition-colors duration-200 cursor-pointer md:hidden"
            >
              <Phone className="w-5 h-5" />
              Call Now: {siteConfig.company.phone}
            </a>
          </div>

          {/* Right - Glass form */}
          <div className="animate-blur-up delay-300">
            <div className="glass-dark rounded-2xl p-8 md:p-10 max-w-md mx-auto lg:ml-auto">
              <div className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-5 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" /> 100% Pet & Family Safe
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-dark-foreground mb-2">
                Get a Free Quote
              </h2>
              <p className="text-dark-foreground/60 text-sm mb-6">
                No obligation · Response within 30 minutes
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll call you within 30 minutes.");
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all font-medium"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all font-medium"
                  required
                />
                <select
                  value={formData.pest}
                  onChange={(e) => setFormData({ ...formData, pest: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-background/80 border border-border/50 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200 cursor-pointer appearance-none font-medium"
                  required
                >
                  <option value="" className="text-foreground">Select Pest Type</option>
                  {siteConfig.services.map(s => (
                    <option key={s.id} value={s.id} className="text-foreground">{s.formLabel}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold text-base hover:brightness-110 transition-all duration-300 cursor-pointer shadow-lg shadow-accent/20"
                >
                  Get My Free Quote →
                </button>
              </form>

              <p className="text-dark-foreground/40 text-xs mt-4 text-center">
                🔒 Your info is safe. We never spam or share your data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
