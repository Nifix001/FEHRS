import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Frames.png'
import notify from '../assets/mi_notification.png'
import direct from '../assets/ic_baseline-log-out.png'

const Nav = () => {
  return (
    <React.Fragment>
        <header className='flex absolute top-0 justify-between '>
            <div>
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
        </header>
    </React.Fragment>
  )
}

export default Nav
