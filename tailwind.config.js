/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fraun: ["Fraunces"],
      man: ["Manrope"],
    },
    extend: {
      colors: {
        "light-orange": "#FF8B64",
        "light-blue": "#55C2E6",
        "light-red": "#FF5E7D",
        "light-green": "#4BCF82",
        "light-purple": "#7335D2",
        "light-yellow": "#F1C75B",
      },
    },
  },
  plugins: [],
};

