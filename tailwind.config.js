const { nextui } = require("@nextui-org/theme");
import fluid, { extract } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    extract,
  },

  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), fluid],
};
