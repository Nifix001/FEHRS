import React from 'react'
import dots from '../assets/Dashboard/Group 11.svg'
import profile from '../assets/Dashboard/Group.svg'
import comm from '../assets/Dashboard/noun-community-5666932 1.svg'
import dept from '../assets/Dashboard/Group (1).svg'

const SummaryCard = () => {
  return (
    <React.Fragment>
        <div className='grid grid-cols-3 gap-1'>
            <div>
                <div className='flex'>
                    <p>Total Patients</p>
                    <img src={dots} alt="..." />
                </div>
                <div className='flex'>
                    <p>2387</p>
                    <img src={profile} alt="profile" />
                </div>
            </div>
            <div>
                <div className='flex'>
                    <p>Total Departments</p>
                    <img src={dots} alt="..." />
                </div>
                <div className='flex'>
                    <p>30</p>
                    <img src={comm} alt="profile" />
                </div>
            </div>
            <div>
                <div className='flex'>
                    <p>Total diagnosis</p>
                    <img src={dots} alt="..." />
                </div>
                <div className='flex'>
                    <p>456</p>
                    <img src={dept} alt="profile" />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SummaryCard
