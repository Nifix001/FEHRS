import React from 'react'
import { Form, NavLink, Outlet, useNavigate } from 'react-router-dom'

const Patients = () => {


  const redirect = useNavigate();

  return (
    
    <React.Fragment>
      <div div className = 'w-[80vw] h-160.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-2 px-3 patients'>
        <Outlet /> 
      </div>
    </React.Fragment>
  )
}

export default Patients
