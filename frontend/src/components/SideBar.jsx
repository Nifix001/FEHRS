import React from 'react'

const SideBar = () => {
  return (
    <React.Fragment>
      <div className='w-60 h-224 bg-white absolute left-0 grid'>
        <header>Menu</header>
        <div className='flex'>
            <img src="" alt="" />
            <h3>Dashboard</h3>
        </div>
        <div className='flex'>
            <img src="" alt="" />
            <h3>Patients</h3>
        </div>
        <div className='flex'>
            <img src="" alt="" />
            <h3>Doctor</h3>
        </div>
        <div className='flex'>
            <img src="" alt="" />
            <h3>Pharmacy</h3>
        </div>
        <div className='flex'>
            <img src="" alt="" />
            <h3>Reports</h3>
        </div>
        <div className='flex'>
            <img src="" alt="" />
            <h3>Settings</h3>
        </div>
        <div className='grid absolute bottom-0'>
            <hr />
            <h3>General</h3>
            <div>
                <img src="" alt="" />
                <h3>Support</h3>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideBar
