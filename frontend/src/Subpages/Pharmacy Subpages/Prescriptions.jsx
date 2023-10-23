import React from 'react'
import PrescriptionTable from '../../Tables/PrescriptionTable'
import Prescriptionsdata from '../../database/Prescriptionsdata.js'
import { Link } from 'react-router-dom'
import dot from '../../assets/carbon_overflow-menu-horizontal.svg'

const Prescriptions = () => {

  const prescriptions = Prescriptionsdata.map( p  =>  {
    
    return(

        <tr key = { p.id } >
          <td className = 'py-4 text-left pl-6 text-base'> { p.name } </td>
          <td className = 'text-left pl-6 text-base'> { p.matricno } </td>
          <td className = 'text-left pl-16 text-base'> { p.drug } </td>
          <td className = 'text-left pl-4 text-base'> 1 satchet </td>
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
      <PrescriptionTable  prescriptions = { prescriptions } />
    </React.Fragment>
  )
}

export default Prescriptions
