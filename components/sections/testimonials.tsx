import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-brand-navy py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Client{" "}
            <span className="text-brand-blue-light">Testimonials</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Hear from our satisfied clients who have experienced the SGG Construction difference.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-3xl bg-white/5 p-8 shadow-lg shadow-brand-navy/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="flex-1 text-base leading-relaxed text-white/80">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 text-sm">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>
                {testimonial.role && (
                  <p className="text-white/70">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

