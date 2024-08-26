/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#287676",
        "secondary-color": "#F9FBFD",
        header: "#13367D",
        "sub-text": "#44546f",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
