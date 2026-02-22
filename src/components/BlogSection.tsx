import { useEffect, useRef } from "react";
import { siteConfig } from "@/config";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
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
    <section id="blog" className="py-20 md:py-28 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal font-display text-3xl md:text-5xl text-foreground mb-4">
            {siteConfig.blog.sectionTitle}
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-xl mx-auto" style={{ transitionDelay: "0.1s" }}>
            Latest insights, tips, and news to keep your property pest-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.blog.articles.map((article, i) => (
            <article 
              key={article.id} 
              className="reveal group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary mb-3 font-medium">{article.date}</p>
                <h3 className="font-display text-xl text-foreground mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <button className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
