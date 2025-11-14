import { ClipboardCheck, FileCheck, Hammer, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    title: "Planning & Design",
    description:
      "We begin every project with detailed planning and design consultation. Our team works closely with you to understand your vision, requirements, and budget, creating comprehensive plans that serve as the blueprint for success.",
    icon: ClipboardCheck,
  },
  {
    title: "Permitting & Preparation",
    description:
      "We handle all necessary permits, inspections, and site preparation. Our knowledge of local building codes and regulations ensures your project moves forward without delays or complications.",
    icon: FileCheck,
  },
  {
    title: "Construction & Quality Control",
    description:
      "During construction, our experienced crew executes every phase with precision. Regular quality inspections and progress updates keep you informed and ensure the highest standards are maintained.",
    icon: Hammer,
  },
  {
    title: "Final Walkthrough & Warranty",
    description:
      "Before project completion, we conduct a thorough walkthrough to ensure every detail meets your expectations. All our work is backed by comprehensive warranties for your peace of mind.",
    icon: ShieldCheck,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold text-brand-blue-dark md:text-5xl">
            Our <span className="text-brand-blue">Process</span>
          </h2>
          <p className="mt-6 text-lg text-brand-slate/80">
            A proven 4-step approach that ensures your project is completed on
            time, within budget, and to the highest quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative flex h-full flex-col rounded-3xl border border-brand-sky bg-white p-8 shadow-brand-sky/20 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/20"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <step.icon size={28} />
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-semibold text-brand-blue">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-blue-dark">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-slate/80">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
