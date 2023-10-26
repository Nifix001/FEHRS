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
    "./src/Subpages/Pharmacy.jsx",
    "./src/Subpages/Patients Subpage/PatientsPage.jsx",
    "./src/Subpages/Patients Subpage/PaForm1.jsx",
    "./src/Subpages/Patients Subpage/PaForm2.jsx",
    "./src/Subpages/Patients Subpage/PaForm3.jsx",
    "./src/Subpages/Pharmacy Subpage/Drugs.jsx",
    "./src/Subpages/Pharmacy Subpage/History.jsx",
    "./src/Subpages/Pharmacy Subpage/Prescriptons.jsx",
    "./src/Subpages/Pharmacy Subpage/AddNew.jsx",
    "./src/components/SummaryCard.jsx",
    "./src/components/Graph.jsx",
    "./src/Tables/PatientsTable.jsx",
    "./src/Tables/DrugTable.jsx",
    "./src/Tables/PrescriptionTable.jsx",
    "./src/Tables/HistoryTable.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('./assets/unsplash_SZJoYW4eLHE.png')",
        'dashIcon' : "url('./assets/sidebar/element-1.svg')"
      },
      colors: {
        'primary': "#7F00AC",
        'secondary': "#601384",
        'secondary2': '#FCF2FC',
        'secondary3': '#796EFC',
        'secondary4': '#27AE60',
        'secondary5': '#26A6FA',
        'tertiary': {
          '1': '#9585FE',
          '2': '#78C994',
          '3': '#1899EE',
          '4': '#F9F9F9',
          '5': '#828282'
        },
        'gray':{
          '750': "#212121",
        },
        'side': '#828282'
      },
      scale: {
        '70': '0.70',
        '85':'0.85'
      },
      width: {
        '21.5': '5.37rem',
        '87.25': '21.81rem',
        '90' : '22.5rem',
        '94': '23.5rem',
        '104': '26rem',
        '120': '30rem',
        '151': '37.75rem',
        '171.25': '42.81rem',
        '182': '45.5rem',
        '260': '65rem',
        '272': '68rem',
        '280': '70rem',
        '281': '70.25rem',
        '282': '70.5rem',
        '287.25': '71.81rem'
      },
      height: {
        '13' : '3.3rem',
        '21.5': '5.37rem',
        '46.5': '11.65rem',
        '78': '19.5rem',
        '103.75': '25.94rem',
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
        '192.25': '48.06rem',
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
