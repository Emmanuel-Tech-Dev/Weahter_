/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "hero" : "url(' ../images/hero.png')",
        "darkMode" : "url(' ../images/darkhero.png')",
      }
    },
  },
  plugins: [],
}

