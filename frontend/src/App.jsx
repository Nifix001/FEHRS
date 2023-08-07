import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Welcome from './pages/Welcome'
import Login from "./pages/Login"
import Layout from "./layout/Layout"
import Patients from "./Subpages/Patients"
import Dashboard from "./Subpages/Dashboard"

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
          <Route>
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<Layout />}>
              <Route path="patient" element={<Patients />}>

              </Route>
              <Route path="dashboard" element={<Dashboard />}>

              </Route>
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
