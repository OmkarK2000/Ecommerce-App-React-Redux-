/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "pop" : ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'hero': "url('./src/assets/images/slide-03.jpg')",
      },
    },
  },
  plugins: [],
}