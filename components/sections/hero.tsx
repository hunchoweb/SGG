"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/residential2.jpg"
          alt="SGG Construction residential project"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/90 via-brand-blue/80 to-brand-blue-light/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
        <h1 className="animate-fade-in-up text-4xl font-medium md:text-6xl lg:text-7xl">
          Building Dreams Into{" "}
          <span className="text-brand-blue-light">Reality</span>
        </h1>
        <p className="mt-6 text-lg font-light text-white/80 md:text-xl">
          Professional Construction Services You Can Trust
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-blue-dark shadow-2xl shadow-brand-blue/20 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Get Free Estimate
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/70 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-white/10"
          >
            View Recent Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="flex h-12 w-6 items-start justify-center rounded-full border-2 border-white/70 p-2">
          <div className="h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
