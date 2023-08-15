import React from 'react'
import DrugTable from'../../Tables/DrugTable.jsx'
import Drugsdata from '../../database/Drugsdata.js'

const Drugs = () => {
  
  const drugs = Drugsdata.map(dd => {
    return(
      <tr key={dd.id}>
        <td className='py-4'>{dd.sn}</td>
        <td className='text-left pl-6 '>{dd.drug}</td>
        <td className='text-left pl-8'>{dd.quantity}</td>
        <td className='text-left pl-6'>{dd.mfgd}</td>
        <td className='text-left pl-6'>{dd.expd}</td>
        <td className='flex'>
          <button><img src="" alt="" /></button>
          <button><img src="" alt="" /></button>
        </td>
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


