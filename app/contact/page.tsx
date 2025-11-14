import ContactSection from "@/components/sections/contact";

export const metadata = {
  title: "Contact | SGG Construction LLC",
  description:
    "Connect with SGG Construction LLC to discuss your upcoming construction project in the Pacific Northwest.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="bg-brand-blue-dark pt-28 pb-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Tell us about your project
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Whether you’re planning ground-up construction or a complex
            renovation, we’re ready to collaborate. Share a few details and we’ll
            connect within one business day.
          </p>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}

