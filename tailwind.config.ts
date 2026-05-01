import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: { DEFAULT: "#FAF8F5", dark: "#F2EDE5" },
        navy: { DEFAULT: "#001F3F", deep: "#000D1F" },
        charcoal: "#0D0D0D",
        brand: {
          orange: "#FF6B00",
          gold: "#C9A550",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "soft": "0 4px 24px rgba(0,0,0,0.06)",
        "medium": "0 8px 40px rgba(0,0,0,0.10)",
        "strong": "0 16px 64px rgba(0,0,0,0.14)",
        "orange-glow": "0 8px 32px rgba(255,107,0,0.25)",
        "orange-glow-lg": "0 16px 60px rgba(255,107,0,0.35)",
        "card": "0 2px 12px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.12), 0 24px 80px rgba(0,0,0,0.06)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "shimmer": "shimmer 4s linear infinite",
        "marquee": "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "fade-up": "fadeInUp 0.7s ease forwards",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
