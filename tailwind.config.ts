import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        lightBlueBright: {
          50: "#EAF4FE",
          100: "#D5E9FE",
          200: "#A6D2FC",
          300: "#78BBFB",
          400: "#4EA4F8",
          500: "#3896F5",
          600: "#2E7ED3",
          700: "#2465AF",
          800: "#1A4B8B",
          900: "#113267",
          DEFAULT: "#3896F5",
        },
        royalBlue: {
          50: "#E9EDFF",
          100: "#D4DAFF",
          200: "#A8B5FF",
          300: "#7C90FF",
          400: "#506BFF",
          500: "#1C56F0",
          600: "#184AD4",
          700: "#1339A8",
          800: "#0E287C",
          900: "#091950",
          DEFAULT: "#1C56F0",
        },
        navyBlue: "#090F70",
        darkBlue: "#252440",
        primary: {
          DEFAULT: "#1C56F0",
          light: "#3896F5",
          dark: "#090F70",
          overlay: "#252440",
        },
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
