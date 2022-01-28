const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Netflix Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--clr-primary)',
        'gray-primary': 'var(--clr-gray-primary)',
        'gray-light': 'var(--clr-gray-light)',
        'gray-dark': 'var(--clr-gray-dark)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
};
