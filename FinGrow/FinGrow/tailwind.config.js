/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        borderTrace: 'borderTrace 3s linear infinite',
      },
      animation: {
        borderTrace: 'borderTrace 3s linear infinite',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        ptsans: ["PT Sans Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
}


