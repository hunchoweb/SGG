"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@sggconstruction.com",
    href: "mailto:info@sggconstruction.com",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError(
        "Contact form is not configured yet. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment."
      );
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
          subject: "New Contact Form Submission - SGG Construction LLC",
          from_name: "SGG Construction Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData(INITIAL_FORM);
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setError("We could not submit your message. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-brand-sky py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Work with us
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-brand-blue-dark md:text-5xl">
            Let&apos;s bring your vision to life
          </h2>
          <p className="mt-6 text-lg text-brand-slate/80">
            Share a few details about your project and a member of our team will
            connect within one business day.
          </p>

          <div className="mt-10 space-y-6">
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 rounded-2xl border border-transparent bg-white p-6 shadow-brand-sky/40 transition-all duration-200 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/20"
              >
                <div className="rounded-full bg-brand-blue/10 p-3 text-brand-blue">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-slate/70">
                    {label}
                  </p>
                  <p className="mt-1 text-base text-brand-blue-dark">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-6 shadow-brand-sky/40">
            <h3 className="text-lg font-semibold text-brand-blue-dark">
              Office hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-slate/80">
              <li className="flex justify-between">
                <span>Monday — Friday</span>
                <span className="font-medium text-brand-blue">9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-brand-sky/60 md:p-10">
          <h3 className="text-2xl font-semibold text-brand-blue-dark">
            Send us a message
          </h3>
          <p className="mt-2 text-sm text-brand-slate/70">
            All fields marked with * are required.
          </p>

          {isSubmitted ? (
            <div className="mt-8 rounded-2xl border border-brand-blue/30 bg-brand-blue/10 p-8 text-center text-brand-blue-dark">
              <CheckCircle2
                size={48}
                className="mx-auto text-brand-blue"
              />
              <h4 className="mt-4 text-xl font-semibold">
                Message received!
              </h4>
              <p className="mt-2 text-sm text-brand-slate/70">
                Thank you for reaching out. Our team will get in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {error && (
                <div className="rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-brand-slate/80"
                >
                  Full name *
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-brand-sky bg-white px-4 py-3 text-brand-blue-dark shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="Jordan Ellis"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-brand-slate/80"
                >
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border border-brand-sky bg-white px-4 py-3 text-brand-blue-dark shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-brand-slate/80"
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-brand-sky bg-white px-4 py-3 text-brand-blue-dark shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="(206) 555-1234"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-brand-slate/80"
                >
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-brand-sky bg-white px-4 py-3 text-brand-blue-dark shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  placeholder="Tell us about scope, timeline, and goals..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-3 font-semibold text-white shadow-lg shadow-brand-blue/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-light disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

