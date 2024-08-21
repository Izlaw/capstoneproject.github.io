/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["src/frontend/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brownbgcolor: "#643a22",
        maroonbgcolor: "#372d2e",
        pinktext: "#d85661",
      },
      backgroundImage: {
        mainbackground: "url('img/background.png')",
      },
      textStroke: {
        pink: {
          width: '2px',
          color: '#d85661',
        },
      },
      spacing: {
        '2': '0.5rem',
      },
      scale: {
        '50': '0.5',
        '75': '0.75',
        '90': '0.9',
        '100': '1',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
      },
    },
    variants: {
      stroke: ['responsive'],
      scale: ['hover', 'responsive'],
    },
    plugins: [
      require('tailwindcss-text-fill-stroke'),
    ],
  },
}