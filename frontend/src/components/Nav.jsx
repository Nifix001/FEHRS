import React, { useState } from 'react'

import logo from '../assets/futa logo.png'
import search from '../assets/akar-icons_search.svg'
import { CloseCircle, Notification, User } from 'iconsax-react'
import { useUser } from '../context/UserContext'
import { deleteNotification } from '../helpers/helpers'
import { Link } from 'react-router-dom'


const Nav = () => {

    const [ openNotification, setOpenNotification ] = useState(false);
    const [ searchActive, setSearchActive ] = useState( false );
    const { user, notifications, setNotifications } = useUser();
    const roles = ["Unverified", "Admin", "Pharmacy", "Doctor"]

  return (
    <React.Fragment>
        <nav className = 'flex fixed z-10 bg-white h-20 w-full top-0 border border-gray-300 justify-between px-2 items-center'>
            <div className = 'border-solid border-gray-300 border-r h-20  pr-[64px] pl-[14px] flex items-center gap-3 '>
                <img 
                    src = { logo } 
                    alt = "logo" 
                />
                <h1 className = 'text-primary text-3xl font-extrabold'> FEHRS </h1>
            </div>

            <div className = 'relative'>
                <div className = 'flex' >
                    <input 
                        type = 'search' 
                        placeholder = 'Search' 
                        className = 'border rounded-md font-span font-normal text-base border-solid border-gray-300 w-182 h-10 p-2 outline-0' 
                        onChange={() => setSearchActive(true)}
                    />
                    <img 
                        className = 'relative right-12 cursor-pointer opacity-50' 
                        src = { search } 
                        alt = "search" 
                    />
                </div>
                <div 
                    className = {` bg-white border border-gray-300 w-182 h-fit py-2 absolute z-10 mt-1 rounded-b-xl shadow-lg ${ !searchActive ? 'hidden': 'block' } `}
                    onMouseLeave = {() => setSearchActive(false)}
                >
                    <h3 className = ' p-3 hover:text-white hover:bg-primary ' >Hello world</h3>
                </div>
            </div>

            <Link to="/user/settings/personal" className = 'flex items-center justify-center gap-4'>
                <div className = 'w-12 h-12 rounded-full bg-gray-200 text-white flex items-center justify-center' ><User size={32} /></div>
                <div>
                    <p className = 'font-bold text-base text-black'> { user.name } </p>
                    <p className = 'font-normal text-xs text-black'> { roles[user.role_id - 1] } </p>
                </div>
            </Link>
            <div className = 'flex pr-4 relative '>
                <Notification 
                    size="32" 
                    color="#212121" 
                    className = 'mr-4 cursor-pointer opacity-50' 
                    onClick = { () => setOpenNotification( !openNotification ) } 
                    onMouseEnter = { () => setOpenNotification( true ) }
                />
                { notifications.length > 0 && <div className = ' p-2 w-4 h-4 absolute text-white bg-red-600 rounded-full  text-xs flex items-center justify-center left-4 ' > { notifications.length } </div>}
                {
                    openNotification && 
                    <div 
                        className = ' absolute bg-white shadow-2xl w-[450px] h-fit top-10 right-3 z-10 py-6 border '
                        onMouseLeave = { () => setOpenNotification( false ) } 
                    >
                            {
                                notifications === null || notifications.length === 0 ? <div className = ' flex items-center justify-center opacity-20 '>
                                    You currently have no notifications.
                                </div> 
                                :<>
                                    <ul>
                                        {
                                            notifications.slice(0,3).map(item => (
                                                <li key = { item.id } className = ' text-sm hover:bg-primary hover:text-white text-primary py-2 px-8 flex items-center justify-between ' > <span> { item.message } </span>
                                                <CloseCircle size={30} onClick={() => deleteNotification(setNotifications, item.id)} className = ' cursor-pointer ' />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            }
                    </div>
                }
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Nav
