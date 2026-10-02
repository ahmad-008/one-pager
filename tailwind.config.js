/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Courier New"','Courier' ,'monospace'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        Arial: ['Arial', 'sans-serif'],
      },

      colors: {
                brand: '#2bb5b5',
              },

    },
  },
  plugins: [],
}
