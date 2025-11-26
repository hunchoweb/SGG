import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServicesSectionProps = {
  isFullPage?: boolean;
};

export default function ServicesSection({
  isFullPage = false,
}: ServicesSectionProps) {
  if (!isFullPage) {
    // Minimal version for home page
    return (
      <section id="services" className="bg-brand-sky py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold text-brand-blue-dark md:text-5xl">
              Our <span className="text-brand-blue">Services</span>
            </h2>
            <p className="mt-6 text-lg text-brand-slate/80">
              Comprehensive construction solutions tailored to your needs — from
              new builds to renovations, we deliver excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group flex h-full flex-col rounded-3xl border border-transparent bg-white p-8 shadow-lg shadow-brand-sky/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-brand-blue/20"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-brand-blue-dark">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-slate/80 line-clamp-3">
                  {description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-blue px-8 py-3 font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-light"
            >
              See All Services
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Full version for services page
  return (
    <section id="services" className="bg-brand-sky pt-28 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-brand-blue-dark md:text-5xl">
            Our <span className="text-brand-blue">Services</span>
          </h2>
          <p className="mt-6 text-lg text-brand-slate/80">
            Comprehensive construction solutions tailored to your needs — from
            new builds to renovations, we deliver excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map(({ title, description, keyPoints, icon: Icon }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-3xl border border-transparent bg-white p-8 shadow-lg shadow-brand-sky/50 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-brand-blue/20"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-brand-blue-dark">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-slate/80">
                {description}
              </p>
              {keyPoints && keyPoints.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {keyPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-sm text-brand-slate/80"
                    >
                      <span
                        className="flex items-center text-brand-blue"
                        style={{ height: "1lh" }}
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-blue transition-transform duration-200 hover:translate-x-1"
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-r from-brand-blue to-brand-blue-light px-8 py-12 text-center text-white md:px-16">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Contact us Today to Get Started
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            Contact us today for a free consultation and detailed estimate.
            Let&apos;s discuss how SGG Construction can turn your construction
            dreams into reality.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-brand-blue-dark shadow-lg shadow-brand-blue/20 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Email Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
