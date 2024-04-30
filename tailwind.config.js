/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      figtree: ["Figtree", "sans-serif"],
      oregano: ["Oregano", "cursive"],
    },
    colors: {
      "custom-jute": "#d8a35d",
      white: "#ffffff",
      black: "#000000",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "luxury"],
  },
};
