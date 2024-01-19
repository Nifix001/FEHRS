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
import NoAccess from './NoAccess'
import { User } from 'iconsax-react'

const Doctor = () => {

  const { patients, user, image } = useUser();

  const allowed = user.role_id === 2 || user.role_id === 4;

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
      setPatient([]);
    } else {
      setQuery(trimmedQuery); 
      setOptions(true);
      setDisabled(false);
    }
  };
  
  const onClose = () => {
    setSearchActive(false);
    setPatient([]);
  }

  const search1 = searchFunction(patients, keys, query).map( p  =>  { 
    return(
      <li key = { p.id } className = ' hover:text-white hover:bg-primary cursor-pointer flex p-2 items-center relative '  
          onClick = { () => {
                              setPatient(p)
                              setOptions(false)
                              setSearchActive(true);x
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
      { allowed ?   <div 
          className = 'w-[1126px] h-[100vh] bg-[#f9f9f9] border-l  relative top-20 left-60 -ml-0.5 py-6 px-14 doctors bg-opacity-60'>

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
                { options && 
                  <div className = 'absolute top-12 bg-white w-full h-fit shadow-md border p-2 z-50 ' >
                    { search1 }
                  </div>
                }
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
            className = ' w-[1014px] h-[510px] p-5 absolute z-10 mt-6 rounded-xl shadow-sm flex gap-16 '
        >
            <div className = ' flex flex-col gap-5 items-center w-1/5 ' >
              <div className = 'w-[140px] h-[140px] rounded-full bg-gray-200 flex items-center justify-center text-white cursor-pointer' >  <User size = {100} /> </div>
              <span className = ' text-xl font-bold ' > { patient.firstname } { patient.lastname } </span>
              <div className='flex justify-between w-full px-3 text-gray-700'> Age <span className='font-bold'> 2 </span> </div>
              <div className="flex items-center justify-center">
                <button onClick = { () => setPrescribeModal(true) } className = 'h-10 text-xs text-white bg-primary px-6 rounded-md mt-6' > Prscribe drug </button>
              </div>
            </div>
            <div className="grid">
              
              <div className="grid grid-cols-4 row-span-2 gap-4 bg-white py-6 pl-5 pr-10 rounded-lg opacity-90 ">
                <h3 className='flex flex-col gap-1'>  First Name <span className='font-bold'>  { patient.firstname } </span> </h3>
                <h3 className='flex flex-col gap-1'>  Middle Name <span className='font-bold'>  { patient.middlename } </span> </h3>
                <h3 className='flex flex-col gap-1'>  Last Name <span className='font-bold'>  { patient.lastname } </span> </h3>
                <h3 className='flex flex-col gap-1'>  Matric Number <span className='font-bold'>  { patient.matric_no } </span> </h3>
                <h3 className='flex flex-col gap-1'>  Gender  <span className='font-bold'> { patient.gender } </span>  </h3>
                <h3 className='flex flex-col gap-1'>  Email Address <span className='font-bold'>  { patient.email } </span>  </h3>
                <h3 className='flex flex-col gap-1'>  Phone Number <span className='font-bold'>  0{ patient.phone_no } </span>   </h3>
                <h3 className='flex flex-col gap-1'>  Date of <span className='font-bold'> Birth  { patient.dob } </span>  </h3>
                <h3 className='flex flex-col gap-1'>  Home Address <span className='font-bold'>  { patient.home_address } </span> </h3>
              </div>
              <div className='grid bg-white h-fit mt-10 py-6 pl-5 rounded-lg ' >
                <h3 className='font-bold'> Previous Diagnosis </h3>
                  <p className='flex flex-col gap-2' >
                    {
                      patient.prescriptions.length > 0 ? patient.prescriptions.map(p => (
                        <h3 className='block'  key = { p.id } > { p.diagnosis } </h3>
                        )) : 
                        <h3 className=' italic text-gray-400 opacity-50' > No previous diagnosis </h3>
                    }
                  </p>
              </div>
            </div>

        <button
          className = "absolute top-0 -mt-5 right-2 p-2 cursor-pointer text-xl text-red-400"
          onClick = { onClose } 
         >
          &times;
        </button>
        </div>
         : 
         <div className = 'bg-white w-[1014px] h-[510px] p-2 absolute z-10 mt-6 rounded-xl shadow-sm flex items-center justify-center text-5xl opacity-70'>
            <h1 className = ' opacity-5 text-center ' > Please type in the search box above and hit the Search button </h1>
        </div> }

      </div>
      : <NoAccess />
    }
     { prescribeModal && <PrescribeDrug
        onClose = { closePrescribeModal } 
      />}
      
    </React.Fragment>
  )
}

export default Doctor
