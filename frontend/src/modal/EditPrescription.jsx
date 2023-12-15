import React, { useState } from 'react'
import { useUser } from '../context/UserContext';
import { addNotification, editPrescription } from '../helpers/helpers';

const EditPrescription = ( { isOpen, onClose, prescription } ) => {
    if ( !isOpen ) return null;

  const { setPrescriptions, setNotifications } = useUser();

  const [ name, setName ] = useState( prescription.name );
  const [ matric_no, setMatric_no ] = useState( prescription.matric_no );
  const [ drug_name, setDrug_name ] = useState( prescription.drug_name );
  const [ drug_quantity, setDrug_quantity ] = useState( prescription.drug_quantity );
  const id = prescription.id;


  const editedPrescription = {
    'id': id,
    'name': name,
    'matric_no': matric_no,
    'drug_name': drug_name,
    'drug_quantity': drug_quantity
}

const message = `${prescription.name} has been edited on the Patients database `

const handleClick = ( e ) => {
  e.preventDefault();
  editPrescription( setPrescriptions, editedPrescription );
  addNotification( setNotifications, message )
  onClose();
}


  return (
    <div className = "fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className = "relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg">
        <button
          className = "absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick = { onClose } 
        >
          Close
        </button>
        <h2 className = "text-2xl font-semibold mb-4"> Edit Patient </h2>
        <div className = "block">
            <div className = "flex gap-4">
                <div className = "flex flex-col ">
                    <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Name </label>
                    <input type = "text" value = { name } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                          onChange = { (e) => {
                                                e.preventDefault();        
                                                setName( e.target.value )
                                              } 
                                      } 
                      />
                </div>
                <div className = "flex flex-col ">
                    <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Matric Number</label>
                    <input type = "text" value = { matric_no } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                          onChange = { (e) => {
                                                e.preventDefault();        
                                                setMatric_no( e.target.value )
                                              } 
                                      } 
                    />
                </div>
            </div>
            <div className = "flex gap-4">
                <div className = "flex flex-col ">
                        <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Matric Number </label>
                        <input type = "text" value = { drug_name } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                               onChange = { (e) => {
                                                    e.preventDefault();        
                                                    setDrug_name( e.target.value )
                                                  } 
                                          } 
                        />
                </div>
                <div className = "flex flex-col ">
                        <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Quantity </label>
                        <input type = "number" value = { drug_quantity } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                onChange = { (e) => {
                                                      e.preventDefault();        
                                                      setDrug_quantity( e.target.value )
                                                    } 
                                            } 
                        />
                </div>
            </div>
            <div className = "flex w-full items-center justify-center mt-20">
               <button className = ' bg-primary text-white px-4 py-[6px] text-sm  rounded-md' onClick = { handleClick }  > Update </button>                                                                     
            </div>
        </div>
      </div>
    </div>
  )
}

export default EditPrescription
