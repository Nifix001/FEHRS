import React from 'react'

import logo from '../assets/futa logo.png'
import search from '../assets/akar-icons_search.svg'
import { Notification } from 'iconsax-react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { NavLink } from 'react-router-dom'
// import notify from '../assets/mi_notification.svg'
// import direct from '../assets/ic_baseline-log-out.svg'

const Nav = () => {
  return (
    <React.Fragment>
        <nav className = 'flex absolute h-20 w-full top-0 border border-gray-300 justify-between px-2 items-center'>
            <div className = 'border-solid border-gray-300 border-r h-20  pr-16 pl-[14px] flex items-center gap-3 '>
                <img 
                    src = { logo } 
                    alt = "logo" 
                />
                <h1 className = 'text-primary text-3xl font-extrabold'> FEHRS </h1>
            </div>

            <div className = 'flex'>
                <input 
                    type = "text" 
                    placeholder = 'Search' 
                    className = 'border rounded-md font-span font-normal text-base border-solid border-gray-300 w-182 h-10 p-2 outline-0' 
                />
                <img 
                    className = 'relative right-12 cursor-pointer opacity-50' 
                    src = { search } 
                    alt = "search" 
                />
            </div>

            <div>
                <p className = 'font-span font-normal text-base text-black'> Dave Olumuyiwa </p>
                <p className = 'font-span font-normal text-base text-black'> Admin </p>
            </div>
            <div className = 'flex pr-4'>
                {/* <NavLink className = 'mr-4'>
                    <img 
                        src = { notify } 
                        alt = "notification" 
                    />
                </NavLink> */}
                {/* <FontAwesomeIcon icon="fa-regular fa-bell" className = 'mr-4 w-7 h-7 opacity-50 '  /> */}
                {/* <NavLink className = 'ml-4'>
                    <img 
                        src = { direct } 
                        alt = "direct" 
                    />
                </NavLink> */}
                <Notification size="32" color="#212121" className = 'mr-4 cursor-pointer opacity-50' />
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Nav
