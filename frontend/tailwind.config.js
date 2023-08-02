/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/Welcome.jsx",
    "./src/pages/Login.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('./assets/unsplash_SZJoYW4eLHE.png')",
      }
    },
  },
  plugins: [],
}

