import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#F5199B",
        blue: "#1B3FE0",
        navy: "#0B0B2A",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
