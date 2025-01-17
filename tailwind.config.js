/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#16161a',
        elements: '#242629',
        headline: '#fffffe',
        paragraph: '#94a1b2',
        button: '#7f5af0',
        buttonText: '#fffffe',
        highlight: '#7f5af0',
        secondary: '#72757e',
        tertiary: '#2cb67d',
        card: '#16161a',
      },
    },
  },
  plugins: [],
}
