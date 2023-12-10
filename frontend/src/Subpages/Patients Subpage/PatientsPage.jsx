import React, { useState } from 'react'
import PatientsTable from '../../Tables/PatientsTable'
import Patientsdata from '../../database/Patientsdata'
import { Link, NavLink } from 'react-router-dom'
import * as XLSX from "xlsx";


import dot from '../../assets/carbon_overflow-menu-horizontal.svg'
import search from '../../assets/akar-icons_search.svg'
import filter from '../../assets/cil_filter.svg'
import del from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'
import { useUser } from '../../context/UserContext'
import { deletePatient, searchFunction } from '../../helpers/helpers'
import EditPatient from '../../modal/EditPatient'
import DeletePatient from '../../modal/DeletePatient'

const PatientsPage = () => {

  const { patients, setPatients, token } = useUser( );
  const [ patientOptions, setPatientOptions ] = useState( {} );
  const [ query, setQuery ] = useState();
  const [ searchActive, setSearchActive ] = useState( false );

  const [ editModalOpen, setEditModalOpen ] = useState( false );
  const [ deleteModalOpen, setDeleteModalOpen ] = useState( false );
  const [ selectedPatient, setSelectedPatient ] = useState( null );

  const [ data, setData ] = useState( [] );

  // Function to open the edit modal
  const openEditModal = ( patient ) => {
    setSelectedPatient( patient );
    setEditModalOpen( true );
  };

  const openDeleteModal = ( patient ) => {
    setSelectedPatient( patient );
    setDeleteModalOpen( true );
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setSelectedPatient( null );
    setEditModalOpen( false );
  };
  const closeDeleteModal = () => {
    setSelectedPatient( null );
    setDeleteModalOpen( false );
  };


  const toggleOptions = ( patientId ) => {
    setPatientOptions( ( prevOptions ) => ({
      ...prevOptions,
      [patientId]: !prevOptions[patientId],
    }));
  };


  const handleFile = ( e ) => {
    e.preventDefault();
    const input = document.getElementById( 'file' );
    input.click();
  }

  const keys = [ "firstname", "lastname", "matric_no", "email" ];


  const searchPatient = searchFunction( patients, keys, query ).sort( (a, b) => a.id - b.id ).map( p  =>  {
        return(
            <tr key = { p.id } >
              <td className = 'py-4 text-left pl-6 text-base w-64'> {`${ p.lastname } ${ p.firstname }`} </td>
              <td className = 'text-left pl-6 text-base'> { p.matric_no } </td>
              <td className = 'text-left pl-6 text-base'> 0{ p.phone_no } </td>
              <td className = 'text-left text-base'> { p.email } </td>
              <td className = 'text-left pl-3 text-base'> 
                {
                  p.prescriptions.length > 0 && p.prescriptions[p.prescriptions.length - 1].diagnosis
                }
              </td>
              <td className = 'pl-8'>
                <div className = 'flex items-center justify-start pl-1 '> 
                  <Link>
                    <button 
                      className = "flex-shrink-0"
                      onClick = { () => toggleOptions(p.id) }
                    >
                      <img 
                      src = { dot }  
                      alt ="dot" 
                      />
                    </button>
                    <div 
                      className = { `${ patientOptions[p.id] ? '' : 'hidden' } absolute right-3 -mt-3 bg-[#f9f9f9]  border border-gray-300 shadow-md rounded-md text-[12px] ` }
                      onMouseLeave = { () => toggleOptions(p.id) }
                    >
                      {/* <!-- Options for Item 1 --> */}
                      <button 
                        className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 "
                        onClick = { () => openEditModal(p) }
                      >
                      <img src = { edit } alt="" className = 'text-black filter grayscale'  />
                        Edit
                      </button>
                      <button 
                        className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 " 
                        onClick ={ () => openDeleteModal(p) }
                      >
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

    const patient = patients.sort((a, b) => a.id - b.id).map( p  =>  {
      return(
          <tr key = { p.id } >
            <td className = 'py-4 text-left pl-6 text-base w-64'> {`${ p.lastname } ${ p.firstname }`} </td>
            <td className = 'text-left pl-6 text-base'> { p.matric_no } </td>
            <td className = 'text-left pl-6 text-base'> 0{ p.phone_no } </td>
            <td className = 'text-left text-base'> { p.email } </td>
            <td className = 'text-left pl-3 text-base'> 
            {
              p.prescriptions.length > 0 && p.prescriptions[p.prescriptions.length - 1].diagnosis
            }
            </td>
            <td className = 'pl-8'>
              <div className = 'flex items-center justify-start pl-1 '> 
                <Link>
                  <button 
                    className = "flex-shrink-0"
                    onClick = { () => toggleOptions(p.id) }
                  >
                    <img 
                    src = { dot }  
                    alt ="dot" 
                    />
                  </button>
                  <div 
                    className = {`${ patientOptions[ p.id ] ? '' : 'hidden' } absolute right-3 -mt-3 bg-[#f9f9f9]  border border-gray-300 shadow-md rounded-md text-[12px] `}
                    onMouseLeave = { () => toggleOptions(p.id) }
                  >
                    {/* <!-- Options for Item 1 --> */}
                    <button 
                      className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 "
                      onClick = { () => openEditModal(p) }
                    >
                    <img src = { edit } alt="" className = 'text-black filter grayscale'  />
                      Edit
                    </button>
                    <button className = " px-4 py-1 text-black hover:bg-[#cecdcd] w-full text-left flex  items-center gap-2 "  onClick ={ () => openDeleteModal(p) }>
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
              type = "search"  
              className = 'border rounded-md font-span font-normal text-base border-solid  border-gray-300 w-56 h-10 p-2 indent-8 placeholder:text-gray-300 text-gray-600 outline-none'
              onChange = { (e) => {
                e.preventDefault();
                setSearchActive(true);
                setQuery(e.target.value);
              } }
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
      <PatientsTable  patients = { searchActive ? searchPatient : patient } />
      <EditPatient
        isOpen={editModalOpen}
        onClose={closeEditModal}
        patient={selectedPatient}
      />
      <DeletePatient 
        isOpen={deleteModalOpen}
        onClose={closeDeleteModal}
        patient={selectedPatient}
      />
    </React.Fragment>
  )
}

export default PatientsPage
