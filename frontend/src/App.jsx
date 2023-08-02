import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Welcome from './pages/Welcome'
import Login from "./pages/Login"

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
          <Route>
            <Route index element={<Welcome />} />
            <Route path="login" element={<Login />} />
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
