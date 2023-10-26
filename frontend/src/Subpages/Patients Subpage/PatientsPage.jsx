import React from 'react'
import PatientsTable from '../../Tables/PatientsTable'
import Patientsdata from '../../database/Patientsdata'
import { Link } from 'react-router-dom'
import dot from '../../assets/carbon_overflow-menu-horizontal.svg'

const PatientsPage = () => {

    const patients = Patientsdata.map( p  =>  {
    
        return(
    
            <tr key = { p.id } >
              <td className = 'py-4 text-left pl-6 text-base'> { p.name } </td>
              <td className = 'text-left pl-6 text-base'> { p.matricno } </td>
              <td className = 'text-left pl-6 text-base'> 0{ p.phone } </td>
              <td className = 'text-left text-base'> { p.email } </td>
              <td className = 'text-left pl-3 text-base'> { p.drug } </td>
              <td className = 'pl-8'>
                <div className = 'flex items-center justify-start pl-1 '> 
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
      <PatientsTable  patients = { patients } />
    </React.Fragment>
  )
}

export default PatientsPage
