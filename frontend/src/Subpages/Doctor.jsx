import React, { useState } from 'react'
import { Form, NavLink, Outlet } from 'react-router-dom'

import dot from '../assets/carbon_overflow-menu-horizontal.svg'
import search from '../assets/akar-icons_search.svg'
import del from '../assets/delete.svg'
import edit from '../assets/edit.svg'

import { searchFunction } from '../helpers/helpers';
import { useUser } from '../context/UserContext';
import SearchPatient from '../Tables/SearchPatient'

const Doctor = () => {

  const { patients } = useUser();
  const [ searchActive, setSearchActive ] = useState( false );
  const [patientOptions, setPatientOptions] = useState({});
  const [ query, setQuery ] = useState();
  const keys = ["firstname", "lastname", "matric_no", "email" ];

  const toggleOptions = (patientId) => {
    setPatientOptions((prevOptions) => ({
      ...prevOptions,
      [patientId]: !prevOptions[patientId],
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();
    const trimmedQuery = String(e.target.value).trim();
  
    if (trimmedQuery === '') {
      setSearchActive(false);
    } else {
      setQuery(trimmedQuery);
    }
  };
  



  const searchPatient = searchFunction(patients, keys, query).map( p  =>  {
    
    return(

        <tr key = { p.id } className = ' hover:text-white hover:bg-primary cursor-pointer ' >
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
            </div>
          </td>
        </tr>
      )
    }
  )


  return (
    <React.Fragment>
      <div className = 'w-[1126px] h-[88.4vh] bg-[#f9f9f9] border-l  relative top-20 left-60 -ml-0.5 py-6 px-14 doctors bg-opacity-60'>

        <div className = 'flex bg-white h-fit w-full py-2 px-10 justify-between rounded-md ' >

          <div className = 'flex gap-3' >

            <div className = 'relative'>
                <div className = 'flex' >
                    <input 
                        type = 'search' 
                        placeholder = 'Search for patient...' 
                        className = 'border rounded-md font-span font-normal text-base border-solid border-gray-300 w-[400px] h-10 p-2 outline-0 indent-10' 
                        onChange = { handleChange }
                    />
                    <img 
                        className = 'absolute left-2 top-2 cursor-pointer opacity-50' 
                        src = { search } 
                        alt = "search" 
                    />
                </div>
            </div>

            <button 
              className = 'h-10 text-xs text-white bg-primary px-6 rounded-md '
              onClick={(e) => {
                                e.preventDefault();
                                setSearchActive(true);
                              }
                            }
            >
                 Search 
            </button>

          </div>

          <button className = 'text-sm' > History </button>

        </div>

        { searchActive ? 
        <div 
            className = ' bg-white w-[1014px] h-[510px] p-2 absolute z-10 mt-6 rounded-xl shadow-sm block '
        >
            <SearchPatient patients = { searchPatient }  />
        </div>
         : 
         <div className = 'bg-white w-[1014px] h-[510px] p-2 absolute z-10 mt-6 rounded-xl shadow-sm flex items-center justify-center text-5xl opacity-50'>
            <h1 className = ' opacity-5 text-center ' > Please input in the search box above and hit the Search button </h1>
        </div> }

      </div>
    </React.Fragment>
  )
}

export default Doctor
