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
      deepBrown: "#4A2C16",
      darkBeige: "#B8860B",
      darkGray: "#333333",
      forestGreen: "#228B22",
      oliveGreen: "#556B2F",
      chocolate: "#8B4513",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [require("daisyui")],
};
