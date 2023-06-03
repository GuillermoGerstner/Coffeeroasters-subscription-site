/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#0e8784",
        "dark-cyan-hover": "#66d2cf",
        "dark-grey-blue": "#333d4b",
        "pale-orange": "#fdd6ba",
        "light-cream": "#fefcf7",
        grey: "#83888f",
        "transparent-black": "rgba(0, 0, 0, 0.5)",
      },
    },
    fontFamily: {
      fraunces: ["Fraunces", "sans-serif"],
      barlow: ["Barlow", "serif"],
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",

      435: "435px",
      473: "473px",
      544: "544px",
      705: "705px",
      940: "940px",
      970: "970px",
      1373: "1373px",
    },
  },
  plugins: [],
};
