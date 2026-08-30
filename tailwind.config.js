/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0d16",
        card: "#151824",
        accent: "#f5f76b",
      },
    },
  },
  plugins: [],
}