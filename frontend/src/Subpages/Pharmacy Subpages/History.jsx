import React from 'react'
import Historydata from '../../database/Historydata'
import HistoryTable from '../../Tables/HistoryTable'
import dot from '../../assets/carbon_overflow-menu-horizontal.svg'
import { Link } from 'react-router-dom'

const History = () => {

  const history = Historydata.map( h  => {
    return(
        <tr key = { h.id } >
          <td className = 'py-4 text-left pl-6'> { h.name } </td>
          <td className = 'text-left pl-6'> { h.drug } </td>
          <td className = 'text-left pl-4'> 1 satchet </td>
          <td className = 'text-left pl-16'> { h.date } </td>
          <td className = 'text-left pl-16'> { h.diagnosis } </td>
          <td className = 'pl-8'>
            <div className = 'items-center'> 
              <Link>
                <img 
                  src = { dot } 
                  alt="dot" 
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
      <HistoryTable  history = { history } />
    </React.Fragment>
  )
}

export default History
