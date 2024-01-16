import React, { useEffect } from 'react'

import direct from '../assets/ic_baseline-log-out.svg'

import { NavLink } from 'react-router-dom';

import { Building3, Chart1, Element, Hospital, Profile2User, Setting2 } from 'iconsax-react'




const SideBar = () => {
   
    const handleLogout = () => {
        localStorage.clear();
        // Reset any relevant state variables
        window.location.reload();
      };
    
      useEffect(() => {
        const handleStorageChange = () => {
          if ( !localStorage.getItem('user') ) {
            handleLogout();
          }
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);
    
    return (
        <React.Fragment>

            <div className = 'w-60 h-[83.2vh] bg-white left-0 top-20 px-4 sidebar fixed border-r z-20'>

                <header>
                    <h1 className = 'mt-7 mb-3'> Menu </h1>
                </header>

                <div className = "grid">
                    <NavLink
                        to = 'dashboard'
                        className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]'
                    >
                        <div className = 'flex justify-content-space-between align-items-center'>
                        </div>
                        <Element size = "20" />
                        <h3 className = ' ml-2'> Dashboard </h3>
                    </NavLink>

                    <NavLink
                        className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]'
                        to = "patients"
                    >
                        <div className = 'flex justify-content-space-between align-items-center'>
                            <Profile2User size = "20" />
                            <h3 className = ' ml-2'> Patients </h3>
                        </div>
                    </NavLink>


                    <NavLink
                        className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]'
                        to = "pharmacy"
                    >
                        <div className = 'flex justify-content-space-between align-items-center'>
                            <Building3 size = "20" />
                            <h3 className = 'ml-2'> Pharmacy </h3>
                        </div>
                    </NavLink>

                    <NavLink
                        className = 'flex hover:bg-primary text-side rounded-md hover:text-white p-1.5 -ml-1.5 items-center text-[14.3px] my-1'
                        to = "doctor"
                        title = "Doctors page"
                    >
                        <div className = "flex justify-content-space-between align-items-center">
                            <Hospital size = "20" />
                            <h3 className = 'ml-2 '> Doctor </h3>
                        </div>
                    </NavLink>

                    <NavLink
                        className = 'flex hover:bg-primary text-side rounded-md hover:text-white p-1.5 -ml-1.5 items-center text-[14.3px] my-1 '
                        to = "reports"
                        title = "Reports page"
                    >
                        <div className = "flex justify-content-space-between align-items-center">
                            <Chart1 size = "20" />
                            <h3 className = 'ml-2 '> Reports </h3>
                        </div>
                    </NavLink>

                    <NavLink
                        className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5 items-center rounded-md my-1 text-[14.3px]'
                        to = "settings"
                    >
                        <div className = 'flex justify-content-space-between align-items-center'>
                            <Setting2 size = "20" />
                            <h3 className = 'ml-2'> Settings </h3>
                        </div>
                    </NavLink>
                </div>

                <div className = 'grid absolute bottom-20'>
                    <hr className = 'w-48 my-4' />
                    <button
                        className = 'flex hover:bg-primary hover:text-white p-1.5 -ml-1.5'
                        onClick = { handleLogout }
                    >
                        <img
                            src = { direct }
                            alt = "log out"
                            className = 'w-5 h-5 mr-2' />
                        <h3 className = ' ml-2'> Logout </h3>

                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SideBar
