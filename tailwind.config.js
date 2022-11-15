/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        wotfardBold: ['Work Sans', '-apple-system', 'sans-serif'],
        wotfardSemiBold: ['Work Sans', '-apple-system', 'sans-serif'],
        wotfardMedium: ['Inter', '-apple-system', 'sans-serif'],
        wotfardRegular: ['Inter', '-apple-system', 'sans-serif'],
        wotfardLight: ['Inter', '-apple-system', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFFFFF',
        whitegray: '#ECE9E4',
        gray: '#7D7D7D',
        black: '#000000',
        blackContrast: '#111111',
        green: '#00E599',
        yellow: '#FFD333',
        orange: '#FF7E44',
        red: '#FF4060',
        blue: '#00AAFF',
        bluewhite: '#B2DAFF',
        move: '#C34CFF',
      },
    },
  },
  plugins: [],
}
