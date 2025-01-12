/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2bb24f",
        backdrop: "#2d3049"
      }
    },
  },
  plugins: [],
}