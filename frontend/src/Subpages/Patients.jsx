import React from 'react'
import { Outlet } from 'react-router-dom'

const Patients = () => {


  return (
    
    <React.Fragment>
      <div className = 'w-[80vw] h-160.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-2 px-3 patients bg-opacity-60 '>
        <Outlet /> 
      </div>
    </React.Fragment>
  )
}

export default Patients
