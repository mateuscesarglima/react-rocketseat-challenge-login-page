/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        purple: "#7c3aed",
        "gray-50": "#f8fafc",
        "gray-100": "#f1f5f9",
        "gray-200": "#e2e8f0",
        "gray-300": "#cbd5e1",
        "gray-400": "#94a3b8",
        "gray-500": "#64748b",
        "gray-600": "#475569",
        "gray-700": "#334155",
        "gray-800": "#1e293b",
        "gray-900": "#0f172a",
      },
    },
    backgroundImage: {
      "img-purple": "url('/src/assets/rightImg.jpg')",
    },
  },
  plugins: [],
};
