import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./components/**/*.{ts,tsx}", "./*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#021f31",
          primary: "#65e766",
          secondary: "#4dc37a",
          tertiary: "#217e6d",
          accent: "#8fff95",
        },
        surface: {
          glass: "rgba(2, 31, 49, 0.7)",
          card: "rgba(255, 255, 255, 0.03)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        blob: "blob 10s infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
