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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Building3, Chart1, Element, Profile2User, Setting2 } from 'iconsax-react'

// chart-tree-map



const SideBar = () => (
    
    <React.Fragment>

        <div className = 'w-60 h-full bg-white absolute left-0 top-20 px-4 sidebar'>
            
            <header> 
                <h1 className = 'mt-7 mb-3'> Menu </h1>
            </header>
            
            <div className = "grid">               
                <NavLink 
                    to = 'dashboard' 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]'
                >
                    {/* <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { dashIcon } 
                        alt = "dashboard icon" 
                    /> */}
                    <div className = 'flex justify-content-space-between align-items-center'>
                    </div>
                    {/* <FontAwesomeIcon icon = "fa-solid fa-table-list" className = 'w-5 h-5'  /> */}
                    <Element size="20" />
                    <h3 className = ' ml-2'> Dashboard </h3>
                </NavLink>

                <NavLink 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]' 
                    to = "patients"
                >
                    {/* <img 
                        className = 'w-5 h-5 mr-2  stroke-white' 
                        src = { PatientIcon } 
                        alt = "patient icon" 
                    /> */}
                    <div className = 'flex justify-content-space-between align-items-center'>
                        {/* <FontAwesomeIcon icon = "fa-solid fa-user-group" className = 'w-5 h-5' /> */}
                        <Profile2User size="20" />
                        <h3 className = ' ml-2'> Patients </h3>
                    </div>
                </NavLink>


                <NavLink 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]' 
                    to = "pharmacy"
                >
                    {/* <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { PharmacyIcon } 
                        alt = "pharmacy icon" 
                    /> */}
                    <div className = 'flex justify-content-space-between align-items-center'>
                     {/* <FontAwesomeIcon icon = "fa-solid fa-hospital" className = 'w-5 h-5' />    */}
                     <Building3 size="20" />
                     <h3 className = 'ml-2'> Pharmacy </h3>
                    </div>
                </NavLink>

                <NavLink 
                    className = 'flex hover:bg-primary text-side hover:text-white p-1.5 -ml-1.5 items-center hover:stroke-white' 
                    to = "reports"
                    title = "Reports page"
                >
                    <div className="flex justify-content-space-between align-items-center">
                        {/* <FontAwesomeIcon icon = "fa-solid fa-chart-simple" className = 'w-5 h-5' /> */}
                        <Chart1 size="20" />
                        <h3 className = 'ml-2 '> Reports </h3>
                    </div>
                </NavLink>

                <NavLink 
                    className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]' 
                    to = "settings"
                >
                    {/* <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { SettingsIcon } 
                        alt = "settings icon" 
                    /> */}
                    <div className = 'flex justify-content-space-between align-items-center'>
                        {/* <FontAwesomeIcon icon = "fa-solid fa-gear" className = 'w-5 h-5' /> */}
                        <Setting2 size="20" />
                        <h3 className = 'ml-2'> Settings </h3>
                    </div>
                </NavLink>
            </div>

            <div className = 'grid absolute bottom-20'>
                
                <hr className = 'w-48' />
                
                <h3 className = 'my-4'> General </h3>
                
                <div className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5'>
                    
                    {/* <img 
                        className = 'w-5 h-5 mr-2' 
                        src = { SupportIcon } 
                        alt = "" 
                    /> */}
                    <FontAwesomeIcon icon = "fa-regular fa-circle-question" className='w-5 h-5' />
                    <h3 className = ' ml-2'> Support </h3>
                
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default SideBar
