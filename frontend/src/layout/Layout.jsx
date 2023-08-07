import React from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <React.Fragment>
    <div className="grid">
      <Nav />
      <SideBar />
      <Outlet />
    </div>
    </React.Fragment>
  )
}

export default Layout
