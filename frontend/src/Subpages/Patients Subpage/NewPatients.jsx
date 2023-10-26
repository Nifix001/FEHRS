import React from 'react'
import { Form, NavLink, Outlet, useNavigate } from 'react-router-dom'

const NewPatients = () => {


  const redirect = useNavigate();

  return (
    
    <React.Fragment>
       <div className = 'px-3 py-2'>
          <header> 
            <h1 className = 'mb-3'> Add New Patient (Students) </h1>
          </header>

          <div className = "flex mb-3 palinks">
            <NavLink 
              to = "personal" 
              className = 'text-primary py-2 px-3 rounded-s-md text-sm font-normal '
            > 
              Personal information 
            </NavLink>

            <NavLink 
              to = "info"   
              className = 'text-primary py-2 px-3 text-sm font-normal '
              > 
                Medical information 
              </NavLink>

            <NavLink 
              to = "test" 
              className = 'text-primary py-2 px-3 rounded-e-md text-sm font-normal '
            >
              Medical Test
            </NavLink> 
          </div>

          <Form>
            <Outlet />
          </Form>
       </div>
    </React.Fragment>
  )
}

export default NewPatients
