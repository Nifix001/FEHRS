import React from 'react'
import dots from '../assets/Dashboard/Group 11.svg'
import profile from '../assets/Dashboard/Group.svg'

const SummaryCard = () => {
  return (
    <React.Fragment>
        <div className='grid grid-cols-3 gap-4'>
            <div>
                <div>
                    <p>Total Patients</p>
                    <img src={dots} alt="..." />
                </div>
                <div>
                    <p>2387</p>
                    <img src={profile} alt="profile" />
                </div>
            </div>
            <div>
                <div>
                    <p>Total Departments</p>
                    <img src={dots} alt="..." />
                </div>
                <div>
                    <p>30</p>
                    <img src={profile} alt="profile" />
                </div>
            </div>
            <div>
                <div>
                    <p>Total diagnosis</p>
                    <img src={dots} alt="..." />
                </div>
                <div>
                    <p>456</p>
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SummaryCard
