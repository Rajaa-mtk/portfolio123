module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: ['Fira Sans', 'sans-serif', 'Montserrat', 'sans-serif', 'PT Serif', 'serif'],
      secondary: ['Fira Sans', 'sans-serif', 'Montserrat', 'sans-serif', 'Poppins', 'sans-serif', 'PT Serif', 'serif']
    },
    colors:{
      'body-bg': '#fcf8f3',
      'primary': '#002d6b',
      'pink': '#ff007b',
      'purple': '#f5c7f7',
      'white': '#ffff',
      'red': '#7c0715'
    },
    fontSize:{
      primary: '16px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      boxShadow:{
        '4xl': '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)'
      }
    },
  },
  plugins: [],
}

