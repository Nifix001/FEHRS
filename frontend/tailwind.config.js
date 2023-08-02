/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/Welcome.jsx",
    "./src/pages/Login.jsx",
    "./src/components/BasicCard.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('./assets/unsplash_SZJoYW4eLHE.png')",
      },
      colors: {
        'primary': "#7F00AC",
        'secondary': "#601384"
      },
      width: {
        '104': '26rem',
        '151': '37.75rem',
      },
      height: {
        '124': '31rem',
        '148': '37rem',
        '160.5': '40.13rem',
        '178.25': '44.56rem'
      }
    },
  },
  plugins: [],
}
