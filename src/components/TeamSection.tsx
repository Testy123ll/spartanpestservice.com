import { useEffect, useRef } from "react";

const team = [
  { name: "Mike Rodriguez", role: "Owner & Lead Technician", years: "15 years experience" },
  { name: "Ashley Chen", role: "Customer Success", years: "8 years experience" },
  { name: "Carlos Jimenez", role: "Termite Specialist", years: "12 years experience" },
  { name: "Lisa Park", role: "Wildlife & Rodent Expert", years: "10 years experience" },
];

const TeamSection = () => {
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
    <section id="team" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal font-display text-3xl md:text-5xl text-foreground mb-4">
            Meet Your Local Team
          </h2>
          <p className="reveal text-muted-foreground text-lg max-w-xl mx-auto" style={{ transitionDelay: "0.1s" }}>
            Real people from Austin who care about your family's safety.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="reveal text-center group"
              style={{ transitionDelay: `${i * 0.1 + 0.1}s` }}
            >
              <div className="w-28 h-28 mx-auto rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <span className="font-display text-3xl text-primary">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.role}</p>
              <p className="text-accent text-xs font-semibold mt-1">{member.years}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
