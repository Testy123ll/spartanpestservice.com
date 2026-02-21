import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is your pest treatment safe for kids and pets?",
    a: "Absolutely. We use EPA-approved, family-friendly products that are tough on pests but gentle around children, pets, and your garden. Our technicians will walk you through every product we use before treatment begins.",
  },
  {
    q: "How does your 100% money-back guarantee work?",
    a: "If pests return between scheduled treatments, we'll come back and re-treat at no extra charge. If you're still not satisfied, we'll refund your last service payment—no questions asked.",
  },
  {
    q: "How quickly can you get to my home?",
    a: "We offer same-day service for emergencies and typically schedule routine inspections within 24–48 hours. We serve Austin, Round Rock, Cedar Park, Pflugerville, and all surrounding communities.",
  },
  {
    q: "What pests are most common in Austin?",
    a: "Austin homeowners most frequently deal with fire ants, roaches (especially smoky browns), scorpions, mosquitoes, termites, and rodents. Our treatment plans are specifically designed for Central Texas pest pressure.",
  },
  {
    q: "Do I need to leave my house during treatment?",
    a: "For most treatments, no. Our eco-friendly products allow you to stay home comfortably. For specific services like termite fumigation, we'll let you know in advance if any preparation is needed.",
  },
  {
    q: "How often should I schedule pest control service?",
    a: "We recommend quarterly treatments for year-round protection in the Austin climate. However, we'll customize a plan based on your property, pest history, and budget during your free inspection.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section id="faq" className="py-20 md:py-28 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="reveal font-display text-3xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="reveal text-muted-foreground text-lg" style={{ transitionDelay: "0.1s" }}>
            Everything Austin homeowners want to know before booking.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="reveal bg-card rounded-xl border border-border overflow-hidden transition-shadow duration-300 hover:shadow-md"
                style={{ transitionDelay: `${i * 0.06 + 0.12}s` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-semibold text-foreground text-sm md:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
