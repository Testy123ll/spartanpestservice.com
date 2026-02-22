import { Home, Shield, Sparkles, AlertCircle, Bug, Search, Wrench } from "lucide-react";

export const siteConfig = {
  company: {
    name: "Spartan Pest Service, LLC.",
    shortName: "Spartan Pest",
    phone: "(512) 960-0696",
    email: "John@spartanpestservice.com",
    address: "Austin, Texas",
    city: "Austin",
    yearFounded: "2020",
    logoUrl: "https://i0.wp.com/spartanpestservice.com/wp-content/uploads/2020/07/cropped-TextBlack_HelmetRed.png?fit=1524610&ssl=1", // Using text fallback
  },
  theme: {
    // Spartan-themed colors (Crimson Red and Iron Gray)
    primary: "0 70% 41%",       // Crimson Red
    accent: "0 0% 25%",         // Iron Gray
    background: "0 0% 100%",
    foreground: "240 10% 4%",
  },
  hero: {
    badge: "Family-Owned Pest Control",
    headline: "Defend Your Home with Spartan Pest Service",
    subheadline: "Specialized pest control plans that fit your needs and budget for both residential and commercial properties in Austin.",
    ctaText: "Schedule Consultation",
    image: "https://spartanpestservice.com/wp-content/uploads/2020/07/ed-van-duijn-UUdJ-0LQs0M-unsplash-scaled.jpg",
  },
  services: [
    {
      id: "residential",
      title: "Residential Pest Control",
      description: "One-time treatments, monthly, bi-monthly, and quarterly in-home spraying.",
      icon: Home,
    },
    {
      id: "commercial",
      title: "Commercial Pest Control",
      description: "Prompt and quality customer service for businesses around the Austin metro area.",
      icon: Wrench,
    },
    {
      id: "specialized",
      title: "Specialized Treatments",
      description: "Targeted elimination for ants, mice, wasps, cockroaches, and more.",
      icon: Bug,
    },
  ],  about: {
    sectionTitle: "About Us",
    headline: "Protecting Homes & Businesses",
    description:
      "We are committed to providing top-tier pest management for families and businesses. Our integrated approach ensures complete eradication while remaining safe for kids, pets, and the environment. We pride ourselves on reliability, transparent pricing, and lasting results.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80",
  },
  blog: {
    sectionTitle: "Pest Control Tips & News",
    articles: [
      {
        id: "1",
        title: "How to Keep Mosquitoes Away This Summer",
        excerpt:
          "Simple steps you can take around your yard to eliminate standing water and reduce mosquito populations.",
        date: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1518563233816-5636b04f2168?auto=format&fit=crop&q=80",
      },
      {
        id: "2",
        title: "Signs You Might Have a Termite Problem",
        excerpt:
          "Don't let termites destroy your home. Learn the early warning signs to look out for.",
        date: "April 02, 2026",
        image: "https://images.unsplash.com/photo-1615555416049-d045d4a9ef3c?auto=format&fit=crop&q=80",
      },
      {
        id: "3",
        title: "Organic Pest Control vs. Traditional",
        excerpt:
          "Wondering if organic pest control is right for your family? We break down the pros and cons.",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
      },
    ],
  },
  faqs: [
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
      a: "We offer same-day service for emergencies and typically schedule routine inspections within 24–48 hours. We serve the greater metro area and surrounding suburbs.",
    },
    {
      q: "What pests are most common in this area?",
      a: "Homeowners most frequently deal with fire ants, roaches, scorpions, mosquitoes, termites, and rodents. Our treatment plans are specifically designed for local pest pressure.",
    },
    {
      q: "Do I need to leave my house during treatment?",
      a: "For most treatments, no. Our eco-friendly products allow you to stay home comfortably. For specific services like termite fumigation, we'll let you know in advance if any preparation is needed.",
    },
    {
      q: "How often should I schedule pest control service?",
      a: "We recommend quarterly treatments for year-round protection. However, we'll customize a plan based on your property, pest history, and budget during your free inspection.",
    },
  ],
  reviews: {
    averageRating: 5.0,
    totalReviews: 137,
    testimonials: [
      {
        id: 1,
        author: "Sarah K.",
        rating: 5,
        text: "Spartan is my new go to company for great customer service!",
      },
      {
        id: 2,
        author: "Jason R.",
        rating: 5,
        text: "John helped us find where mice were entering our home and monitored our problem from start to finish. So glad we chose to switch to Spartan Pest Service.",
      },
      {
        id: 3,
        author: "Monica P.",
        rating: 5,
        text: "John was friendly, professional, and thorough. He was able to give us recommendations for things we could do around the house to keep the bugs away.",
      }
    ]
  },
  team: [
    {
      name: "John",
      role: "Owner & Lead Technician",
      description: "Dedicated to providing prompt and quality customer service with a satisfaction guarantee.",
      image: "",
    }
  ],
  guarantees: [
    {
      title: "Satisfaction Guarantee",
      description: "We are committed to resolving your pest issues completely.",
      icon: Shield,
    },
    {
      title: "Thorough Inspections",
      description: "We meticulously inspect your property to find the root cause.",
      icon: Search,
    },
    {
      title: "Preventative Approach",
      description: "We provide recommendations to keep bugs away in the long term.",
      icon: Sparkles,
    },
  ]
};
