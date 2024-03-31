/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        body_color: "linear-gradient(180deg, #0094FF 0%, #002D4E 49.55%, #000000 100%);"
      }
    },
  },
  plugins: [],
}

