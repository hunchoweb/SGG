import Link from "next/link";
import { Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "New Construction",
  "Remodeling",
  "Renovation",
  "General Contractor",
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-sky bg-brand-navy text-brand-sky">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            SGG <span className="text-brand-blue-light">Construction LLC</span>
          </h3>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <span className="text-brand-blue-light">›</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-white">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            {services.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-white"
                >
                  <span className="text-brand-blue-light">›</span>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-lg font-semibold text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Mail
                className="text-brand-blue-light"
                style={{ width: "1lh", height: "1lh" }}
              />
              <a
                href="mailto:info@sggconstruction.com"
                className="transition-colors duration-200 hover:text-white"
              >
                info@sggconstruction.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-brand-sky/80 sm:px-6 md:flex-row lg:px-8">
          <p>© {currentYear} SGG Construction LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
