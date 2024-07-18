/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        primary:"#CF6377",
        dark: {
          primary: "#E78599",}
      }
    },
  },
  plugins: [],
}

