import { useEffect, useRef } from "react";
import { siteConfig } from "@/config";

const TrustBadges = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = ref.current?.querySelectorAll(".reveal");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="guarantee" className="py-20 md:py-28 bg-primary" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal font-display text-3xl md:text-5xl text-primary-foreground mb-4">
            Why {siteConfig.company.city} Families Trust Us
          </h2>
          <p className="reveal text-primary-foreground/60 text-lg max-w-2xl mx-auto" style={{ transitionDelay: "0.1s" }}>
            Locally owned and operated for over 15 years—we treat your home like our own.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {((siteConfig.trustBadges || (siteConfig as any).guarantees || []) as any[]).map((badge, i) => (
            <div
              key={badge.title}
              className="reveal group p-7 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 0.1 + 0.15}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <badge.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-primary-foreground mb-2">{badge.title}</h3>
              <p className="text-primary-foreground/55 text-sm leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
