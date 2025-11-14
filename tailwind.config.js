/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary blue from logo circle
        "brand-blue": {
          DEFAULT: "#1e40af", // Primary blue (matching logo circle)
          light: "#3b82f6", // Lighter blue for hover states
          dark: "#1e3a8a", // Darker blue for depth
          lighter: "#60a5fa", // Even lighter for accents
        },
        // White theme
        "brand-white": {
          DEFAULT: "#ffffff", // Pure white
          soft: "#f8fafc", // Soft white for backgrounds
          off: "#f1f5f9", // Off-white for subtle backgrounds
        },
        // Dark grey for text (matching "CONSTRUCTION LLC" text)
        "brand-slate": {
          DEFAULT: "#334155", // Primary text color
          dark: "#1e293b", // Darker text
          light: "#64748b", // Lighter text for secondary content
        },
        // Sky blue for subtle backgrounds and accents
        "brand-sky": {
          DEFAULT: "#e0f2fe", // Light sky blue
          light: "#f0f9ff", // Very light sky
          dark: "#bae6fd", // Darker sky
        },
        // Legacy support (mapped to new colors)
        "brand-navy": "#1e3a8a", // Maps to brand-blue-dark
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "brand-card": "0 10px 30px rgba(30, 64, 175, 0.12)", // Updated with new blue
        "brand-blue": "0 4px 14px rgba(30, 64, 175, 0.25)", // Blue shadow
      },
    },
  },
  plugins: [],
};
