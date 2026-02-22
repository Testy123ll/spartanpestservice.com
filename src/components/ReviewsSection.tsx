import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/config";

const ReviewsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-2 mb-4">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold text-muted-foreground">GOOGLE REVIEWS</span>
          </div>
          <h2 className="reveal font-display text-3xl md:text-5xl text-foreground mb-4" style={{ transitionDelay: "0.05s" }}>
            What Our Neighbors Say
          </h2>
          <div className="reveal flex items-center justify-center gap-1.5 mb-2" style={{ transitionDelay: "0.1s" }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="reveal text-muted-foreground" style={{ transitionDelay: "0.15s" }}>{siteConfig.reviews.averageRating} average from {siteConfig.reviews.totalReviews.toLocaleString()}+ verified reviews</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.reviews.testimonials.map((review, i) => (
            <div
              key={review.name}
              className="reveal bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 0.08 + 0.15}s` }}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-foreground font-semibold text-sm">{review.name}</span>
                <span className="text-muted-foreground text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
