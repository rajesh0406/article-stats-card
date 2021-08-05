module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme:{
      screens: {
        // NEW
        xs: "0px",
        sm: "361px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors:{
        darkblue:"#090b1a",
        satdarkblue:"#1b1938",
        violet:"#aa5cdb",
        darkviolet:"#730099",
        white:"#ffffff"
      },
      
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'lexend':['Lexend Deca','sans-serif']
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
