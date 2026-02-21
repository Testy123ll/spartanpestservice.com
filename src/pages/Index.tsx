import StickyNav from "@/components/StickyNav";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <ServicesSection />
      <TrustBadges />
      <ReviewsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
