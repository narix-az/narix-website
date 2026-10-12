import type { Config } from "tailwindcss";

// Mirrors the CSS tokens in src/app/globals.css — see /DESIGN.md.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#faf8f5",
        bg2: "#f3f0ea",
        ink: "#0f0f14",
        muted: "#5e5e6b",
        orange: "#ff5b1f",
        pink: "#ff2e7e",
        violet: "#7a3cff",
        blue: "#2d6bff",
        lime: "#b8f23a",
        yellow: "#ffc53d",
      },
      backgroundImage: {
        "grad-vivid":
          "linear-gradient(100deg, #ff5b1f 0%, #ff2e7e 48%, #7a3cff 100%)",
      },
      borderRadius: {
        xl2: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
