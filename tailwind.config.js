/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        michroma: "Michroma",
        microgramma: "Microgramma",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700"
      },
      fontSize: {
        20: "20px",
      },
      colors: {
        primary: "#4C4DFF"
      }
    },
  },
  plugins: [],
}