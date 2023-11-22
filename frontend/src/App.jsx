import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Welcome from './pages/Welcome'
import Login from "./pages/Login"
import Layout from "./layout/Layout"
import Patients from "./Subpages/Patients"
import Dashboard from "./Subpages/Dashboard"
import Doctor from "./Subpages/Doctor"
import Pharmacy from "./Subpages/Pharmacy"
import Reports from "./Subpages/Reports"
import Settings from "./Subpages/Settings"
import PaForm1 from "./Subpages/Patients Subpage/PaForm1"
import PaForm2 from "./Subpages/Patients Subpage/PaForm2"
import PaForm3 from "./Subpages/Patients Subpage/PaForm3"
import Drugs from "./Subpages/Pharmacy Subpages/Drugs"
import Prescriptions from "./Subpages/Pharmacy Subpages/Prescriptions"
import History from "./Subpages/Pharmacy Subpages/History"
import AddNew from "./Subpages/Pharmacy Subpages/AddNew"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import PharmacyRedirect from "./Subpages/PharmacyRedirect"
import PatientsPage from "./Subpages/Patients Subpage/PatientsPage"
import NewPatients from "./Subpages/Patients Subpage/NewPatients"
import SignUp from "./pages/SignUp"
import UserRedirect from "./Subpages/UserRedirect"
import UserProvider from "./context/UserContext"
import Personal from "./Subpages/Settings Subpage/Personal"
import Admin from "./Subpages/Settings Subpage/Admin"
import Password from "./Subpages/Settings Subpage/Password"
// import { useState } from "react"

library.add(fas, fab, far);

function App() {


const router = createBrowserRouter(
  createRoutesFromElements(
          <Route>
            <Route index element = { <Welcome /> } />
            
            <Route 
              path = "login" 
              element = { <Login /> } 
            />
            <Route
              path = "signup"
              element = { <SignUp /> } 
            />

            <Route 
              path = "user" 
              element = { <Layout /> }
            >
              <Route
                index
                element = { <UserRedirect /> }
               />
              <Route 
                path = "dashboard" 
                element = { <Dashboard /> } 
              >
              </Route>
              <Route 
                path = "patients" 
                element = { <Patients /> }
              >
                <Route
                  index
                  element = { <PatientsPage /> } 
                />
                <Route
                  path = "new"
                  element = { <NewPatients /> } 
                >
                  <Route 
                    path = "personal" 
                    element = { <PaForm1 /> } 
                  />
                  <Route 
                    path = "info" 
                    element = { <PaForm2 /> } 
                  />
                  <Route 
                    path = "test" 
                    element = { <PaForm3 /> }  
                  />
                </Route>
              </Route>
              <Route 
                path = "doctor" 
                element = { <Doctor /> }
              >
              </Route>
              <Route 
                path = "pharmacy" 
                element = { <Pharmacy /> } 
              >
                <Route
                  index
                  element = { <PharmacyRedirect /> } 
                />
                <Route 
                  path = "drugs" 
                  element = { <Drugs /> }
                />
                <Route 
                  path = "prescriptions" 
                  element = { <Prescriptions /> }
                />
                <Route 
                  path = "history" 
                  element = { <History /> }
                />
                <Route 
                  path = "addnew" 
                  element = { <AddNew /> }
                />
              </Route>
              <Route 
                path = "reports" 
                element = { <Reports /> }>
              </Route>
              <Route 
                path = "settings" 
                element = { <Settings /> }>
                  <Route
                    path = "personal"
                    element = { <Personal /> }
                  />
                  <Route
                    path = "admin"
                    element = { <Admin /> } 
                  />
                  <Route
                    path = "passwords"
                    element = { <Password /> } 
                  />
              </Route>
            </Route>
          </Route>
             
           )
         )

  return (
    <UserProvider>
      <RouterProvider router = { router } />
    </UserProvider>
  )
}

export default App
