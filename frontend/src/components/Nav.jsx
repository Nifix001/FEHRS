import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Frames.png'
import notify from '../assets/mi_notification.svg'
import direct from '../assets/ic_baseline-log-out.svg'
import search from '../assets/akar-icons_search.svg'

const Nav = () => {
  return (
    <React.Fragment>
        <nav className = 'flex absolute h-20 w-screen top-0 border border-gray-300 justify-between px-2 items-center'>
            <div className = 'border-solid border-gray-300 border-r h-20 pt-4 pr-16 pl-6'>
                <img 
                    src = { logo } 
                    alt = "logo" 
                />
            </div>

            <div className = 'flex'>
                <input 
                    type = "text" 
                    placeholder = 'Search' 
                    className = 'border rounded-md font-span font-normal text-base border-solid border-gray-300 w-182 h-10 p-2 outline-0' 
                />
                <img 
                    className = 'relative right-12 cursor-pointer' 
                    src = { search } 
                    alt = "search" 
                />
            </div>

            <div>
                <p className = 'font-span font-normal text-base text-black'> Dave Olumuyiwa </p>
                <p className = 'font-span font-normal text-base text-black'> Admin </p>
            </div>
            <div className = 'flex pr-4'>
                <NavLink className = 'mr-4'>
                    <img 
                        src = { notify } 
                        alt = "notification" 
                    />
                </NavLink>
                <NavLink className = 'ml-4'>
                    <img 
                        src = { direct } 
                        alt = "direct" 
                    />
                </NavLink>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Nav
