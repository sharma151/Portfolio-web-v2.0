// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // <- very important
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background-light": "#ffffff",
        "background-dark": "#111827",
        "text-light": "#1f2937",
        "text-dark": "#d1d5db",
        "primary-light": "#8b5cf6",
        "primary-dark": "#6d28d9",
      },
    },
  },
  plugins: [],
};
