/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#EDF8EB",
        "gray-50": "#c7edc0",
        "gray-100": "#8fe37f",
        "gray-500": "#166e05",
        "primary-100": "#F5E9EC",
        "primary-300": "#F2B1C1",
        "primary-500": "#F05178",
        "secondary-400": "#A18181",
        "secondary-500": "#422222",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};