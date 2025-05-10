/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FFFDF5',
          100: '#FFFAEB',
          200: '#FFF5D6',
          300: '#FFF0C2',
          400: '#FFE699',
          500: '#FFDC70',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1F1F1F',
          950: '#141414',
        },
        accent: {
          50: '#F5F6FF',
          100: '#EBEEFF',
          200: '#D8DEFF',
          300: '#B2BCFF',
          400: '#8C9DFF',
          500: '#677EFF',
          600: '#3D58F2',
          700: '#2A3FD1',
          800: '#1C2FA6',
          900: '#0E1A66',
        },
      },
      cursor: {
        'custom': 'url("/cursor.svg"), auto',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};