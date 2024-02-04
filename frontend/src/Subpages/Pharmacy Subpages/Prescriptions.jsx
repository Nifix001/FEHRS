import React, { useState } from 'react'
import PrescriptionTable from '../../Tables/PrescriptionTable'
import Prescriptionsdata from '../../database/Prescriptionsdata.js'
import { Link } from 'react-router-dom'

import del from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import dot from '../../assets/carbon_overflow-menu-horizontal.svg'

import { useUser } from '../../context/UserContext.jsx'
import { deletePrescription } from '../../helpers/helpers.js'
import EditPrescription from '../../modal/EditPrescription'
import DeletePrescription from '../../modal/DeletePrescription'

const Prescriptions = () => {

  const { patients, prescriptions, setPrescriptions } = useUser();
  const [prescriptionOptions, setPrescriptionOptions] = useState({});

  
  const [ editModalOpen, setEditModalOpen ] = useState( false );
  const [ deleteModalOpen, setDeleteModalOpen ] = useState( false );
  const [ selectedPrescription, setSelectedPrescription ] = useState( null );

   // Function to open the edit modal
   const openEditModal = ( prescription ) => {
    setSelectedPrescription( prescription );
    setEditModalOpen( true );
  };

  const openDeleteModal = ( prescription ) => {
    setSelectedPrescription( prescription );
    setDeleteModalOpen( true );
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setSelectedPrescription( null );
    setEditModalOpen( false );
  };
  const closeDeleteModal = () => {
    setSelectedPrescription( null );
    setDeleteModalOpen( false );
  };

  const toggleOptions = (prescriptionId) => {
    setPrescriptionOptions((prevOptions) => ({
      ...prevOptions,
      [prescriptionId]: !prevOptions[prescriptionId],
    }));
  };

  const prescription = prescriptions.sort((a, b) => a.id - b.id).map( ( p, index )  =>  {
     
    const patient = patients.find(patient => patient.matric_no === p.patient.matric_no);
    // console.log(patient);
    const name = patient.firstname + ' ' + patient.lastname;


    return(

        <tr key = { p.id } className = 'mb-16 pb-16 border-b' >
          <td className = ' text-base ' > { index + 1 } </td>
          <td className = 'py-4 text-left pl-6 text-base w-64 '> { name } </td>
          <td className = 'text-left pl-6 text-base'> { p.patient.matric_no } </td>
          <td className = 'text-left pl-16 text-base my-16 '> {
              p.drugs.map(d => (
                <span key = { d.id } className = 'block mb-2' > {`${ d.drug_name }(${d.pivot.quantity}) `} </span>
              ))
            } </td>
          {/* <td className = 'text-left pl-4 text-base mt- 10 '> { p.drug_quantity } </td> */}
          <td className = 'pl-8'>
          <div className = 'flex items-center justify-start pl-6 '>            
              {/* <button
                    className = "flex-shrink-0"
                    onClick = {() => toggleOptions(p.id)}
                >
                <img 
                  src = { dot }  
                  alt ="dot" 
                />
              </button> 
              <div 
                  className = {`${ prescriptionOptions[p.id] ? '' : 'hidden' } absolute right-3 -mt-3 bg-[#f9f9f9]  border border-gray-300 shadow-md rounded-md text-[12px] `}
                  onMouseLeave={() => toggleOptions(p.id)}
                >
                  <button className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 " 
                  onClick = { () => openEditModal(p) }
                  >
                    <img src = { edit } alt="" className = 'text-black filter grayscale'  />
                    Edit
                  </button>
                  <button className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 "  onClick = { () => openDeleteModal(p) }>
                    <img src = { del } alt="" className = 'text-black filter grayscale' />
                    Delete
                  </button>
                </div> */}
                <div className='flex gap-3 items-center justify-center pl-6' >
                  <button className='px-6 py-2 rounded-lg text-white text-sm bg-secondary4 hover:bg-opacity-80 hover:scale-105 ' > Accept </button>
                  <button className='px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-opacity-80 hover:scale-105 ' > Decline </button>
                </div>
            </div>
          </td>
   
        </tr>
      )
    }
  )

  return (
    <React.Fragment>
      <PrescriptionTable  prescriptions = { prescription } />
      <EditPrescription 
      isOpen = { editModalOpen }
      onClose = { closeEditModal }
      prescription = { selectedPrescription }
      />
      <DeletePrescription 
      isOpen = { deleteModalOpen }
      onClose = { closeDeleteModal }
      prescription = { selectedPrescription }
      />
    </React.Fragment>
  )
}

export default Prescriptions
