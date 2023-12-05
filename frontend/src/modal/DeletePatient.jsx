// EditModal.js

import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { deletePatient } from '../helpers/helpers';

const DeletePatient = ({ isOpen, onClose, patient}) => {
  if (!isOpen) return null;

  const { setPatients } = useUser();

const handleClick = (e) => {
  e.preventDefault();
  deletePatient(setPatients, p.id, token);
  onClose();
}


  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg">
        <button
          className="absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-4">Delete Patient</h2>
        <div className="block">
            <p>Are you sure you want to delete patient?</p>
             
            <div className = "flex w-full items-center justify-center mt-20">
               <button className = ' bg-primary text-white px-4 py-[6px] text-sm  rounded-md' onClick={handleClick} > Delete </button>                 
               <button className = ' bg-primary text-white px-4 py-[6px] text-sm  rounded-md' onClick = {onClose}  > Cancel </button>                                                                     
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePatient;
