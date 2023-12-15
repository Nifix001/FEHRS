// EditModal.js

import React from 'react'
import { useUser } from '../context/UserContext';
import { addNotification, deletePrescription } from '../helpers/helpers';

const DeletePrescription = ({ isOpen, onClose, prescription}) => {
    if (!isOpen) return null;

    const { setPrescriptions, setNotifications } = useUser();
  
    const message = `${prescription.name } has been deleted from the Prescriptions database `
  
  const handleClick = (e) => {
    e.preventDefault();
    addNotification(setNotifications, message)
    deletePrescription(setPrescriptions, prescription.id);
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
          <h2 className="text-2xl font-semibold mb-4">Delete Prescription</h2>
          <div className="flex">
              <p>Are you sure you want to delete prescription?</p>
                                      
              </div>
              <div className = "flex w-full items-center justify-center mt-8 gap-6">
                 <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' onClick={handleClick} > Delete </button>                 
                 <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' onClick = {onClose}  > Cancel </button>                                          
          </div>
        </div>
      </div>
  )
}

export default DeletePrescription
