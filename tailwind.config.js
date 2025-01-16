/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "rgb(112, 190, 250)",
        "opacity-primary": "rgba(112, 190, 250, 0.75)",
      },
      boxShadow: {
        primary: "0, 0, 2px 0.5px rgba(112, 190, 250, 0)",
        "hover-primary": "0, 0, 2px 0.5px rgba(112, 190, 250, 0.75)",
      },
    },
  },
  plugins: [],
};
