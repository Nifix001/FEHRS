import React from 'react'
import dashIcon from '../assets/sidebar/element-1.png';
import PatientIcon from '../assets/sidebar/bi_people.png';
import doctorIcon from '../assets/sidebar/hospital.png';
import PharmacyIcon from '../assets/sidebar/building-3.png';
import ReportsIcon from '../assets/sidebar/chart.png';
import SettingsIcon from '../assets/sidebar/ant-design_setting-outlined.png';
// import SettingsIcon from '../assets/sidebar/ic_outline-contact-support.png'

const SideBar = () => {
  return (
    <React.Fragment>
      <div className='w-60 h-143 bg-white absolute left-0 top-20 '>
        <header>Menu</header>
        <div className="grid gap-0">
            <div className='flex'>
                <img className='w-5 h-5' src={dashIcon} alt="dashboard icon" />
                <h3>Dashboard</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5' src={PatientIcon} alt="patient icon" />
                <h3>Patients</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5' src={doctorIcon}alt="doctor icon" />
                <h3>Doctor</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5' src={PharmacyIcon} alt="pharmacy icon" />
                <h3>Pharmacy</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5' src={ReportsIcon} alt="reports icon" />
                <h3>Reports</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5' src={SettingsIcon} alt="settings icon" />
                <h3>Settings</h3>
            </div>
        </div>
        <div className='grid absolute bottom-0'>
            <hr className='w-60' />
            <h3>General</h3>
            <div>
                <img className='w-5 h-5' src="" alt="" />
                <h3>Support</h3>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideBar
