/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      a:['Caveat'],
      b:['Josefin Sans']
     
    }
  },
  plugins: [require("daisyui")],
}

