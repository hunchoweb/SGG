import ServicesSection from "@/components/sections/services";

export const metadata = {
  title: "Services | SGG Construction LLC",
  description:
    "Explore our comprehensive construction services including new construction, remodeling, renovation, and general contracting. Professional construction solutions tailored to your needs.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection isFullPage={true} />
    </main>
  );
}

