"use client";

import { ReactNode, useEffect, useState } from "react";
import LoadingScreen from "@/components/loading-screen";

type ClientLayoutProps = {
  children: ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 1600);

    const removeTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2100);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen isExiting={isExiting} />;
  }

  return <div className="bg-brand-white">{children}</div>;
}

