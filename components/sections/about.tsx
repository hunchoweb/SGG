import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-brand-card animate-slide-in-left">
            <Image
              src="/images/About.jpg"
              alt="SGG Construction team at work"
              width={900}
              height={700}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
          <div className="absolute -bottom-10 -right-8 hidden rounded-2xl bg-white p-6 shadow-2xl shadow-brand-blue/20 md:block">
            <p className="text-3xl font-semibold text-brand-blue-dark md:text-4xl">
              15+
            </p>
            <p className="text-xs uppercase tracking-wide text-brand-slate/70">
              Years delivering excellence
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-brand-blue-dark md:text-5xl">
            Why Choose SGG Construction?
          </h2>
          <div className="h-1 w-16 rounded bg-brand-blue" />
          <p className="text-lg leading-relaxed text-brand-slate/80">
            At SGG Construction LLC, we don&apos;t just build structures—we
            build lasting relationships based on trust, quality, and exceptional
            service. For over 15 years, we&apos;ve been the preferred
            construction partner for homeowners and businesses who demand
            excellence. Our reputation is built on a foundation of integrity,
            skilled craftsmanship, and an unwavering commitment to exceeding our
            clients&apos; expectations on every project, large or small.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-light"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
