import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl text-center font-semibold text-brand-blue-dark md:text-5xl">
            Why Choose SGG Construction?
          </h2>
          <p className="text-lg text-center leading-relaxed text-brand-slate/80">
            At SGG Construction LLC, we don&apos;t just build structures—we
            build lasting relationships based on trust, quality, and exceptional
            service. For over 15 years, we&apos;ve been the preferred
            construction partner for homeowners and businesses who demand
            excellence. Our reputation is built on a foundation of integrity,
            skilled craftsmanship, and an unwavering commitment to exceeding our
            clients&apos; expectations on every project, large or small.
          </p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
