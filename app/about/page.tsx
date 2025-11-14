import Image from "next/image";
import Link from "next/link";
import { Award, ClipboardList, Users } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10+", label: "Projects Completed" },
  { icon: ClipboardList, value: "100%", label: "Client Satisfaction" },
];

export const metadata = {
  title: "About Us | SGG Construction LLC",
  description:
    "Learn about SGG Construction LLC - your trusted construction partner for over 15 years. Discover our commitment to quality, integrity, and exceptional service in construction, remodeling, and renovation.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-white py-20 md:py-28">
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
            <h1 className="text-3xl font-semibold text-brand-blue-dark md:text-5xl">
              Why Choose SGG Construction?
            </h1>
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
            <p className="text-lg leading-relaxed text-brand-slate/80">
              What sets us apart is our comprehensive approach to construction. We
              combine decades of industry experience with cutting-edge techniques
              and materials to deliver results that stand the test of time. Our
              team of licensed professionals, skilled craftsmen, and dedicated
              project managers work in perfect harmony to ensure every detail is
              executed flawlessly. From initial consultation to final inspection,
              we&apos;re with you every step of the way.
            </p>
            <p className="text-lg leading-relaxed text-brand-slate/80">
              We understand that construction projects represent significant
              investments in your future. That&apos;s why we treat every job as if
              it were our own, maintaining the highest standards of quality,
              safety, and professionalism. Whether you&apos;re building your dream
              home, renovating a commercial property, or managing a complex
              remodeling project, SGG Construction LLC brings the expertise,
              resources, and dedication needed to bring your vision to life—on
              time and within budget.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-brand-sky bg-white px-4 py-6 text-center shadow-sm shadow-brand-sky/30"
                >
                  <div className="mb-3 flex justify-center text-brand-blue">
                    <Icon size={30} />
                  </div>
                  <p className="text-2xl font-semibold text-brand-blue-dark">
                    {value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-brand-slate/70">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3 font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

