/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonColor: '#C78EFF',
        bgMain: '#FFD6FF',
        dashboard: '#EAC0FF',
      },
    },
  },
  plugins: [],
}
