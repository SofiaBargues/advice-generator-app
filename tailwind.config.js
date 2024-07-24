/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightCyan: "#cfe3e8",
      neonGreen: "#52ffa8",
      darkBlue: "#1f2633",
      darkGrayish: "#303a4a",
      // ### Primary
      // - Light Cyan: hsl(193, 38%, 86%)#cfe3e8
      // - Neon Green: hsl(150, 100%, 66%)#52ffa8
      // ### Neutral
      // - Grayish Blue: hsl(217, 19%, 38%) #4e5d73
      // - Dark Grayish Blue: hsl(217, 19%, 24%) #303a4a
      // - Dark Blue: hsl(218, 23%, 16%) #1f2633
    },
    extend: {
      fontFamily: { manrope: ["Manrope", "sans-serif"] },
    },
  },
  plugins: [],
};
