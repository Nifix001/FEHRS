import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Frames.png'
import notify from '../assets/mi_notification.png'
import direct from '../assets/ic_baseline-log-out.png'

const Nav = () => {
  return (
    <React.Fragment>
        <nav className='flex absolute h-20 top-0 border border-gray-600 justify-between items-middle'>
            <div className=' border border-gray-600'>
                <img src={logo} alt="" />
            </div>
            <div>
                <input type="text" placeholder='Search' />
            </div>
            <div>
                <p>Dave Olumuyiwa</p>
                <p>Admin</p>
            </div>
            <div className='flex'>
                <NavLink><img src={notify} alt="notification" /></NavLink>
                <NavLink><img src={direct} alt="direct" /></NavLink>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Nav
