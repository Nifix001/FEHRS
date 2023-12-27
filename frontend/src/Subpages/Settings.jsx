import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Settings = () => {
  return (
    <div className = 'w-[1111px] h-fit bg-[#f9f9f9] border-l  relative top-20 left-60 -ml-0.5 pt-4 pb-8 px-14 settings bg-opacity-60 flex gap-8 '>
      <div className = ' h-[83.2vh] w-64 bg-white flex flex-col p-3 gap-12 rounded-xl ' >
        <h1 className = ' font-bold text-[18px] py-2 px-1 ' > Settings </h1>
        <div className = "flex flex-col settings ">
            <NavLink
                to='personal'
                className='flex hover:text-gray-400 items-center rounded-md my-1 py-2 px-3 text-[15px]'
            > Personal Info </NavLink>
            <NavLink
                to='admin'
                className='flex hover:text-gray-400 items-center rounded-md my-1 py-2 px-3 text-[15px]'
            > Admin Management </NavLink>
            <NavLink
                to='passwords'
                className='flex hover:text-gray-400 items-center rounded-md my-1 py-2 px-3 text-[15px]'
            > Change Password </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Settings
