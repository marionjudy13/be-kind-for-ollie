// tailwind.config.js
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Montserrat', 'sans-serif'"],
        serif: ["'Playfair Display', 'serif'"],
      },
      colors: {
        darkGreen: "#21362C",
        lightGreen: "#415F51",
        mint: "#C8E4D7",
        paleGreen: "#F7FBF9",
      },
    },
  },
  plugins: [],
};
