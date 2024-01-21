// EditModal.js
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { addNotification, editPatient } from '../helpers/helpers';
import { ArrowDown2 } from 'iconsax-react';

const EditPatient = ( { isOpen, onClose, patient } ) => {
  if ( !isOpen ) return null;

  const { setPatients, setNotifications, token } = useUser();

  const [ firstname, setFirstname ] = useState( patient.firstname );
  const [ lastname, setLastname ] = useState( patient.lastname );  
  const [ middlename, setMiddlename ] = useState( patient.middlename);
  const [ matric_no, setMatric_no ] = useState( patient.matric_no );
  const [ phone_no, setPhone_no ] = useState( patient.phone_no );
  const [ email, setEmail ] = useState( patient.email );
  const [ dob, setDob ] = useState( patient.dob );
  const [ gender, setGender ] = useState( patient.gender );
  const [ address, setAddress ] = useState( patient.home_address );
  const [ nokFirstName, setNokFirstName ] = useState();
  const [ nokMiddleName, setNokMiddleName ] = useState();
  const [ nokLastName, setNokLastName ] = useState();
  const [ nokRelationship, setNokRelationship ] = useState();
  const [ nokDob, setNokDob ] = useState();
  const [ nokGender, setNokGender ] = useState();
  const [ nokPhone, setNokPhone ] = useState();
  const gen = ["Male", "Female" ];
  const [ genderDropdown, setGenderDropdown ] = useState(false);


  const prescriptions = patient.prescriptions;
  const id = patient.id;
  // const middlename = patient.middlename;

  const editedPatient = {
    'id': id,
    'firstname': firstname,
    'middlename': middlename,
    'lastname': lastname,
    'email': email,
    'matric_no': matric_no,
    'phone_no': phone_no,
    'prescriptions': prescriptions,
    'dob': dob,
    'gender': gender,
    'home_address': address,
    'nok_firstname': nokFirstName ,
    'nok_lastname': nokLastName ,
    'nok_middlename': nokMiddleName ,
    'nok_dob': nokDob ,
    'nok_relationship': nokRelationship ,
    'nok_gender': nokGender ,
    'nok_phone': nokPhone
}

const message = `${patient.firstname + " " + patient.lastname} has been edited on the Patients database `

const handleClick = ( e ) => {
  e.preventDefault();
  editPatient( setPatients, editedPatient, token );
  console.log(token);
  addNotification( setNotifications, message )
  onClose();
}


  return (
    <div className = "fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className = "relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg">
        <button
          className = "absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick = { onClose } 
        >
          Close
        </button>
        <h2 className = "text-2xl font-semibold mb-4"> Edit Patient </h2>
        <div className = "block">
            <div className = "flex gap-4">
                <div className = "flex flex-col ">
                    <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> First Name </label>
                    <input type = "text" value = { firstname } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                          onChange = { (e) => {
                                                e.preventDefault();        
                                                setFirstname( e.target.value )
                                              } 
                                      } 
                      />
                </div>
                <div className = "flex flex-col ">
                    <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Last Name </label>
                    <input type = "text" value = { lastname } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                          onChange = { (e) => {
                                                e.preventDefault();        
                                                setLastname( e.target.value )
                                              } 
                                      } 
                    />
                </div>
                <div className = "flex flex-col ">
                    <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Middle Name </label>
                    <input type = "text" value = { middlename } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                          onChange = { (e) => {
                                                e.preventDefault();        
                                                setMiddlename( e.target.value )
                                              } 
                                      } 
                    />
                </div>
            </div>
            <div className = "flex gap-4">
                <div className = "flex flex-col ">
                        <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Matric Number </label>
                        <input type = "text" value = { matric_no } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                              onChange = { (e) => {
                                                    e.preventDefault();        
                                                    setMatric_no( e.target.value )
                                                  } 
                                          } 
                        />
                </div>
                <div className = "flex flex-col ">
                        <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Phone Number </label>
                        <input type = "number" value = { phone_no } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                onChange = { (e) => {
                                                      e.preventDefault();        
                                                      setPhone_no( e.target.value )
                                                    } 
                                            } 
                        />
                </div>
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Email Address </label>
                  <input type = "text" value = { email } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setEmail( e.target.value )
                                                      } 
                                              } 
                    />
              </div>
            </div>
            <div className="flex gap-4 ">
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Dob </label>
                  <input type = "date" value = { dob } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 cursor-pointer' 
                                  onChange = { (e) => {
                                                        // e.preventDefault();        
                                                        setDob( e.target.value );
                                                        console.log(e);
                                                      } 
                                              } 
                    />
              </div>

              <div className = 'flex flex-col relative ' >
                <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Gender </label>
                <button className = 'border outline-none py-3 pl-3 rounded-lg text-sm pr-4 w-72 flex items-center justify-between ' onClick = { (e) => {
                  e.preventDefault();
                  setGenderDropdown(!genderDropdown)
                } } >
                  <span> { gender } </span>
                  <ArrowDown2 size={20} /> 
                </button>
                {
                  genderDropdown && <div className = "absolute pr-4 w-72 pl-3 bg-white py-2 border z-10 top-20 rounded-b-md">
                    <ul>
                      {
                        gen.map(item => (
                          <li key = { item } onClick = { () => {
                            setGender(item)
                            setGenderDropdown(false)
                          } } className = 'cursor-pointer hover:bg-primary hover:text-white text-sm py-1 rounded-md pl-2 ' > { item } </li>
                        ))
                      }
                    </ul>
                  </div>
                }
              </div>
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Home Address </label>
                  <input type = "text" value = { address } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setAddress( e.target.value )
                                                      } 
                                              } 
                    />
              </div>

            </div>
            {/* <div className = "flex gap-4">
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Next of Kin First Name </label>
                  <input type = "text" value = { nokFirstName } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setNokFirstName( e.target.value )
                                                      } 
                                              } 
                    />
              </div>
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Next of Kin Last Name </label>
                  <input type = "text" value = { nokLastName } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setNokLastName( e.target.value )
                                                      } 
                                              } 
                    />
              </div>
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Next of Kin Middle Name </label>
                  <input type = "text" value = { nokMiddleName } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setNokMiddleName( e.target.value )
                                                      } 
                                              } 
                    />
              </div>
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Next of kin DOB </label>
                  <input type = "date" value = { nokDob } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setNokDob( e.target.value )
                                                      } 
                                              } 
                    />
              </div>
            </div>
            <div className = "flex gap-4">
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Next of Kin Relationship </label>
                  <input type = "text" value = { nokRelationship } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setNokRelationship( e.target.value )
                                                      } 
                                              } 
                    />
              </div>
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Next of Kin Gender </label>
                  <input type = "text" value = { nokGender } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setNokGender( e.target.value )
                                                      } 
                                              } 
                    />
              </div>
              <div className = "flex flex-col ">
                  <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Next of Kin Phone Number </label>
                  <input type = "text" value = { nokPhone } className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 ' 
                                  onChange = { (e) => {
                                                        e.preventDefault();        
                                                        setNokPhone( e.target.value )
                                                      } 
                                              } 
                    />
              </div> */}
            {/* </div> */}
            <div className = "flex w-full items-center justify-center mt-20">
               <button className = ' bg-primary text-white px-4 py-[6px] text-sm  rounded-md' onClick = { handleClick }  > Update </button>                                                                     
            </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;
