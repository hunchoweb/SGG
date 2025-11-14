import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/client-layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SGG Construction LLC | Professional Construction & Remodeling Services",
  description:
    "SGG Construction LLC offers expert new construction, remodeling, renovation, and general contractor services. Over 15 years of quality craftsmanship. Licensed, insured, and trusted. Call for your free estimate today!",
  keywords: [
    "construction company",
    "general contractor",
    "home remodeling",
    "renovation services",
    "new construction",
    "custom home builder",
    "commercial construction",
    "kitchen remodeling",
    "bathroom renovation",
  ],
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-brand-slate`}>
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}

