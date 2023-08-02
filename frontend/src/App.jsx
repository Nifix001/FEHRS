import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

function App() {


  
const router = createBrowserRouter(
  createRoutesFromElements(
          <Route>
            <Route index element={<Welcome />} />
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
