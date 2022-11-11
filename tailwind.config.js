/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      tiny: ["11px", "14px"],
      xs: ["12px", "16px"],
      "xs+": ["13px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    fontFamily: {
      inter: ["Inter"],
    },
    colors: {
      primary: "#6366f1",
      title: "#35353D",
      body: "#6A7185",
      white: "#FFFFFF",
      "main-light": "#F9F9F9",
      "primary-200": "#c7d2fe",
      "primary-100": "#e0e7ff",
      "gray-900": "#111827",
      "gray-800": "#1f2937",
      "gray-700": "#374151",
      "gray-500": "#6b7280",
      "gray-400": "#9ca3af",
      "gray-300": "#d1d5db",
      "gray-200": "#e5e7eb",
      "gray-100": "#f3f4f6",
      "sky-500": "#0ea5e9",
    },
    extend: {
      minHeight: {
        "3/5": "600px",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
