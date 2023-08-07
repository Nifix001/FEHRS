import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Frames.png'
import notify from '../assets/mi_notification.png'
import direct from '../assets/ic_baseline-log-out.png'

const Nav = () => {
  return (
    <React.Fragment>
        <nav className='flex absolute h-20 w-screen top-0 border border-gray-300 justify-between px-2 items-center'>
            <div className='border-solid border-gray-300 border-r h-24 pt-6 pr-4'>
                <img src={logo} alt="" />
            </div>
            <div>
                <input type="text" placeholder='Search' className='border border-solid border-gray-300 w-182 h-10 p-2' />
            </div>
            <div>
                <p className='font-span font-normal text-base text-black'>Dave Olumuyiwa</p>
                <p className='font-span font-normal text-base text-black'>Admin</p>
            </div>
            <div className='flex pr-4'>
                <NavLink className='mr-4'><img src={notify} alt="notification" /></NavLink>
                <NavLink className='ml-4'><img src={direct} alt="direct" /></NavLink>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Nav
