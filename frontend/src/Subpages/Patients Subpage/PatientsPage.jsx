import React, { useState } from 'react'
import PatientsTable from '../../Tables/PatientsTable'
import Patientsdata from '../../database/Patientsdata'
import { Link, NavLink } from 'react-router-dom'

import dot from '../../assets/carbon_overflow-menu-horizontal.svg'
import search from '../../assets/akar-icons_search.svg'
import filter from '../../assets/cil_filter.svg'
import del from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import { useUser } from '../../context/UserContext'
import { deletePatient } from '../../helpers/helpers'

const PatientsPage = () => {

  const { patients, setPatients, token } = useUser();
  const [patientOptions, setPatientOptions] = useState({});

  const toggleOptions = (patientId) => {
    setPatientOptions((prevOptions) => ({
      ...prevOptions,
      [patientId]: !prevOptions[patientId],
    }));
  };


  const handleFile = (e) => {
    e.preventDefault();
    const input = document.getElementById('file');
    input.click();
  }


    const patient = patients.map( p  =>  {
    
        return(
    
            <tr key = { p.id } >
              <td className = 'py-4 text-left pl-6 text-base w-64'> {`${ p.lastname } ${ p.firstname }`} </td>
              <td className = 'text-left pl-6 text-base'> { p.matric_no } </td>
              <td className = 'text-left pl-6 text-base'> 0{ p.phone_no } </td>
              <td className = 'text-left text-base'> { p.email } </td>
              <td className = 'text-left pl-3 text-base'> 
              {/* { p.prescriptions.map(d => {
                return (
                  <span key = { d.id } > { d.diagnosis } </span>
                  )
                }) } */}
                {p.prescriptions.length > 0 && p.prescriptions[p.prescriptions.length - 1].diagnosis}
                </td>
              {/* <td className = 'text-left pl-3 text-base'> { p.drug } </td> */}
              <td className = 'pl-8'>
                <div className = 'flex items-center justify-start pl-1 '> 
                  <Link>
                    {/*  */}
                    {/* ... */}
                    <button 
                      className = "flex-shrink-0"
                      onClick = {() => toggleOptions(p.id)}
                      // onMouseEnter={() => toggleOptions(p.id)}
                      // onMouseLeave={() => toggleOptions(p.id)}
                    >
                      <img 
                      src = { dot }  
                      alt ="dot" 
                      />
                    </button>
                    <div 
                      className = {`${ patientOptions[p.id] ? '' : 'hidden' } absolute right-3 -mt-3 bg-[#f9f9f9]  border border-gray-300 shadow-md rounded-md text-[12px] `}
                      onMouseLeave={() => toggleOptions(p.id)}
                    >
                      {/* <!-- Options for Item 1 --> */}
                      <button className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 ">
                        <img src = { edit } alt="" className = 'text-black filter grayscale'  />
                        Edit
                      </button>
                      <button className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 " onClick={() => deletePatient(setPatients, p.id, token)}>
                        <img src = { del } alt="" className = 'text-black filter grayscale' />
                        Delete
                      </button>
                    </div>
                  </Link>
                </div>
              </td>
            </tr>
          )
        }
      )

  return (
    <React.Fragment>
      {/* <div className = 'mt-2 mb-4 flex rounded-md gap-0 plinks ' >
        <NavLink 
          className = 'border text-xs px-4 py-2 flex items-center justify-center rounded-s-md font-semibold shadow-sm text-gray-500 '
          to = '/user/patients' 
        >
          Patients
        </NavLink>
        <NavLink 
          className = 'border text-xs px-4 py-2 flex items-center justify-center rounded-e-md font-semibold shadow-sm text-gray-500 bg-white '
          to = '/user/patiens/admin' 
        >
          Admin
        </NavLink>
      </div> */}
      <div className = 'flex w-[76.3vw] justify-between items-center px-3 py-4 bg-white ' > 
        <header>
          <h1 className = 'pl-2 -mt-2 font-semibold' > Patients (Students) </h1>
        </header>
        <div className ='flex gap-4 items-center'>
          <Link 
            to = "new/personal" 
            className=' font-span text-base font-normal py-2 px-5 text-white  bg-primary border border-primary rounded-md'
            onClick={()=> {
              localStorage.setItem('new-patients', null);
            }}
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
      <PatientsTable  patients = { patient } />
    </React.Fragment>
  )
}

export default PatientsPage
