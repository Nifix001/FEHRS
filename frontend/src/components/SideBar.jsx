import React from 'react'
import dashIcon from '../assets/sidebar/element-1.svg';
import PatientIcon from '../assets/sidebar/bi_people.svg';
import doctorIcon from '../assets/sidebar/hospital.svg';
import PharmacyIcon from '../assets/sidebar/building-3.svg';
import ReportsIcon from '../assets/sidebar/chart.svg?react';
// import { ReactComponent as ReportsIcon } from '../assets/sidebar/chart.svg';
import SettingsIcon from '../assets/sidebar/ant-design_setting-outlined.svg';
import SupportIcon from '../assets/sidebar/ic_outline-contact-support.svg'
import { NavLink } from 'react-router-dom';



const SideBar = () => (
    
    <React.Fragment>

        <div className = 'w-60 h-142.5 bg-white absolute left-0 top-20 px-4 sidebar'>
            
            <header> 
                <h1 className = 'mt-7 mb-3'> Menu </h1>
            </header>
            
            <div className = "grid">               
                <NavLink 
                    to = 'dashboard' 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center'
                >
                    <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { dashIcon } 
                        alt = "dashboard icon" 
                    />

                    {/* <div className = 'w-5 h-5 mr-2 bg-dashIcon object-contain '></div> */}

                    <h3 className = '-mt-0.5'> Dashboard </h3>
                </NavLink>

                <NavLink 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center' 
                    to = "patient"
                >
                    <img 
                        className = 'w-5 h-5 mr-2  stroke-white' 
                        src = { PatientIcon } 
                        alt = "patient icon" 
                    />

                    <h3 className = '-mt-0.5'> Patients </h3>
                </NavLink>

                {/* <NavLink 
                        className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center' 
                        to = "doctor"
                    >
                    <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { doctorIcon } 
                        alt = "doctor icon" 
                    />

                    <h3 className = '-mt-0.5'>Doctor</h3>
                </NavLink> */}

                <NavLink 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center' 
                    to = "pharmacy"
                >
                    <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { PharmacyIcon } 
                        alt = "pharmacy icon" 
                    />

                    <h3 className = '-mt-0.5'> Pharmacy </h3>
                </NavLink>

                <NavLink 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center' 
                    to = "reports"
                >
                    {/* <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { ReportsIcon } 
                        alt = "reports icon" 
                    /> */}

                    <ReportsIcon className={`w-5 h-5 mr-2`} />

                    <h3 className = '-mt-0.5'> Reports </h3>
                </NavLink>

                <NavLink 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center' 
                    to = "settings"
                >
                    <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { SettingsIcon } 
                        alt = "settings icon" 
                    />

                    <h3 className = '-mt-0.5'> Settings </h3>
                </NavLink>

            </div>

            <div className = 'grid absolute bottom-20'>
                
                <hr className = 'w-48' />
                
                <h3 className = 'my-4'> General </h3>
                
                <div className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5'>
                    
                    <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { SupportIcon } 
                        alt = "" 
                    />
                    
                    <h3 className = '-mt-0.5'> Support </h3>
                
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default SideBar
