/* eslint-disable global-require */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "!sm": { 'max': '639px' },
        "!md": { 'max': '767px' },
        "!lg": {'max': '1023px'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  },
};
