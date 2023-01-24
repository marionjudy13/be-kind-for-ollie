/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: "#21362C",
        lightGreen: "#415F51",
        mint: "#C8E4D7",
      },
    },
  },
  plugins: [],
};
