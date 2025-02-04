/** @type {import('tailwindcss').Config} */
const customColors = require('./src/utils/Colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: customColors,
      fontFamily: {
        mulish_semibold: ["mulish_semibold"],
        mulish_bold: ["mulish_bold"],
        mulish_regular: ["mulish_regular"],
        mulish_medium: ["mulish_medium"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
      screens: {
        si: "320px",
        sj: "360px",
        sk: "480px",
        sl: "540px",
        mdx: "860px",
        mc: "980px",
        "2xlm": "1340px",
        "3xl": "1440px",  
      },
    },
  },
  plugins: [],
};