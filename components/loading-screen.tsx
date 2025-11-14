"use client";

import Image from "next/image";

type LoadingScreenProps = {
  isExiting: boolean;
};

export default function LoadingScreen({ isExiting }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="mb-8 animate-fade-in-scale">
          <Image
            src="/images/SGG_logo.png"
            alt="SGG Construction LLC"
            width={240}
            height={240}
            className="mx-auto w-48 animate-pulse md:w-60"
            priority
          />
        </div>
        <div className="mb-4 flex items-center justify-center space-x-2">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="h-3 w-3 rounded-full bg-brand-blue-light animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
