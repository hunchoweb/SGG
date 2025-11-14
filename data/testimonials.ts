export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "SGG Construction transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism made the entire remodeling process smooth and stress-free. We couldn't be happier with the results!",
    name: "Sarah and Michael Thompson",
  },
  {
    quote:
      "As a general contractor, SGG Construction managed our commercial building project flawlessly. They stayed on schedule, within budget, and the quality exceeded our expectations. Highly recommended!",
    name: "David Chen",
    role: "Business Owner",
  },
  {
    quote:
      "From our first consultation to the final walkthrough, SGG Construction was exceptional. They built our dream home exactly as we envisioned it. Professional, reliable, and truly talented craftsmen.",
    name: "Jennifer Martinez",
  },
];

