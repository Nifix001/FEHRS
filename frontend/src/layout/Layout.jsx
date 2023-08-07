import React from 'react'
import Nav from '../components/Nav'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <React.Fragment>
        <Nav />
        <SideBar />
        <Outlet />
    </React.Fragment>
  )
}

export default Layout
