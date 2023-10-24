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

  const location = useLocation();

  const drugsLink = useRef( null );
  const preLink = useRef( null );
  const historyLink = useRef( null );

  if ( location.pathname === '/user/pharmacy/drugs' ){
      // Focus the drugs link element when the component mounts
      drugsLink.current?.focus();
    } else if ( location.pathname === '/user/pharmacy/prescription' ){
      preLink.current?.focus();
    } else if ( location.pathname === '/user/pharmacy/history' ){
      historyLink.current?.focus();
    }

  
  return (

    <React.Fragment>
     
      <div 
        className = 'w-281 h-full bg-white border-l  relative top-20 left-60 -ml-0.5 py-4 px-6 patients overflow-x-hidden'
      >
        <nav className = 'flex justify-between items-center'>

        <div className = ' bg-white gap-2 rounded-md p-1 w-12'>

        <NavLink 
          to = "drugs" 
          className ='text-primary font-span text-base font-normal py-[4px] px-3 mx-1 focus:text-white  focus:bg-primary rounded-md active outline-none '
          ref = { drugsLink }
          autoFocus
        >
          Drugs
        </NavLink>

        <NavLink 
          to = "prescriptions" 
          className ='text-primary py-[4px] px-3 mx-1 font-span text-base font-normal focus:text-white focus:bg-primary rounded-md outline-none '
          ref = { preLink }
        >
          Prescriptions
        </NavLink>

        <NavLink 
          to = "history" 
          className ='text-primary py-[4px] px-3 mx-1 font-span text-base font-normal focus:text-white focus:bg-primary rounded-md outline-none '
          ref = { historyLink }
        >
          History
        </NavLink>  
      </div>


      <div className ='flex gap-4 items-center'>

        <Link 
          to = "addnew" 
          className=' font-span text-base font-normal py-2 px-5 text-white  bg-primary border border-primary rounded-md'
        >
          Add New
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
            className = 'border rounded-md font-span font-normal text-base border-solid text-gray-300 border-gray-300 w-56 h-10 p-2'
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
