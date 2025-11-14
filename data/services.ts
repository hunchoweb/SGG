import type { ComponentType } from "react";
import {
  Building2,
  Hammer,
  HardHat,
  Home,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  keyPoints: string[];
  icon: ComponentType<{ size?: number; className?: string }>;
};

export const services: Service[] = [
  {
    title: "New Construction",
    description:
      "From ground breaking to final walkthrough, SGG Construction LLC brings your vision to life with precision and expertise. Whether you're planning a custom home, commercial building, or multi-unit development, our experienced team manages every detail with uncompromising quality standards. We use premium materials, modern construction techniques, and proven project management to deliver structures that exceed expectations and stand strong for generations.",
    keyPoints: [
      "Custom residential homes",
      "Commercial buildings",
      "Multi-family developments",
      "Site preparation and foundation work",
      "Energy-efficient construction practices",
      "Licensed and fully insured",
    ],
    icon: Home,
  },
  {
    title: "Remodeling",
    description:
      "Transform your existing space into the home or business environment you've always envisioned. SGG Construction specializes in complete remodeling projects that enhance functionality, increase property value, and reflect your personal style. From modern kitchen upgrades to luxurious bathroom renovations, we handle every aspect of your remodel with craftsmanship and attention to detail. Our designers work closely with you to create spaces that are both beautiful and practical.",
    keyPoints: [
      "Kitchen remodeling and upgrades",
      "Bathroom renovations",
      "Basement finishing",
      "Room additions and expansions",
      "Open floor plan conversions",
      "Custom cabinetry and fixtures",
    ],
    icon: Hammer,
  },
  {
    title: "Renovation",
    description:
      "Breathe new life into older structures with our comprehensive renovation services. SGG Construction preserves the character and charm of your property while updating systems, improving efficiency, and modernizing aesthetics. We specialize in historic restoration, adaptive reuse projects, and complete property makeovers. Our team understands the unique challenges of renovation work and delivers solutions that honor the past while embracing the future.",
    keyPoints: [
      "Historic building restoration",
      "Structural repairs and upgrades",
      "System modernization (electrical, plumbing, HVAC)",
      "Exterior facade renewal",
      "Interior space reconfiguration",
      "Code compliance updates",
    ],
    icon: Building2,
  },
  {
    title: "General Contractor",
    description:
      "As your trusted general contractor, SGG Construction LLC provides complete project oversight and coordination from conception to completion. We manage all subcontractors, ensure quality control, maintain schedules, and keep your project on budget. Our comprehensive approach means you have a single point of contact for all construction needs, eliminating stress and ensuring seamless communication throughout the entire building process.",
    keyPoints: [
      "Complete project management",
      "Subcontractor coordination",
      "Budget and schedule management",
      "Building permit acquisition",
      "Quality control and inspections",
      "Transparent communication and reporting",
    ],
    icon: HardHat,
  },
];

