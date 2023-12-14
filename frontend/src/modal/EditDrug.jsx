// EditModal.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { addNotification, editDrug } from '../helpers/helpers';

const EditDrug = ( { isOpen, onClose, drug } ) => {
  if ( !isOpen ) return null;

  const { setDrugs, setNotifications } = useUser();

  const [ drug_name, setDrug_name ] = useState( drug.drug_name );
  const [ drug_quantity, setDrug_quantity ] = useState( drug.drug_quantity );  
  const [ manufacturing_date, setManufacturing_date ] = useState( drug.manufacturing_date );
  const [ expiration_date, setExpiration_date ] = useState( drug.expiration_date );
  const id = drug.id;
  

  const editedDrug = {
    'id': id,
    'drug_name': drug_name,
    'drug_quantity': drug_quantity,
    'manufacturing_date': manufacturing_date,
    'expiration_date': expiration_date
}

const message = `${drug.drug_name} has been edited on the Drugs database `

const handleClick = ( e ) => {
  e.preventDefault();
  editPatient( setDrugs, editedDrug );
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
        <h2 className = "text-2xl font-semibold mb-4"> Edit Drug </h2>
        <div className = "block">
            <div className = "flex gap-4">
                <div className = "flex flex-col ">
                    <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Drug Name </label>
                    <input type = "text" value = { drug_name } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                          onChange = { (e) => {
                                                e.preventDefault();        
                                                setDrug_name( e.target.value )
                                              } 
                                      } 
                      />
                </div>
                <div className = "flex flex-col ">
                    <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Drug Quantity(pcs)</label>
                    <input type = "text" value = { drug_quantity } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                          onChange = { (e) => {
                                                e.preventDefault();        
                                                setDrug_quantity( e.target.value )
                                              } 
                                      } 
                    />
                </div>
            </div>
            <div className = "flex gap-4">
                <div className = "flex flex-col ">
                        <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> MFG Date </label>
                        <input type = "text" value = { manufacturing_date } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                               onChange = { (e) => {
                                                    e.preventDefault();        
                                                    setManufacturing_date( e.target.value )
                                                  } 
                                          } 
                        />
                </div>
                <div className = "flex flex-col ">
                        <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> EXP date </label>
                        <input type = "text" value = { expiration_date } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                onChange = { (e) => {
                                                      e.preventDefault();        
                                                      setExpiration_date( e.target.value )
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
  );
};

export default EditDrug;
