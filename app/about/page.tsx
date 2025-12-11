import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Why Choose SGG Construction? | SGG Construction LLC",
  description:
    "Learn about SGG Construction LLC - your trusted construction partner for over 15 years. Discover our commitment to quality, integrity, and exceptional service in construction, remodeling, and renovation.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-3xl font-semibold text-brand-blue-dark md:text-5xl">
              Why Choose SGG Construction?
            </h1>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-blue" />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-brand-card animate-slide-in-left">
                <Image
                  src="/images/commercial1.jpeg"
                  alt="SGG Construction team at work"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-brand-slate/80">
                At SGG Construction LLC, we don&apos;t just build structures—we
                build lasting relationships based on trust, quality, and
                exceptional service. For several years, we&apos;ve been the
                preferred construction partner for homeowners and businesses who
                demand excellence. Our reputation is built on a foundation of
                integrity, skilled craftsmanship, and an unwavering commitment
                to exceeding our clients&apos; expectations on every project,
                large or small.
              </p>
              <p className="text-lg leading-relaxed text-brand-slate/80">
                What sets us apart is our comprehensive approach to
                construction. We combine years of industry experience with
                cutting-edge techniques and materials to deliver results that
                stand the test of time. Our team of licensed professionals,
                skilled craftsmen, and dedicated project managers work in
                perfect harmony to ensure every detail is executed flawlessly.
                From initial consultation to final inspection, we&apos;re with
                you every step of the way.
              </p>
              <p className="text-lg leading-relaxed text-brand-slate/80">
                We understand that construction projects represent significant
                investments in your future. That&apos;s why we treat every job
                as if it were our own, maintaining the highest standards of
                quality, safety, and professionalism. Whether you&apos;re
                building your dream home, renovating a commercial property, or
                managing a complex remodeling project, SGG Construction LLC
                brings the expertise, resources, and dedication needed to bring
                your vision to life—on time and within budget.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-light"
              >
                Schedule a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
