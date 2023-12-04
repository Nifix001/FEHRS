import React, { useState } from 'react'
import { Form, NavLink, Outlet } from 'react-router-dom'

import search from '../assets/akar-icons_search.svg'

const Doctor = () => {

  const [ searchActive, setSearchActive ] = useState( false );

  return (
    <React.Fragment>
      <div className = 'w-[1110px] h-[88.4vh] bg-[#f9f9f9] border-l  relative top-20 left-60 -ml-0.5 py-6 px-14 doctors bg-opacity-60'>
        <div className = 'flex bg-white h-fit w-full py-2 px-10 justify-between rounded-md ' >
          <div className = 'flex gap-3' >
            <div className = 'relative'>
                <div className = 'flex' >
                    <input 
                        type = 'search' 
                        placeholder = 'Search for patient...' 
                        className = 'border rounded-md font-span font-normal text-base border-solid border-gray-300 w-[400px] h-10 p-2 outline-0 indent-10' 
                        onChange={() => setSearchActive(true)}
                    />
                    <img 
                        className = 'absolute left-2 top-2 cursor-pointer opacity-50' 
                        src = { search } 
                        alt = "search" 
                    />
                </div>
            </div>
            <button className = 'h-10 text-xs text-white bg-primary px-6 rounded-md ' > Search </button>
          </div>
          <button className = 'text-sm' > History </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Doctor
