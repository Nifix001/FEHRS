import React, { useState } from 'react'
import PrescriptionTable from '../../Tables/PrescriptionTable'
import Prescriptionsdata from '../../database/Prescriptionsdata.js'
import { Link } from 'react-router-dom'

import del from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import dot from '../../assets/carbon_overflow-menu-horizontal.svg'

import { useUser } from '../../context/UserContext.jsx'
import { deletePrescription } from '../../helpers/helpers.js'

const Prescriptions = () => {

  const { patients, prescriptions, setPrescriptions } = useUser();
  const [prescriptionOptions, setPrescriptionOptions] = useState({});

  const toggleOptions = (prescriptionId) => {
    setPrescriptionOptions((prevOptions) => ({
      ...prevOptions,
      [prescriptionId]: !prevOptions[prescriptionId],
    }));
  };

  const prescription = prescriptions.map( p  =>  {
     
    const patient = patients.find(patient => patient.matric_no === p.patient.matric_no);
    // console.log(patient);
    const name = patient.firstname + ' ' + patient.lastname;


    return(

        <tr key = { p.id } className = 'mb-16 pb-16 border-b' >
          <td className = 'py-4 text-left pl-6 text-base w-64 '> { name } </td>
          <td className = 'text-left pl-6 text-base'> { p.patient.matric_no } </td>
          <td className = 'text-left pl-16 text-base my-16 '> {
              p.drugs.map(d => (
                <span key = { d.id } className = 'block mb-2' > { d.drug_name } </span>
              ))
            } </td>
          <td className = 'text-left pl-4 text-base mt- 10 '> { p.drug_quantity } </td>
          <td className = 'pl-8'>
            <div className = 'flex items-center justify-start pl-6 '> 
              <button
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
                  {/* <!-- Options for Item 1 --> */}
                  <button className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 ">
                    <img src = { edit } alt="" className = 'text-black filter grayscale'  />
                    Edit
                  </button>
                  <button className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 " onClick={() => deletePrescription(setPrescriptions, p.id)}>
                    <img src = { del } alt="" className = 'text-black filter grayscale' />
                    Delete
                  </button>
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
    </React.Fragment>
  )
}

export default Prescriptions
