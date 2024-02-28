/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      red:"#FF0000",
      grey:"#808080",
    },
  },
  plugins: [],
};
