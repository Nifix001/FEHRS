import React, { useState } from 'react'
import DrugTable from'../../Tables/DrugTable.jsx'
import Drugsdata from '../../database/Drugsdata.js'
import del from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import { Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'
import { deleteDrugs } from '../../helpers/helpers.js'
import EditDrug from '../../modal/EditDrug.jsx'


const Drugs = () => {
  const { drugs, setDrugs } = useUser();

  const [ editModalOpen, setEditModalOpen ] = useState( false );
  const [ selectedDrug, setSelectedDrug ] = useState( null );

   // Function to open the edit modal
   const openEditModal = ( drug ) => {
    setSelectedDrug( drug );
    setEditModalOpen( true );
  };

   // Function to close the edit modal
   const closeEditModal = () => {
    setSelectedDrug( null );
    setEditModalOpen( false );
  };

  const drug = drugs.map( dd  => {
    return (
        <tr key = { dd.id } >
          <td className = 'py-4 text-base'> { dd.id } </td>
          <td className = 'text-left pl-6 text-base w-94 '> { dd.drug_name } </td>
          <td className = 'text-left pl-8 text-base'> { dd.drug_quantity } </td>
          <td className = 'text-left pl-6 text-base'> { dd.manufacturing_date } </td>
          <td className = 'text-left pl-6 text-base'> { dd.expiration_date } </td>
          <td className = 'pl-8'>
            <div className ='flex gap-2 items-center justify-start pl-8'> 
              <Link onClick = { () => openEditModal(dd) }>
                <img 
                  src = { edit } 
                  alt = "edit" 
                />
              </Link>

              <Link>
                <img 
                  src = { del }  
                  alt = "delete" 
                  onClick = {
                    (e) => {
                      e.preventDefault();
                      deleteDrugs(setDrugs, dd.id)
                    }
                  }
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
      <EditDrug 
      isOpen = { editModalOpen }
      onClose = { closeEditModal }
      drug = { selectedDrug }
      />
    </React.Fragment>
  )
}

export default Drugs


