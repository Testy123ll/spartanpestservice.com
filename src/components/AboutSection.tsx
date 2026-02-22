import { useEffect, useRef } from "react";
import { siteConfig } from "@/config";
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-28 bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="reveal absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>
            <img
              src={((siteConfig as any).about?.image || "")}
              alt="About Us"
              className="reveal relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="reveal font-display text-3xl md:text-5xl text-foreground mb-6">
              {((siteConfig as any).about?.sectionTitle || "About Us")}
            </h2>
            <h3 className="reveal text-2xl text-foreground/90 font-medium mb-4" style={{ transitionDelay: "0.1s" }}>
              {((siteConfig as any).about?.headline || "")}
            </h3>
            <p className="reveal text-muted-foreground text-lg leading-relaxed mb-8" style={{ transitionDelay: "0.2s" }}>
              {((siteConfig as any).about?.description || "")}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {(((siteConfig as any).guarantees || siteConfig.trustBadges || []) as any[]).map((guarantee, i) => (
                <div 
                  key={guarantee.title} 
                  className="reveal flex items-start gap-3"
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">{guarantee.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
