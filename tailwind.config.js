/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adding Poppins as the default sans font
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fde1ff 0%, #e1fea2 60%)',
      },
    },
  },
  plugins: [],
}
