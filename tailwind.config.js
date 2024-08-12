/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/js/main.js"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "rgb(195, 146, 43)"
      },
    },
  },
  plugins: [],
}