import React from 'react'
import { useUser } from '../context/UserContext';
import { addNotification, deleteDrugs } from '../helpers/helpers';

const DeleteDrug = ({ isOpen, onClose, drug}) => {
    if (!isOpen) return null;

    const { setDrugs, setNotifications } = useUser();
  
    const message = `${drug.name} has been deleted from the Drugs database `
  
  const handleClick = (e) => {
    e.preventDefault();
    addNotification(setNotifications, message)
    deleteDrugs(setDrugs, drug.id);
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
          <h2 className="text-2xl font-semibold mb-4">Delete Drug</h2>
          <div className="flex">
              <p>Are you sure you want to delete drug?</p>
                                      
              </div>
              <div className = "flex w-full items-center justify-center mt-8 gap-6">
                 <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' onClick={handleClick} > Delete </button>                 
                 <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' onClick = {onClose}  > Cancel </button>                                          
          </div>
        </div>
      </div>
  
  )
}

export default DeleteDrug
