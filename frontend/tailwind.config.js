/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/Welcome.jsx",
    "./src/pages/Login.jsx",
    ".src/layout/Layout.jsx",
    "./src/components/BasicCard.jsx",
    "./src/components/Nav.jsx",
    "./src/components/Sidebar.jsx",
    "./src/Subpages/Patients.jsx",
    "./src/Subpages/Dashboard.jsx",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('./assets/unsplash_SZJoYW4eLHE.png')",
      },
      colors: {
        'primary': "#7F00AC",
        'secondary': "#601384",
        'secondary2': '#FCF2FC',
        'gray':{
          '750': "#212121"
      }
      },
      width: {
        '90' : '22.5rem',
        '104': '26rem',
        '151': '37.75rem',
        '182': '45.5rem',
        '280': '70rem',
        '281': '70.25rem',
        '282': '70.5rem'
      },
      height: {
        '13' : '3.3rem',
        '124': '31rem',
        '136' : '34rem',
        '140': '35rem',
        '141': '35.25rem',
        '142' : '35.5rem',
        '142.5': '35.625rem',
        '143': '35.75rem',
        '148': '37rem',
        '160.5': '40.13rem',
        '178.25': '44.56rem',
        '224' : '56rem',
      },
      fontFamily:{
         welcome: ['Work Sans'],
         span: ['Mukta'],
      }
    },
  },
  plugins: [],
}
