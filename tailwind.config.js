/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        news: "0 0 50px 50px",
        30: "30px",
        60: "60px",
      },
      colors: {
        customBlue: "#002553",
      },
    },
  },
  plugins: [],
};
