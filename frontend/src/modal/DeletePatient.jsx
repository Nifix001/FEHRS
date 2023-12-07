// EditModal.js

import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { addNotification, deletePatient } from '../helpers/helpers';

const DeletePatient = ({ isOpen, onClose, patient}) => {
  if (!isOpen) return null;

  const { setPatients, setNotifications } = useUser();

  const message = `${patient.firstname + " " + patient.lastname} has been deleted from the Patients database `

const handleClick = (e) => {
  e.preventDefault();
  addNotification(setNotifications, message)
  deletePatient(setPatients, patient.id);
  onClose();
}


  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg">
        {/* <button
          className="absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick={onClose}
        >
          Close
        </button> */}
        <h2 className="text-2xl font-semibold mb-4">Delete Patient</h2>
        <div className="flex">
            <p>Are you sure you want to delete patient?</p>
                                    
            </div>
            <div className = "flex w-full items-center justify-center mt-8 gap-6">
               <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' onClick={handleClick} > Delete </button>                 
               <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' onClick = {onClose}  > Cancel </button>                                          
        </div>
      </div>
    </div>
  );
};

export default DeletePatient;
