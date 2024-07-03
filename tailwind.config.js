import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": ['Lato', 'sans-serif'],
        "roboto": ['Roboto', 'sans-serif']
      }, 
      keyframes: {
        slideDown: {
          '0%': {'top': '0px'},
          '100%': {'top': '3rem'}
        },
        opens: {
          '0%': {'opacity': 0, },
          '100%': {'opacity': 1}
        },
        closes: {
          '0%': {'opacity': 1, },
          '100%': {'opacity': 0}
        }
      },
      animation : {
        slideDown: 'slideDown 0.2s 1s ease-out forwards',
        opens: 'opens 0.2s 0.2s ease-out forwards',
        closes: 'closes 0.2s 0.2s ease-out forwards'
      }
    },
  },
  plugins: [
    daisyui
  ],
}