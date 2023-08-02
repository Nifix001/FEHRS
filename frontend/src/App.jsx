import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

function App() {


  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
                  <Route index element={<w />} />
                  <Route path="log-in" element={<LogIn />} />
                   <Route path="/" element={<LandingLayout />}>
                      <Route index element={<HomeLayout />} />
                      <Route path="services" element={<Services />}>
                         <Route path="others" element={<Other />}>
                          <Route path="footer" element={<Footer />} />
                        </Route>
                      </Route>
                      <Route path="help" element={<Help />} />
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
