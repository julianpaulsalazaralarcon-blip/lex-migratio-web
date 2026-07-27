import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        ink: "hsl(var(--ink))",
        paper: "hsl(var(--paper))",
        "paper-raised": "hsl(var(--paper-raised))",
        seal: { DEFAULT: "hsl(var(--seal))", ink: "hsl(var(--seal-ink))" },
        accent: "hsl(var(--accent))",
        line: { DEFAULT: "hsl(var(--line))", soft: "hsl(var(--line-soft))" },
        muted: "hsl(var(--muted))",
        brick: "hsl(var(--brick))",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "6px",
      },
      keyframes: {
        "stamp-in": {
          "0%": { opacity: "0", transform: "scale(1.5) rotate(-13deg)" },
          "70%": { opacity: "1" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-4deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "stamp-in": "stamp-in 0.7s cubic-bezier(0.2, 1.4, 0.4, 1) 0.15s both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
