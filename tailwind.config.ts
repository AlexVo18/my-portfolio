import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "oklch(var(--background))",
          secondary: "oklch(var(--background-secondary))",
        },
        foreground: "oklch(var(--foreground))",
      },
    },
  },
  plugins: [],
};

export default config;
