/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'battleship-gray': {
          50: '#F8F9F8',
          100: '#F2F4F0',
          200: '#DEE3DB',
          300: '#CBD1C5',
          400: '#A3AF99',
          500: '#7C8D6D',
          600: '#707F62',
          700: '#4A5541',
          800: '#383F31',
          900: '#252A21',
        },
      },
    },
  },
  plugins: [],
}
