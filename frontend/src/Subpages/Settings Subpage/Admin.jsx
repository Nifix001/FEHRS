import { ArrowLeft3 } from 'iconsax-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';

const Admin = () => {

  const location = useNavigate();
  const  { user, users } = useUser();
  const roles = [ "Doctor", "Pharmacy", "Admin" ];
  // const [selectedRoles, setSelectedRoles] = useState({});

  // Assuming users have a property `roles` that contains an array of role names
  const initialSelectedRoles = {};
  users.map(user => {
    if (user.role !== null) {
      console.log(user.role.name);
      initialSelectedRoles[user.id] = user.role.name; // Assuming a user can have only one role
    }
  });
  
  const [selectedRoles, setSelectedRoles] = useState(initialSelectedRoles);
  

  // const existingRole = ;

  const handleRoleButtonClick = (userId, role) => {
    setSelectedRoles((prevSelectedRoles) => {
      // Clear the selected role if the same role is clicked again
      const newSelectedRoles = { ...prevSelectedRoles };
      if (newSelectedRoles[userId] === role) {
        delete newSelectedRoles[userId];
      } else {
        newSelectedRoles[userId] = role;
      }
      return newSelectedRoles;
    });
  };
  




  return (
    <div className = '  h-[83.2vh] w-[60vw] flex flex-col gap-4 ' >
     { user.role_id === 2 ?
     <>
          <div className = ' w-full h-12 rounded-md bg-white flex items-center p-3 cursor-pointer gap-1 '
                onClick = {
                  (e) => {
                    e.preventDefault();
                    location('/user/settings')
                  }
                }
          >
            <ArrowLeft3 size={12} />
            <h3 className = 'text-xs' >Admin Mangement</h3>
          </div>
          <div className = ' w-full h-full rounded-xl bg-white p-9 ' >
              {
                users.map(user => (
                  
                  <div key={user.id} className = ' flex w-full justify-between items-center mb-10 relative '> 
                    <h2> {user.name} </h2>
                    <div className='flex absolute left-[200px] -mt-1 gap-3 ' >
                      {
                        roles.map((role, index) => (
                          <button 
                            key={index}
                            className={`px-4 py-1 border ${
                              selectedRoles[user.id] === role 
                                ? 'bg-primary text-white' // Apply selected style
                                : 'border-gray-500 text-gray-500' // Apply default style
                              } rounded-[4px] focus:bg-primary focus:text-white active:bg-primary`}
                              onClick={() => handleRoleButtonClick(user.id, role)}
                              >
                            {role}
                          </button>
                        ) )
                      }
                      {/* <button className='px-4 py-1 border border-gray-500 text-gray-500 rounded-[4px] focus:bg-primary focus:text-white active:bg-primary'> Admin </button>
                            console.log(user.role);
                      <button className='px-4 py-1 border border-gray-500 text-gray-500 rounded-[4px] focus:bg-primary focus:text-white active:bg-primary'> Pharmacist </button> */}
                    </div>
                    <button>
                      ...
                    </button>
                  </div>
                ))
              }
          </div> 
     </>
      : <div className='w-full h-full rounded-xl bg-white p-9 flex items-center justify-center'>
          <div className=' flex flex-col items-center justify-center' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className=' text-sm mt-1 '> You do not have access to this page. Please contact the admin for more information. </p>
          </div>
      </div>
      }
    </div>
  )
}

export default Admin
