import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Welcome from './pages/Welcome'
import Login from "./pages/Login"
import Layout from "./layout/Layout"
import Dashboard from "./pages/Dashboard"

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
          <Route>
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<Layout />}>
              <Route path="user/dashboard" element={<Dashboard/>} />
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
