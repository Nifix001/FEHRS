import React from 'react'
import PrescriptionTable from '../../Tables/PrescriptionTable'
import Prescriptionsdata from '../../database/Prescriptionsdata.js'
import { Link } from 'react-router-dom'
import dot from '../../assets/carbon_overflow-menu-horizontal.svg'
import { useUser } from '../../context/UserContext.jsx'

const Prescriptions = () => {

  const { patients, prescriptions } = useUser();
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
              <Link>
                <img 
                  src = { dot }  
                  alt ="dot" 
                />
              </Link>
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
