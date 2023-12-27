// EditModal.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { addNotification, editDrug } from '../helpers/helpers';

const EditDrug = ( { isOpen, onClose, drug } ) => {
  if ( !isOpen ) return null;

  const { setDrugs, setNotifications } = useUser();

  const [ drug_name, setDrug_name ] = useState( drug.drug_name );
  const [ drug_quantity, setDrug_quantity ] = useState( drug.drug_quantity );  
  const [ brand, setBrand ] = useState();
  const [ size, setSize ] = useState();
  const [ supplier, setSupplier ] = useState();
  const [ batch, setBatch ] = useState();
  const [ nafdac, setNafdac ] = useState();
  const [ dosage, setDosage ] = useState();
  const [ concentration, setConcentration ] = useState();
  const [ description, setDescription ] = useState();
  const [ manufacturing_date, setManufacturing_date ] = useState( drug.manufacturing_date );
  const [ expiration_date, setExpiration_date ] = useState( drug.expiration_date );
  const id = drug.id;
  

  const editedDrug = {
    'id': id,
    "drug_name" : drug_name,
    "drug_quantity" : drug_quantity,
    "brand_name" : brand ,
    "package_size" : size ,
    "manufacturer" : supplier ,
    "batch_no" : batch ,
    "manufacturing_date" : manufacturing_date,
    "expiring_date" : expiration_date ,
    "nafdac_number" : nafdac ,
    "dosage_form" : dosage ,
    "concentration" : concentration ,
    "drug_description" : description
}

const message = `${drug.drug_name} has been edited on the Drugs database `

const handleClick = ( e ) => {
  e.preventDefault();
  editDrug( setDrugs, editedDrug );
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
                <div className = "flex flex-col ">
                  <label 
                    htmlFor = "" 
                    className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '
                        >
                    Brand Name(optional)
                  </label>
                  <input 
                    type = "text" 
                    placeholder = '(Tylenol with Codeine)'
                    value = { brand }
                    onChange = { (e) => setBrand( e.target.value ) } 
                    className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '
                  />
                </div>

            <div className = "flex flex-col ">
              <label 
                htmlFor = "" 
                className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '
              >
                Package Size
              </label>
              <input 
                type = "text" 
                placeholder = '30 tablets per bottle ' 
                value = { size }
                onChange = { (e) => setSize( e.target.value ) }
                className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '
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
              <div className = "flex flex-col ">
                <label 
                  htmlFor = "" 
                  className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '
                >
                  Manufacturer/Supplier
                </label>
                <input 
                  type = "text" 
                  placeholder = '' 
                  value = { supplier }
                  onChange = { (e) => setSupplier( e.target.value ) }
                  className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '                          
                />
              </div>

              <div className = "flex flex-col ">
                <label 
                  htmlFor = "" 
                  className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '
                >
                  Bactch/Lot Number
                </label>
                <input 
                  type = "date" 
                  placeholder = '___ /__ /_____' 
                  value = { batch }
                  onChange = { (e) => setBatch( e.target.value ) }
                  className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '                          
                />
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className = "grid">
                <label 
                  htmlFor = "" 
                  className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '
                >
                  NAFDAC Number
                </label>
                <input 
                  type = "text" 
                  placeholder = '' 
                  value = { nafdac }
                  onChange = { (e) => setNafdac( e.target.value ) }
                  className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '   
                />
              </div>
              <div className = "grid">
                <label 
                  htmlFor = "" 
                  className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '
                >
                  Concentration
                </label>
                <input 
                  type = "text" 
                  placeholder = '500 mg, 5mg/ml, etc.' 
                  value = { concentration }
                  onChange = { (e) => setConcentration( e.target.value ) }
                  className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '   
                />
              </div>


                <div className = "grid mb-8">
                  <label 
                    htmlFor = "" 
                    className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '
                  >
                    Drug Description
                  </label>
                  <textarea 
                    className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '   
                    name = "" 
                    id = "" 
                    cols = "30" 
                    rows = "10" 
                    placeholder = 'Enter text here' 
                    value = { description }
                    onChange = { (e) => setDescription( e.target.value ) }
                    >  
                  </textarea>
                </div>
          <div className="flex gap-4 ">
            <div className="grid">
            </div>
              </div>

              <div className='flex flex-col gap-4 '>
                <label className=' bg-white p-2 text-xs relative top-4 left-2 w-fit '>
                  Dosage Form
                </label>
                <div className = ' grid grid-cols-2 grid-rows-2 gap-x-8 '>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Tablet" ) } /> Tablet
                  </h6>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Capsules" ) } /> Capsules
                  </h6>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Syrup" ) } /> Syrup
                  </h6>
                  <h6 className = ' flex gap-1 ' >
                    <input type="radio" name="dosage" id="" onFocus = { (e) => setDosage( "Injection" ) } /> Injection
                  </h6>
                </div>
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
