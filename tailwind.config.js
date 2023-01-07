/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/styles/style.css',
    './public/styles/tailwind.css',
    './views/includes/head.ejs',
    './views/includes/navigation.ejs',
    './views/admin/edit-product.ejs',
    './views/shop/index.ejs',
    './views/404.ejs'
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'slate' : '#f1f5f9',
      'black' : '#121212',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '-16': '16rem',
        '8xl': '96rem',
        '9xl': '128rem',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
