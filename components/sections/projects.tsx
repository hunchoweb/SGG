import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-brand-navy py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Featured{" "}
            <span className="text-brand-blue-light">projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-brand-blue-light" />
          <p className="mt-6 text-lg text-white/70">
            A cross-section of recent work spanning corporate, civic,
            residential, and industrial environments throughout the Pacific
            Northwest.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl bg-white/5 shadow-xl shadow-brand-navy/20 transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="absolute left-0 top-0 rounded-br-3xl bg-brand-blue px-4 py-2 text-xs font-semibold uppercase tracking-wide">
                {project.category}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-white/70">{project.location}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-full border border-white/70 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-brand-navy"
          >
            View full portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

