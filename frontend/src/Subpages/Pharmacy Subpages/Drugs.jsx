import React from 'react'
import DrugTable from'../../Tables/DrugTable.jsx'
import Drugsdata from '../../database/Drugsdata.js'

const Drugs = () => {
  
  const drugs = Drugsdata.map(dd => {
    return(
      <tr key={dd.id}>
        <td className='py-4'>{dd.sn}</td>
        <td className='text-left pl-6 '>{dd.drug}</td>
        <td className=''>{dd.quantity}</td>
        <td>{dd.mfgd}</td>
        <td>{dd.expd}</td>
      </tr>
    )
  })

  return (
    <React.Fragment>
      <DrugTable drugs={drugs} />
    </React.Fragment>
  )
}

export default Drugs


