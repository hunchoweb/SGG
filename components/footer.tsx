import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "About Us", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "New Construction",
  "Remodeling",
  "Renovation",
  "General Contractor",
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-sky bg-brand-navy text-brand-sky">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            SGG <span className="text-brand-blue-light">Construction LLC</span>
          </h3>
          <p className="mb-6 max-w-xs text-sm leading-relaxed text-brand-sky/80">
            Building quality structures with integrity and excellence since
            2008. SGG Construction LLC is your trusted partner for all
            construction, remodeling, renovation, and general contracting needs.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full bg-white/10 p-3 text-white transition-all duration-200 hover:bg-white/20 hover:text-brand-blue-light"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
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
          <div className="mt-6">
            <h5 className="mb-3 text-sm font-semibold text-white">
              Business Hours
            </h5>
            <ul className="space-y-2 text-xs text-brand-sky/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h5 className="mb-3 text-sm font-semibold text-white">
              Service Areas
            </h5>
            <p className="text-xs text-brand-sky/80">
              Proudly serving USA and surrounding areas. Contact us to confirm
              service availability in your location.
            </p>
          </div>
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
