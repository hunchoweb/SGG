import PortfolioGrid from "@/components/projects/portfolio-grid";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | SGG Construction LLC",
  description:
    "Explore commercial, residential, industrial, and institutional projects delivered by SGG Construction LLC.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-brand-sky pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Our work
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-blue-dark md:text-5xl">
            Built for performance and longevity
          </h1>
          <p className="mt-6 text-lg text-brand-slate/80">
            Each project is anchored in collaboration, safety, and precision. We
            partner with owners to deliver spaces that support long-term
            operational goals.
          </p>
        </div>

        <div className="mt-16">
          <PortfolioGrid projects={projects} />
        </div>
      </div>
    </main>
  );
}

