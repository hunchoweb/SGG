"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";

type PortfolioGridProps = {
  projects: Project[];
};

const filters: Array<Project["category"] | "All"> = [
  "All",
  "Commercial",
  "Residential",
];

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] =
    useState<Project["category"] | "All">("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 ${
              activeFilter === filter
                ? "border-brand-blue bg-brand-blue text-white shadow-brand-blue/30"
                : "border-brand-sky bg-white text-brand-slate/80 hover:border-brand-blue/60 hover:text-brand-blue"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-3xl border border-brand-sky bg-white shadow-brand-sky/40 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-brand-blue/20"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={620}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {project.category}
              </div>
            </div>
            <div className="space-y-2 p-6">
              <h3 className="text-xl font-semibold text-brand-blue-dark">
                {project.title}
              </h3>
              <p className="text-sm font-medium uppercase tracking-[0.08em] text-brand-blue/80">
                {project.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

