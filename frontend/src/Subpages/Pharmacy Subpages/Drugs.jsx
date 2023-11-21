import React from 'react'
import DrugTable from'../../Tables/DrugTable.jsx'
import Drugsdata from '../../database/Drugsdata.js'
import del from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'


const Drugs = () => {
  const { drugs } = useUser();
  const drug = drugs.map( dd  => {
    return (
        <tr key = { dd.id } >
          <td className = 'py-4 text-base'> { dd.id } </td>
          <td className = 'text-left pl-6 text-base '> { dd.drug_name } </td>
          <td className = 'text-left pl-8 text-base'> { dd.drug_quantity } </td>
          <td className = 'text-left pl-6 text-base'> { dd.manufacturing_date } </td>
          <td className = 'text-left pl-6 text-base'> { dd.expiration_date } </td>
          <td className = 'pl-8'>
            <div className ='flex gap-2 items-center justify-start pl-8'> 
              <Link>
                <img 
                  src = { edit } 
                  alt = "edit" 
                />
              </Link>

              <Link>
                <img 
                  src = { del }  
                  alt = "delete" 
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
      <DrugTable drugs = { drug } />
    </React.Fragment>
  )
}

export default Drugs


