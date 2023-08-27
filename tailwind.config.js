/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "spartan": ['League Spartan', 'sans-serif']
      }
      // colors:{
      //   light:{
      //     100:'#F8F7F2',
      //   } 
      // }
    },
  },
  plugins: [],
}
