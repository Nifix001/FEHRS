// EditModal.js

import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { editPatient } from '../helpers/helpers';

const EditPatient = ({ isOpen, onClose, patient }) => {
  if (!isOpen) return null;

  const { setPatients } = useUser();

  const [ firstname, setFirstname ] = useState(patient.firstname);
  const [ lastname, setLastname ] = useState(patient.lastname);  
  const [ matric_no, setMatric_no ] = useState(patient.matric_no);
  const [ phone_no, setPhone_no ] = useState(patient.phone_no);
  const [ email, setEmail ] = useState(patient.email);
  const prescriptions = patient.prescriptions;
  const id = patient.id;
  const middlename = patient.middlename;

  const editedPatient = {
    'id': id,
    'firstname': firstname,
    'middlename': middlename,
    'lastname': lastname,
    'email': email,
    'matric_no': matric_no,
    'phone_no': phone_no,
    'prescriptions': prescriptions
}

const handleClick = (e) => {
  e.preventDefault();
  editPatient(setPatients, editedPatient);
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
        <h2 className="text-2xl font-semibold mb-4">Edit Patient</h2>
        <div className="block">
            <div className="flex gap-4">
                <div className="flex flex-col ">
                    <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> First Name </label>
                    <input type="text" value = { firstname } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' onChange = { (e) => {
                                                                                    e.preventDefault();        
                                                                                    setFirstname(e.target.value)
                                                                                } }  />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Last Name </label>
                    <input type="text" value = { lastname } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' onChange = { (e) => {
                                                                                    e.preventDefault();        
                                                                                    setLastname(e.target.value)
                                                                                } }  />
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex flex-col ">
                        <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Matric Number </label>
                        <input type="text" value = { matric_no } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' onChange = { (e) => {
                                                                                        e.preventDefault();        
                                                                                        setMatric_no(e.target.value)
                                                                                    } }  />
                </div>
                <div className="flex flex-col ">
                        <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Phone Number </label>
                        <input type="number" value = { phone_no } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' onChange = { (e) => {
                                                                                        e.preventDefault();        
                                                                                        setPhone_no(e.target.value)
                                                                                    } }  />
                </div>
            </div>
            <div className="flex flex-col ">
                <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Email Address </label>
                <input type="text" value = { email } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' onChange = { (e) => {
                                                                                        e.preventDefault();        
                                                                                        setEmail(e.target.value)
                                                                                    } }  />
            </div>
            <div className = "flex w-full items-center justify-center mt-20">
               <button className = ' bg-primary text-white px-4 py-[6px] text-sm  rounded-md' onClick = { handleClick }  > Update </button>                                                                     
            </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;
