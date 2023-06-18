/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        mochiy: ["var(--mochiy-font)", ...defaultTheme.fontFamily.sans],
        sansita: ["var(--sansita-font)", ...defaultTheme.fontFamily.serif],
        averia: ["var(--averia-font)", ...defaultTheme.fontFamily.sans],
        pridi: ["var(--pridi-font)", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
