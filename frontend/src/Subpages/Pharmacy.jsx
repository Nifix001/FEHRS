import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import search from '../assets/akar-icons_search.svg'
import filter from '../assets/cil_filter.svg'

const Pharmacy = () => {

  const [file, setFile] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const handleFile = (e) => {
    e.preventDefault();
    setFile(!file);
  }

  return (
    <React.Fragment>
      <div className='w-281 h-142.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-4 px-6 patients'>
        <nav className='flex justify-between items-center'>
        <div className=' bg-white gap-2 rounded-md shadow-2xl shadow-gray-900 p-1 w-12'>
        <NavLink to="drugs" className='text-primary font-span text-xl font-normal py-2 px-5 hover:text-white hover:bg-primary'>Drugs</NavLink>
          <NavLink to="prescriptions" className='text-primary py-2 px-5 font-span text-xl font-normal hover:text-white hover:bg-primary'>Prescriptions</NavLink>
          <NavLink to="History" className='text-primary py-2 px-5 font-span text-xl font-normal hover:text-white hover:bg-primary'>History</NavLink>
        </div>
        <div className='flex gap-4 items-center'>
        <NavLink to="" className='text-primary font-span text-base font-normal py-2 px-5 hover:text-white hover:bg-primary border border-primary rounded-md'>Add New</NavLink>
        <NavLink to="" className='text-primary font-span text-base font-normal py-2 px-5 hover:text-white hover:bg-primary border border-primary rounded-md'  onClick={handleFile}>Import
        </NavLink>
          {file && <input type="file" className='flex' accept='.xlsx' disabled={disabled} onChange={() => setDisabled(!disabled)}  />}
        <div className='flex gap-4'>
        <img className='relative left-12' src={search} alt="search" />
        <input type="text"  className='border rounded-md font-span font-normal text-base border-solid text-gray-300 border-gray-300 w-56 h-10 p-2'/>
        <div className='border rounded-md items-center border-gray-300 p-1'>
          <img src={filter} alt="filter" />
        </div>
        </div>
        </div>
        </nav>
      <Outlet />
      </div>
      </React.Fragment>
  )
}

export default Pharmacy
