import React from 'react'
import logo from '../assets/Frames.png'

const Nav = () => {
  return (
    <React.Fragment>
        <header className='flex absolute top-0'>
            <img src={logo} alt="" />
            <div>
                <input type="text" placeholder='Search' />
            </div>
            <div>
                <p>Dave Olumuyiwa</p>
                <p>Admin</p>
            </div>
        </header>
    </React.Fragment>
  )
}

export default Nav
