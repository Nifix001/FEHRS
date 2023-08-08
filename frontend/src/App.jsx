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

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
          <Route>
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<Layout />}>
              <Route path="dashboard" index element={<Dashboard />}>
              </Route>
              <Route path="patient" element={<Patients />}>
                <Route index element={<PaForm1 />} />
                <Route path="info" element={<PaForm2 />} />
                <Route path="test" element={<PaForm3 />} />
              </Route>
              <Route path="doctor" element={<Doctor />}></Route>
              <Route path="pharmacy" element={<Pharmacy />}>
              </Route>
              <Route path="reports" element={<Reports />}></Route>
              <Route path="settings" element={<Settings />}></Route>
            </Route>
          </Route>
             
           )
         )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
