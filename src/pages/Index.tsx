import { useEffect } from "react";
import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config";

const Index = () => {
  useEffect(() => {
    // Inject dynamic theme colors from config
    const root = document.documentElement;
    Object.entries(siteConfig.theme).forEach(([key, value]) => {
      // Convert camelCase (primaryForeground) to kebab-case (--primary-foreground)
      const cssVarName = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      root.style.setProperty(cssVarName, value as string);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrustBadges />
      <ReviewsSection />
      <TeamSection />
      <BlogSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
