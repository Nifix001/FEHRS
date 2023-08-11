import React from 'react'
import DrugTable from '../../Tables/DrugTable'
import Drugsdata from '../database/Drugsdata.js'

export default function Drugs() {

  const drugs = Drugsdata.map(dd => {
    return(
      <DrugTable 
      key={dd.id}
      sn={dd.sn}
      drug={dd.drug}
      quantity={dd.quantity}
      mfgd={dd.mfgd}
      expd={dd.expd}
      />
    )
  })

  return (
    <React.Fragment>
      {drugs}
    </React.Fragment>
  )
}

