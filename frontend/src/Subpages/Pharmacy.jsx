import React from 'react'
import { NavLink } from 'react-router-dom'

const Pharmacy = () => {
  return (
    <React.Fragment>
      <div className='w-281 h-142.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-4 px-6 patients'>
        <div className=' bg-tertiary-5 gap-2 border rounded-md shadow-2xl shadow-gray-900 p-2 w-12'>
        <NavLink to="" className='text-primary font-span text-xl font-normal py-2 px-3'>Drug</NavLink>
          <NavLink to="" className='text-primary py-2 px-3 font-span text-xl font-normal'>Prescription</NavLink>
          <NavLink to="" className='text-primary py-2 px-3 font-span text-xl font-normal'>History</NavLink>
        </div>
      </div>
      </React.Fragment>
  )
}

export default Pharmacy
