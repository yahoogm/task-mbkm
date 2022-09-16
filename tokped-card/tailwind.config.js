/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      header: '2.5rem',
      title: '0.86rem',
      price: '1rem',
      city: '0.75rem',
      tokped: [
        '.66rem',
        {
          lineHeight: '.9rem',
        },
      ],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
