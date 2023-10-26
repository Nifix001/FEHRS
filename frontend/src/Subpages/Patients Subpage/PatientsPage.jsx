import React from 'react'
import PatientsTable from '../../Tables/PatientsTable'
import Patientsdata from '../../database/Patientsdata'
import { Link, NavLink } from 'react-router-dom'

import dot from '../../assets/carbon_overflow-menu-horizontal.svg'
import search from '../../assets/akar-icons_search.svg'
import filter from '../../assets/cil_filter.svg'

const PatientsPage = () => {


  const handleFile = (e) => {
    e.preventDefault();
    const input = document.getElementById('file');
    input.click();
  }


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
      <div className = 'mt-2 mb-4 flex rounded-md gap-0 plinks' >
        <NavLink 
          className = 'border text-xs px-4 py-2 flex items-center justify-center rounded-s-md font-bold shadow-sm text-gray-500 '
          to = '/user/patients' 
        >
          Patients
        </NavLink>
        <NavLink 
          className = 'border text-xs px-4 py-2 flex items-center justify-center rounded-e-md font-bold shadow-sm text-gray-500 '
          to = '/user/patiens/admin' 
        >
          Admin
        </NavLink>
      </div>
      <div className = 'flex w-full justify-between items-center p-2' > 
        <header>
          <h1 className = 'pl-2' > Patients (Students) </h1>
        </header>
        <div className ='flex gap-4 items-center'>
          <Link 
            to = "new/personal" 
            className=' font-span text-base font-normal py-2 px-5 text-white  bg-primary border border-primary rounded-md'
          >
            Add New
          </Link>

          <NavLink 
            to = "" 
            className='text-primary font-span text-base font-normal py-2 px-5 border border-primary rounded-md'  
            onClick = { handleFile }
          >
            Import
          </NavLink>

          <input 
            type = "file" 
            id = 'file' 
            className = 'hidden' 
            accept = '.xlsx'  
          />

          <div className = 'flex gap-4'>
            <img 
              className = 'relative left-12' 
              src = { search }  
              alt = "search" 
            />

            <input 
              type = "text"  
              className = 'border rounded-md font-span font-normal text-base border-solid  border-gray-300 w-56 h-10 p-2 indent-8 placeholder:text-gray-300 text-gray-600 outline-none'
            />

            <div 
              className = 'border rounded-md items-center border-gray-300 p-1'
            >
              <img 
                src = { filter } 
                alt ="filter" 
              />
          </div>
          </div>
        </div>
      </div>
      <PatientsTable  patients = { patients } />
    </React.Fragment>
  )
}

export default PatientsPage
