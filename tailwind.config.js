/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coverbg': "url('./src/assets/coverbg.png')",
        'coverbg-light': "url('./src/assets/coverbg-light.png')",
        'mobile-coverbg': "url('./src/assets/mobile-coverbg.png')",
        'mobile-coverbg-light': "url('./src/assets/mobile-coverbg-light.png')",
      },
      fontFamily:{
        'sans': ['Inter var', 'sans-serif']
      },
    },
  },
  plugins: [],
}

