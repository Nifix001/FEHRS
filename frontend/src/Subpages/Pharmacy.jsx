import React, { useRef, useState } from 'react'
import { Link, NavLink, Outlet, redirect, useLocation, useNavigate } from 'react-router-dom'
import search from '../assets/akar-icons_search.svg'
import filter from '../assets/cil_filter.svg'
import { useEffect } from 'react'

const Pharmacy = () => {
  
  
  const handleFile = (e) => {
    e.preventDefault();
    const input = document.getElementById('file');
    input.click();
  }

  
  return (

    <React.Fragment>
     
      <div 
        className = 'w-[1111px] h-full bg-white border-l  relative top-20 left-60 -ml-0.5 py-4 px-6 patients overflow-x-hidden'
      >
        <nav className = 'flex justify-between items-center'>

        <div className = ' bg-white rounded-md phaLinks shadow-md flex items-center'>

        <NavLink 
          to = "drugs" 
          className ='text-primary font-span text-base font-normal py-2 px-3  rounded-s-md outline-none '
        >
          Drugs
        </NavLink>
        
        <div className = 'w-[1px] h-5 bg-primary' ></div>

        <NavLink 
          to = "prescriptions" 
          className ='text-primary py-2 px-3 font-span text-base font-normal outline-none '
        >
          Prescriptions
        </NavLink>

        <div className = 'w-[1px] h-5 bg-primary' ></div>

        <NavLink 
          to = "history" 
          className ='text-primary py-2 px-3 font-span text-base font-normal rounded-e-md outline-none '
        >
          History
        </NavLink>  
      </div>


      <div className ='flex gap-4 items-center'>

        <Link 
          to = "addnew" 
          className=' font-span text-base font-normal py-2 px-5 text-white  bg-primary border border-primary rounded-md'
        >
          Add Drugs
        </Link>
        
        <NavLink 
          to = "" 
          className='text-primary font-span text-base font-normal py-2 px-5 border border-primary rounded-md'  
          onClick = { handleFile }
        >
          Import
        </NavLink>

        <input 
          type = "file" 
          id = 'file' 
          className = 'hidden' 
          accept = '.xlsx'  
        />

        <div className = 'flex gap-4'>
          <img 
            className = 'relative left-12' 
            src = { search }  
            alt = "search" 
          />

          <input 
            type = "text"  
            className = 'border rounded-md font-span font-normal text-base border-solid  border-gray-300 w-56 h-10 p-2 indent-8 placeholder:text-gray-300 text-gray-600 outline-none'
          />

          <div 
            className = 'border rounded-md items-center border-gray-300 p-1'
          >
            <img 
              src = { filter } 
              alt ="filter" 
            />
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
