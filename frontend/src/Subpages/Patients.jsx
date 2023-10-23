import React from 'react'
import { Form, NavLink, Outlet, useNavigate } from 'react-router-dom'

const Patients = () => {


  const redirect = useNavigate();

  return (
    
    <React.Fragment>
       <div className = 'w-281 h-160.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-4 px-6 patients'>
          <header> 
            <h1 className = 'mb-3'> Add New Patient (Students) </h1>
          </header>

          <div className = "flex mb-3 palinks">
            <NavLink 
              to = "personal" 
              className = 'text-primary py-2 px-3 rounded-md'
            > 
              Personal information 
            </NavLink>

            <NavLink 
              to = "info"   
              className = 'text-primary py-2 px-3 rounded-md'
              > 
                Medical information 
              </NavLink>

            <NavLink 
              to = "test" 
              className = 'text-primary py-2 px-3 rounded-md'
            >
              Medical Test
            </NavLink> 
          </div>

          <Form>
            <Outlet />
            
            <div className = "flex absolute bottom-0 ml-56 mr-auto gap-12">
              <button 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
              >
                  Save and Continue
              </button>

              <button 
                type = 'submit' 
                className = 'bg-white text-primary border-2 border-primary py-3 px-20 rounded-md'
              >
                Previous
              </button>
           </div>
          </Form>
       </div>
    </React.Fragment>
  )
}

export default Patients
