/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#002B5B", // Deep Royal Blue
          light: "#1F4E79", // Lighter Blue
        },
        accent: {
          DEFAULT: "#FF8C00", // Vibrant Amber/Orange
          hover: "#E07B00",
        },
        neutral: {
          100: "#F3F4F6",
          200: "#E5E7EB",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
