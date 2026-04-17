import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#0b0f19",
        bg2: "#0e1424",
        bg3: "#121a30",
        violet: "#8a5cff",
        blue: "#4d7bff",
        cyan: "#22d3ee",
        neon: "#5eead4",
        muted: "#a0a8b8",
      },
      backgroundImage: {
        "grad-brand":
          "linear-gradient(135deg, #8a5cff 0%, #4d7bff 50%, #22d3ee 100%)",
      },
      boxShadow: {
        "glow-violet": "0 0 60px rgba(138, 92, 255, 0.35)",
        "glow-blue": "0 0 60px rgba(77, 123, 255, 0.35)",
        "glow-cyan": "0 0 60px rgba(34, 211, 238, 0.3)",
      },
      borderRadius: {
        xl2: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
