import React from 'react'
import { Form, NavLink, Outlet } from 'react-router-dom'

const Patients = () => {
  return (
    <React.Fragment>
     <div className='w-281 h-142.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-4 px-6 patients'>
        <header className='mb-6'>Add New Patient (Students)</header>
        <div className="flex mb-6 palinks">
          <NavLink to="personal" className='text-primary hover:text-white hover:bg-primary py-1 px-2'>Personal information</NavLink>
          <NavLink to="info" className='text-primary hover:text-white hover:bg-primary py-1 px-2'>Medical information</NavLink>
          <NavLink to="test" className='text-primary hover:text-white hover:bg-primary py-1 px-2'>Medical Test</NavLink>
        </div>
        <Form>
          <Outlet />
          <div className="flex">
            <button type='submit'>Save and Continue</button>
            <button type='submit'>Previous</button>
        </div>
        </Form>
     </div>
    </React.Fragment>
  )
}

export default Patients
