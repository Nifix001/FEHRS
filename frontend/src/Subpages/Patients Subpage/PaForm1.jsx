import React from 'react'
import { useState } from 'react'
import { Form, NavLink, useNavigate } from 'react-router-dom'
import { addNotification, addPatient } from '../../helpers/helpers';
import { useUser } from '../../context/UserContext';
import { ArrowDown2, CloseSquare } from 'iconsax-react';

const PaForm1 = () => {

  const { setPatients, setNotifications } = useUser();

  const location = useNavigate();

  const [firstName, setfirstName ] = useState();
  const [lastName, setLastName ] = useState();
  const [otherName, setOtherName ] = useState();
  const [matricNumber, setMatricNumber] = useState();
  const [dob, setDob ] = useState();
  const [phone, setPhone] = useState();
  const [ gender, setGender ] = useState();
  const [ address, setAddress ] = useState();
  const [ email, setEmail ] = useState();

  const [ nokFirstName, setNokFirstName ] = useState();
  const [ nokMiddleName, setNokMiddleName ] = useState(); 
  const [ nokLastName, setNokLastName ] = useState();
  const [ nokRelationship, setNokRelationship ] = useState("Father");
  const [ nokGender, setNokGender ] = useState("Male");
  const [ nokDob, setNokDob ] = useState();
  const [ nokPhone, setNokPhone ] = useState();

  const [ done, setDone ] = useState(false);

  const [ other, setOther ] = useState(false);

  const [relationDrop, setRelationDrop] = useState(false);
  const [nokGendrop, setNokGendrop] = useState(false)

  const relation = ["Father", "Mother", "Husband", "Wife", "Brother", "Sister"]
  const gend = ["Male", "Female"]

  const rawData = 
    {
      "firstname": firstName,
      "middlename": otherName,
      "lastname": lastName,
      "matric_no": matricNumber,
      "dob": dob,
      "gender": gender,
      "phone_no": phone,
      "home_address": address,
      "email": email,
      "nok_firstname": nokFirstName,
      "nok_middlename": nokMiddleName,
      "nok_lastname": nokLastName,
      "nok_relationship": nokRelationship,
      "nok_dob": nokDob,
      "nok_gender": nokGender,
      "nok_phone_no": nokPhone 
    } 
  
    const data = JSON.stringify(rawData)

  const current = localStorage.getItem('new-patients')

  const message = `${firstName + " " + lastName} has been added to the Patients database `

  // console.log(current);
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('new-patients', data)
    addPatient(setPatients, rawData )
    addNotification(setNotifications, message)
    location("/user/patients/new/info")
  }

  console.log(nokDob);


  return (
    <React.Fragment>
        <div className = "grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3 paform1 ">
          <div className = "grid">
            <label  
              htmlFor = " first-name " 
              className = 'w-16'
            >
              First Name
            </label>
            <input 
              type = "text" 
              placeholder = 'Ayomide'
              name = ' first-name '
              value = { firstName }
              onChange = { (e) => {
                                    e.preventDefault();
                                    setfirstName(e.target.value);
                                  } 
                          }  
              required
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = " last-name " 
              className = 'w-16'
            >
              Last Name
            </label>
            <input 
              type = "text" 
              placeholder = 'Kanayo' 
              name = ' last-name '
              value = { lastName }
              onChange = { (e) => {
                                     e.preventDefault();
                                     setLastName(e.target.value);
                                  } 
                            }   
              required
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = " other-name " 
              className = 'w-20'
            >
              Other Name 
            </label>
            <input 
              type = "text" 
              placeholder = 'Festus' 
              name = ' other-name '
              value = { otherName }
              onChange = { (e) => {
                                    e.preventDefault();
                                    setOtherName(e.target.value);
                                  } 
                          }  
              required
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = " matric-number " 
              className = 'w-24'
            >
              Matric Number
            </label>
            <input 
              type = "text" 
              placeholder = '___ /__ /_____' 
              name = ' matric-number '
              value = { matricNumber }
              onChange = { (e) => {
                                    e.preventDefault();
                                    setMatricNumber(e.target.value);
                                  } 
                          }  
              required
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = " dob " 
              className = 'w-24' 
            >
              Date of Birth
            </label>
            <input 
              type = "date" 
              placeholder = '__ /__ /____' 
              name = ' dob '
              value = { dob }
              min="11/3/2023"
              onChange = { (e) => {
                                    e.preventDefault();
                                    setDob(e.target.value);
                                  } 
                          }  
              required
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = " phone " 
              className = 'w-24'
            >
              Phone Number
            </label>
            <div className = "flex">
              {/* <div>
                <img src = "" alt = "" />
                <h4> +234 </h4>
                <img src = "" alt = "" />
              </div> */}
              <input 
                type = "tel" 
                placeholder = ''
                name = ' phone '
                value = { phone }
                pattern='[0-9]{10}'
                onChange = { (e) => {
                  e.preventDefault();
                                      setPhone(e.target.value);
                                    } 
                            }  
                required
              />
            </div>
          </div>
        </div>

        <div className = "flex gap-x-6 mb-4">
          <div className = "grid gap-y-1">
            <label 
              htmlFor = "" 
              className = 'w-16'
            >
              Gender
            </label>
            <div className = "flex gap-x-2">
              
              <div className = "flex gap-x-1">
                <input 
                  type = "radio" 
                  name = "gender"
                  value = 'male' 
                  id = "" 
                  className = '-mt-2'  
                  // checked={gender === 'male'}
                  // onClick = {(e) => {
                  //                     e.preventDefault();
                  //                     setGender('male')
                  //                   }
                  //           }
                  onFocus={
                    (e) => {
                              e.preventDefault();
                              setGender('male')
                            }
                  }
                />
                <h4> Male </h4> 
              </div>

              <div className = "flex gap-x-1">
                <input 
                  type = "radio" 
                  name = "gender"
                  value = "female"  
                  id = ""  
                  className = '-mt-2'
                  // checked={gender === 'female'}
                  onFocus={
                    (e) => {
                            e.preventDefault();
                            setGender('female')
                          }
                  }
                />
                <h4> Female </h4>
              </div>

            </div>
          </div>

          <div className = "grid">
            <label 
              htmlFor = " address "  
              className = 'w-24'
            >
              Home Address
            </label>
            <input 
              type = "text" 
              placeholder = 'Enter Text Here' 
              className = 'w-[528px] h-12' 
              name = ' address ' 
              value = { address } 
              onChange = { (e) => {
                                    e.preventDefault();
                                    setAddress(e.target.value);
                                  } 
                          }  
              required
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = " address "  
              className = 'w-24'
            >
              Email Address
            </label>
            <input 
              type = "email" 
              placeholder = 'boom@gmail.com' 
              className = 'w-[300px] h-12' 
              name = ' address ' 
              value = { email } 
              onChange = { (e) => {
                                    e.preventDefault();
                                    setEmail(e.target.value);
                                  } 
                          }  
              required
            />
          </div>

        </div>

        <hr />

        <header> 
          <h1 className = '-mt-0.5 -mb-0.5'> Next of Kin </h1>
        </header>

        <div className = "grid grid-cols-3 grid-rows-2 gap-x-6">
          
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16'
            > 
              First Name 
            </label>
            <input 
              type = "text" 
              placeholder = 'Ayomide' 
              value = { nokFirstName }
              onChange = {
                (e) => {
                  e.preventDefault();
                  setNokFirstName(e.target.value)
                }
              }
              required
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16'
              >
              Last Name
            </label>
            <input 
              type = "text" 
              placeholder = 'Kanayo' 
              value = { nokLastName }
              onChange = {
                (e) => {
                  e.preventDefault();
                  setNokLastName(e.target.value)
                }
              }
              required
            />  
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-20'
            >
              Other Name
            </label>
            <input 
              type = "text" 
              placeholder = 'Festus' 
              value = { nokMiddleName }
              onChange = {
                (e) => {
                  e.preventDefault();
                  setNokMiddleName(e.target.value)
                }
              }
              required
            />
          </div>

          <div className = "grid relative">
            <label 
              htmlFor = "" 
              className = 'w-20 z-10'
            >
              Relationship
            </label>
            <button className = {` border border-primary h-11 rounded-lg text-sm ${other ? 'hidden' : 'flex'} items-center justify-between px-4 text-gray-700 `} onClick = { () => setRelationDrop(!relationDrop) } > 
              <span>{ nokRelationship } </span>
              <ArrowDown2 size={20} />
            </button>
            {relationDrop && <div className = "absolute pr-4 w-full pl-3 bg-white py-2 top-[68px] border z-10 rounded-b-md">
                <ul>
                  {
                    relation.map(item => (
                      <li key={item} onClick = {() => {
                        setRelationDrop(false)
                        setNokRelationship(item)
                      }} className = 'cursor-pointer hover:bg-primary hover:text-white text-sm py-1 rounded-md pl-2 ' > {item} </li>
                    ))
                  }
                  <li onClick = {() => {
                    setOther(true);
                    setRelationDrop(false)
                  }}  className = 'cursor-pointer hover:bg-primary hover:text-white text-sm py-1 rounded-md pl-2 ' > Other... </li>
                </ul>
              </div>}

            { other && <div className = 'relative' >  
               <input 
              type = "text" 
              placeholder = '' 
              value = { nokRelationship }
              onChange= { 
                (e) => {
                  e.preventDefault();
                  setNokRelationship(e.target.value)
                } 
              }
              className='w-full'
              required
            />
            <CloseSquare size={16} className='absolute right-1 bottom-3 text-primary cursor-pointer' onClick={() => {
              setOther(false);
              setNokRelationship("Father")
            }} />
            </div>
            }
          </div>

          <div className = "grid relative">
            <label 
              htmlFor = "" 
              className = 'w-16'
            >
              Gender
            </label>
            <button className = {` border border-primary h-11 rounded-lg text-sm ${other ? 'hidden' : 'flex'} items-center justify-between px-4 text-gray-700 `} onClick = { () => setNokGendrop(!nokGendrop) } > 
              <span>{ nokGender } </span>
              <ArrowDown2 size={20} />
            </button>
            {/* <input 
              type = "text" 
              placeholder = '' 
              value = { nokGender }
              onChange = {
                (e) => {
                  e.preventDefault();
                  setGender(e.target.value);
                }
              }
              required
            /> */}
                 {nokGendrop && <div className = "absolute pr-4 w-full pl-3 bg-white py-2 top-[68px] border z-10 rounded-b-md">
                <ul>
                  {
                    gend.map(item => (
                      <li key={item} onClick = {() => {
                        setNokGendrop(false)
                        setNokGender(item)
                      }} className = 'cursor-pointer hover:bg-primary hover:text-white text-sm py-1 rounded-md pl-2 ' > {item} </li>
                    ))
                  }
                </ul>
              </div>}
          </div>
          {done && <button className = ' hidden' ></button>  }

          <div className="grid">
            <label 
              htmlFor = "" 
              className = 'w-20'
            >
              Date of Birth
            </label>
            <input 
              type = "date" 
              placeholder = '__ / __ / ____' 
              min="11/3/2023"
              value = { nokDob }
              onChange = {
                (e) => {
                  e.preventDefault();
                  setNokDob(e.target.value)
                }
               }
               required
            />
          </div>
        </div>

        <div className="grid">
            <label 
              htmlFor = "" 
              className = 'w-[90px]'
            >
              Phone Number
            </label>
            <input 
              type = "number" 
              placeholder = '08011223344' 
              className='w-[360px]'
              value = { nokPhone }
              onChange = {
                (e) => {
                  e.preventDefault();
                  setNokPhone(e.target.value);
                  setDone(true)
                }
               }
               required
            />
        </div>

        <div className = "flex absolute bottom-0 ml-56 mr-auto gap-12">
              <NavLink 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
                to = "/user/patients"
                onClick = { handleSave }
              >
                  Save and Continue
              </NavLink>

              <NavLink 
                type = 'submit' 
                className = 'bg-white text-primary border-2 border-primary py-3 px-20 rounded-md'
                to = '/user/patients'
              >
                Previous
              </NavLink>
        </div>
    </React.Fragment>
  )
}

export default PaForm1
