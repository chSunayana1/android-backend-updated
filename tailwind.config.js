// // tailwind.config.js
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("tailwind-scrollbar-hide")],
// };
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Enable class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
