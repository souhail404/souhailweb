/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'xs':'390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'midtall':{ 'raw': '(min-height: 600px)' },
      'tall': { 'raw': '(min-height: 800px)' },
      'xtall': { 'raw': '(min-height: 1000px)' },
    },
    extend: {
      fontFamily:{
        "spartan": ['League Spartan', 'sans-serif']
      },
      fontSize: {
        '2.5xl': ['1.65rem', {
          lineHeight: '2.1rem',
        }],
        '3.5xl': ['2rem', {
          lineHeight: '2.35rem',
        }],
        '4.5xl': ['2.8rem', {
          lineHeight: '1',
        }],
      },
      keyframes: {
        bounceVer: {
          '0% ':{
            transform: 'translateX(0px)'
          },
         '70%' :{
            transform: 'translateX(8px)'
          },
         
         '100%' :{
            transform: 'translateX(0)'
          },
        },
      },
      animation:{
        bounceVer: 'bounceVer 1s ease infinite',
      },
    }
  },
  plugins: [],
}
