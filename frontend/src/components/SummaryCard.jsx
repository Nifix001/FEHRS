import React from 'react'
import dots from '../assets/Dashboard/Group 11.svg'
import profile from '../assets/Dashboard/Group.svg'
import comm from '../assets/Dashboard/noun-community-5666932 1.svg'
import dept from '../assets/Dashboard/Group (1).svg'
import { Link, NavLink } from 'react-router-dom'

const SummaryCard = () => {
  return (
    <React.Fragment>
        <div className = 'flex gap-4 ml-8 my-3'>
            <NavLink to="/user/patients" className = 'w-87.25 h-46.5 bg-secondary3 rounded-md px-5 py-5'>
                <div className = 'flex items-center'>
                    <p className = 'font-welcome text-xl text-white font-medium mr-auto'> Total Patients </p>
                    <Link> 
                        {/* <img 
                            className = 'ml-auto' 
                            src = { dots } 
                            alt = "..." 
                        /> */}
                    </Link>
                </div>

                <div className = 'flex pt-8'>
                    <p className = 'font-welcome text-3xl text-white font-bold'> 2387 </p>
                    <div className = 'bg-tertiary-1  p-2 w-21.5 h-21.5 rounded-full flex items-center justify-center -mt-6 ml-36'>
                        <img 
                            src = { profile } 
                            alt = "profile" 
                        />
                    </div>
                </div>
            </NavLink>

            <NavLink to="/user/reports" className = 'w-87.25 h-46.5 bg-secondary4 rounded-md px-5 py-5'>
                <div className = 'flex items-center'>
                    <p className = 'font-welcome text-xl text-white font-medium mr-auto'> Total Departments </p>
                    <Link>
                        {/* <img 
                            className = 'ml-auto' 
                            src = { dots } 
                            alt = "..." 
                        /> */}
                    </Link>
                </div>
                <div className = 'flex pt-8'>
                    <p className = 'font-welcome text-3xl text-white font-bold '> 30 </p>
                    <div className = 'bg-tertiary-2  p-2 w-21.5 h-21.5 rounded-full flex items-center justify-center -mt-6 ml-44'>
                        <img 
                            src = { comm } 
                            alt = "profile" 
                        />
                    </div>
                </div>
            </NavLink>

            <NavLink to="/user/reports" className = 'w-87.25 h-46.5 bg-secondary5 rounded-md px-5 py-5'>
                <div className = 'flex items-center'>
                    <p className = 'font-welcome text-xl text-white font-medium mr-auto'> Total diagnosis </p>
                    <Link>
                        {/* <img 
                            className = 'ml-auto' 
                            src = { dots } 
                            alt = "..." 
                        /> */}
                    </Link>
                </div>
                <div className = 'flex pt-8'>
                    <p className = 'font-welcome text-3xl text-white font-bold'> 456 </p>
                    <div className = 'bg-tertiary-3  p-2 w-21.5 h-21.5 rounded-full flex items-center justify-center -mt-6 ml-36'>
                        <img 
                            src = { dept } 
                            alt = "profile" 
                        />
                    </div>
                </div>
            </NavLink>
        </div>
    </React.Fragment>
  )
}

export default SummaryCard
