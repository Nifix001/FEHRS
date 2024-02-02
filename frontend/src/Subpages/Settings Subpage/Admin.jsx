// Admin.jsx

import { ArrowLeft3 } from 'iconsax-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import ConfirmAssign from '../../modal/ConfirmAssign';

const Admin = () => {
  const location = useNavigate();
  const { user, users } = useUser();
  const roles = ["Doctor", "Pharmacy", "Admin"];
  const [confirm, setConfirm] = useState(false);
  const [selected, setSelected] = useState()
  const [confirmStates, setConfirmStates] = useState({
    id: false
  });
  const [selectedRoles, setSelectedRoles] = useState({});

  const handleRoleButtonClick = (userId, role, e, index) => {
    // Check if a role is selected
    if (!role) {
      console.error("Please select a role");
      return;
    }
    console.log(userId);

    setConfirmStates((prevStates) => ({
      ...prevStates,
      [userId]: true,
    }));
    setSelectedRoles((prevSelectedRoles) => ({
      ...prevSelectedRoles,
      [userId]: e.target.value,
    }));
    // console.log("Selected Roles:", selectedRoles);
    setConfirm(true); // Move this line to ensure the confirm modal is opened
    // console.log(confirmStates);
    // console.log(e.target.value);
    setSelected(e.target.value)
  };

  return (
    <div className="h-[83.2vh] w-[60vw] flex flex-col gap-4">
      {user.role_id === 2 ? (
        <>
          <div
            className="w-full h-12 rounded-md bg-white flex items-center p-3 cursor-pointer gap-1"
            onClick={(e) => {
              e.preventDefault();
              location('/user/settings');
            }}
          >
            <ArrowLeft3 size={12} />
            <h3 className="text-xs">Admin Management</h3>
          </div>
          <div className="w-full h-full rounded-xl bg-white p-9">
            {users.map((current_user, userIndex) => (
              <div key={current_user.id} className="flex w-full justify-between items-center mb-10 relative">
                <h2>{current_user.name}</h2>
                <div className="flex absolute left-[200px] -mt-1 gap-3">
                  {roles.map((role, index) => (
                    <React.Fragment key={index}>
                      <button
                        className={`px-4 py-1 border ${
                          selectedRoles[current_user.id] === role
                            ? 'bg-primary text-white' // Apply selected style
                            : 'border-gray-500 text-gray-500' // Apply default style
                        } rounded-[4px] focus:bg-primary focus:text-white active:bg-primary`}
                        value={ roles[index] }
                        onClick={(e) => {
                          handleRoleButtonClick(current_user.id, role, e, userIndex); // Call handleRoleButtonClick with the userId and role
                        }}
                      >
                        {role}
                      </button>
                      {confirm && (
                          <ConfirmAssign
                            setConfirm={(value) => setConfirm(value)}
                            user={current_user}
                            role={selected}
                            setSelectedRoles={(assignedRole, index) => {
                              // Handle the role assignment confirmation here
                              // console.log(`Role assigned: ${selected}`);
                              setSelectedRoles((prevSelectedRoles) => ({
                                ...prevSelectedRoles,
                                [index]: assignedRole,
                              }));
                              console.log(selectedRoles);
                            }}
                            onRoleAssigned={(assignedRole) => {
                              // You can handle the role assigned event here if needed
                              console.log(`Role assigned: ${ selected}`);
                              console.log(selected);
                            }}
                          />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <button>...</button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full h-full rounded-xl bg-white p-9 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className="text-sm mt-1">You do not have access to this page. Please contact the admin for more information.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
