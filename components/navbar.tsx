"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavLink = {
  name: string;
  href: string;
  isSection?: boolean;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/#home", isSection: true },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionNavigation = (hash: string) => {
    const sectionId = hash.replace("#", "");
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    const isSectionLink = link.isSection ?? false;
    if (!isSectionLink) {
      router.push(link.href);
      return;
    }

    if (pathname === "/") {
      handleSectionNavigation(link.href);
    } else {
      router.push(link.href);
      setTimeout(() => handleSectionNavigation(link.href), 120);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-lg"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/SGG_logo.png"
            alt="SGG Construction LLC"
            width={140}
            height={140}
            className="h-24 w-auto transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link)}
              className="font-medium text-brand-slate transition-colors duration-200 hover:text-brand-blue"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={(event) =>
              handleNavClick(event, { name: "Get Started", href: "/contact" })
            }
            className="rounded-lg bg-brand-blue px-6 py-2 font-semibold text-white shadow-lg shadow-brand-blue/30 transition-colors duration-200 hover:bg-brand-blue-light"
          >
            Get Started
          </Link>
        </div>

        <button
          className="rounded-md p-2 text-brand-slate transition-colors duration-200 hover:text-brand-blue md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-[60vh] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="space-y-3 border-t border-brand-sky bg-white px-4 pb-6 pt-4 shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(event) => handleNavClick(event, link)}
              className="block rounded-md px-3 py-2 text-brand-slate transition-colors duration-200 hover:bg-brand-sky hover:text-brand-blue"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={(event) =>
              handleNavClick(event, { name: "Get Started", href: "/contact" })
            }
            className="block rounded-full bg-brand-blue px-6 py-3 text-center font-semibold text-white shadow-lg shadow-brand-blue/30 transition-colors duration-200 hover:bg-brand-blue-light"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
