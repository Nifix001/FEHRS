import React, { useState } from 'react'
import { Form, NavLink, Outlet } from 'react-router-dom'

import dot from '../assets/carbon_overflow-menu-horizontal.svg'
import search from '../assets/akar-icons_search.svg'
import del from '../assets/delete.svg'
import edit from '../assets/edit.svg'

import { searchFunction } from '../helpers/helpers';
import { useUser } from '../context/UserContext';
import SearchPatient from '../Tables/SearchPatient'
import PrescribeDrug from '../modal/PrescribeDrug'

const Doctor = () => {

  const { patients } = useUser();
  const [ searchActive, setSearchActive ] = useState( false );
  const [patientOptions, setPatientOptions] = useState({});
  const [ options, setOptions ] = useState(false);
  const [ query, setQuery ] = useState();
  const keys = ["firstname", "lastname", "matric_no", "email" ];

  const [ patient, setPatient ] = useState([]);

  // console.log(patient);

  const [ prescribeModal, setPrescribeModal ] = useState(false);
  const [ disabled, setDisabled ] = useState(true);

  const toggleOptions = (patientId) => {
    setPatientOptions((prevOptions) => ({
      ...prevOptions,
      [patientId]: !prevOptions[patientId],
    }));
  };
  const closePrescribeModal = () => {
    // setSelectedPatient( null );
    // setEditModalOpen( false );
    setPrescribeModal(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const trimmedQuery = String(e.target.value).trim();
    
    if (trimmedQuery === '') {
      setSearchActive(false);
      setOptions(false);
      setDisabled(true);
    } else {
      setQuery(trimmedQuery); 
      setOptions(true);
      setDisabled(false);
    }
  };
  
  const onClose = () => {
    setSearchActive(false);
  }

  const search1 = searchFunction(patients, keys, query).map( p  =>  { 
    return(
      <li key = { p.id } className = ' hover:text-white hover:bg-primary cursor-pointer flex p-2 items-center relative '  
          onClick = { () => {
                              setPatient(p)
                              setOptions(false)
                            } }
      >
        <span className = 'w-[300px]' > {`${ p.lastname }     ${ p.firstname }`} </span>
        <span className = 'absolute right-2' > { p.matric_no } </span>
      </li>
    )})

  // const searchPatient = searchFunction(patients, keys, query).map( p  =>  { 
  //   return(
  //       <tr key = { p.id } className = ' hover:text-white hover:bg-primary cursor-pointer ' >
  //         <td className = 'py-4 text-left pl-6 text-base w-64'> {`${ p.lastname } ${ p.firstname }`} </td>
  //         <td className = 'text-left pl-6 text-base'> { p.matric_no } </td>
  //         <td className = 'text-left pl-6 text-base'> 0{ p.phone_no } </td>
  //         <td className = 'text-left text-base'> { p.email } </td>
  //         <td className = 'text-left pl-3 text-base'> 
  //           {p.prescriptions.length > 0 && p.prescriptions[p.prescriptions.length - 1].diagnosis}
  //         </td>
  //       </tr>
  //     )
  //   }
  // )


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
                        value = { patient.matric_no }
                    />
                    <img 
                        className = 'absolute left-2 top-2 cursor-pointer opacity-50' 
                        src = { search } 
                        alt = "search" 
                    />
                </div>
                { options && <div className = 'absolute top-12 bg-white w-full h-fit shadow-md border p-2 z-50 ' >
                  { search1 }
                  </div>}
            </div>

            <button 
              className = {` h-10 text-xs text-white bg-primary px-6 rounded-md ${disabled ? 'opacity-50 cursor-not-allowed' : ''}  `}
              onClick={(e) => {
                                e.preventDefault();
                                setSearchActive(true);
                              }
                            }
              disabled = { disabled }
            >
                 See More
            </button>

          </div>

          <button className = 'text-sm' > History </button>

        </div>

        { searchActive ? 
        <div 
            className = ' bg-white w-[1014px] h-[510px] p-5 absolute z-10 mt-6 rounded-xl shadow-sm block '
        >
            {/* <SearchPatient patients = { searchPatient }  /> */}
            <h2> Personal details about { patient.lastname } { patient.firstname } </h2>
            <h3> <span> Matric Number: </span> { patient.matric_no } </h3>
            <h3> <span> Surname: </span> { patient.lastname } </h3>
            <h3> <span> First Name: </span> { patient.firstname }  </h3>
            <h3> <span> Middle Name: </span> { patient.middlename } </h3>
            <h3> <span> Gender: </span> { patient.gender } </h3>
            <h3> <span> Email Address: </span> { patient.email }  </h3>
            <h3> <span> Phone Number: </span> 0{ patient.phone_no }  </h3>
            <h3> <span> Date of Birth: </span> { patient.dob }  </h3>
            <h3> <span> Home Address: </span> { patient.home_address } </h3>
            <h3> Previous Diagnosis </h3>
              <p className='flex gap-1' >
                {
                  patient.prescriptions.length > 0 ? patient.prescriptions.map(p => (
                    <h3 key = { p.id } > { p.diagnosis } </h3>
                    )) : 
                    <h3> No previous diagnosis </h3>
                }
              </p>
            <button onClick = { () => setPrescribeModal(true) } className = 'h-10 text-base text-white bg-primary px-6 rounded-md' > Prscribe drug </button>
 
        <button
          className = "absolute top-4 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick = { onClose } 
         >
          Close
        </button>
        </div>
         : 
         <div className = 'bg-white w-[1014px] h-[510px] p-2 absolute z-10 mt-6 rounded-xl shadow-sm flex items-center justify-center text-5xl opacity-70'>
            <h1 className = ' opacity-5 text-center ' > Please type in the search box above and hit the Search button </h1>
        </div> }

      </div>
     { prescribeModal && <PrescribeDrug
        onClose = { closePrescribeModal } 
      />}
    </React.Fragment>
  )
}

export default Doctor
