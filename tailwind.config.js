/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",          // architectural black
        paper: "#FAFAF9",        // off-white
        concrete: {
          dark: "#1F2933",
          mid: "#F5C542",
          light: "#D1D5DB",
        },
        brass: "#F5C542",        // yellow
        vermillion: "#9B2915",   // accent red
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
    },
  },
  plugins: [],
};
