import { useState } from "react";
import heroImage from "@/assets/hero-backyard.jpg";
import { Shield, Star, Phone } from "lucide-react";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", pest: "" });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Texas backyard with family enjoying pest-free outdoor living"
          className="w-full h-full object-cover"
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
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-dark-foreground">Austin's #1 Family-Safe Pest Control</span>
            </div>

            <h1
              className="animate-blur-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-dark-foreground"
            >
              Protect What
              <br />
              <span className="text-gold">Matters Most</span>
            </h1>

            <p className="animate-blur-up delay-200 mt-6 text-lg md:text-xl text-dark-foreground/70 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Family &amp; pet-friendly pest protection backed by our 100% money-back guarantee. Locally owned, deeply trusted.
            </p>

            <div className="animate-blur-up delay-300 flex flex-wrap items-center gap-6 mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
                <span className="text-dark-foreground/80 text-sm ml-2">4.9/5 on Google</span>
              </div>
              <div className="text-dark-foreground/60 text-sm">500+ Reviews</div>
            </div>

            <a
              href="tel:5125551234"
              className="animate-blur-up delay-400 mt-8 inline-flex items-center gap-2 text-gold font-semibold text-lg hover:underline md:hidden"
            >
              <Phone className="w-5 h-5" />
              Call Now: (512) 555-1234
            </a>
          </div>

          {/* Right - Glass form */}
          <div className="animate-blur-up delay-300">
            <div className="glass-dark rounded-2xl p-8 md:p-10 max-w-md mx-auto lg:ml-auto">
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
                  className="w-full px-4 py-3.5 rounded-xl bg-dark-foreground/10 border border-dark-foreground/15 text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-dark-foreground/10 border border-dark-foreground/15 text-dark-foreground placeholder:text-dark-foreground/40 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
                  required
                />
                <select
                  value={formData.pest}
                  onChange={(e) => setFormData({ ...formData, pest: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-dark-foreground/10 border border-dark-foreground/15 text-dark-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all appearance-none"
                  required
                >
                  <option value="" className="text-foreground">Select Pest Type</option>
                  <option value="ants" className="text-foreground">Ants</option>
                  <option value="roaches" className="text-foreground">Roaches</option>
                  <option value="spiders" className="text-foreground">Spiders</option>
                  <option value="mosquitoes" className="text-foreground">Mosquitoes</option>
                  <option value="termites" className="text-foreground">Termites</option>
                  <option value="rodents" className="text-foreground">Rodents</option>
                  <option value="other" className="text-foreground">Other</option>
                </select>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold text-base hover:brightness-110 transition-all shadow-lg shadow-accent/20"
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
