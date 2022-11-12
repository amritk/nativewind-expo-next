const nativewind = require("nativewind/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './expo/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './shared/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [nativewind],
  theme: {
    extend: {
      colors: {
        red: '#ff0000',
        white: '#ffffff'
      }
    },
  },
}
