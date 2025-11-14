import {
  Award,
  MessageSquare,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const commitments = [
  {
    title: "Quality Craftsmanship",
    description:
      "Every project we undertake reflects our commitment to superior workmanship. We use only premium materials and employ skilled professionals who take pride in their craft.",
    icon: Award,
  },
  {
    title: "Transparent Communication",
    description:
      "We believe in keeping our clients informed every step of the way. Regular updates, open dialogue, and honest communication are cornerstones of our business approach.",
    icon: MessageSquare,
  },
  {
    title: "Safety First",
    description:
      "The safety of our workers, clients, and the community is paramount. We maintain rigorous safety standards and ensure all team members are properly trained and equipped.",
    icon: ShieldCheck,
  },
  {
    title: "Environmental Responsibility",
    description:
      "We're committed to sustainable building practices, offering eco-friendly options and minimizing waste on every project. Building responsibly for today and tomorrow.",
    icon: Leaf,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-sky py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-brand-blue-dark md:text-5xl">
            Our{" "}
            <span className="text-brand-blue">Commitment</span>
          </h2>
          <p className="mt-6 text-lg text-brand-slate/80">
            The core values that guide every project and define our promise to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {commitments.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group h-full rounded-3xl border border-transparent bg-white p-8 shadow-lg shadow-brand-sky/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-brand-blue/20"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue-dark">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate/80">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

