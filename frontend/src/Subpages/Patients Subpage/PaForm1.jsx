import React from 'react'
import { useState } from 'react'
import { Form, NavLink } from 'react-router-dom'

const PaForm1 = () => {

  const [firstName, setfirstName ] = useState();
  const [lastName, setLastName ] = useState();
  const [otherName, setOtherName ] = useState();
  const [matricNumber, setMatricNumber] = useState();
  const [dob, setDob ] = useState();
  const [phone, setPhone] = useState();
  const [ gender, setGender ] = useState();
  const [ address, setAddress ] = useState();

  const data = {
    "firstname": firstName,
    "middlename": otherName,
    "lastname": lastName,
    "matric_no": matricNumber,
    "dob": dob,
    "gender": gender,
    "phone_no": phone,
    "home_address": address,
    "email":"boomed56@gmail.com",
    "nok_firstname": "geo",
    "nok_middlename": "coding",
    "nok_lastname": "side",
    "nok_relationship": "brother",
    // "nok_dob": "8/07/2009",
    "nok_gender": "male",
    "nok_phone_no": "098545767" 
  } 
   
  const current = localStorage.getItem('new-patients')
  console.log(current);
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('new-patients', data)
  }



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
              type = "text" 
              placeholder = '__ /__ /____' 
              name = ' dob '
              value = { dob }
              onChange = { (e) => {
                                    e.preventDefault();
                                    setDob(e.target.value);
                                  } 
                          }  
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
                type = "text" 
                placeholder = ''
                name = ' phone '
                value = { phone }
                onChange = { (e) => {
                  e.preventDefault();
                                      setPhone(e.target.value);
                                    } 
                            }  
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
                  onSelect={
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
                  // onClick = {(e) => {
                  //                     e.preventDefault();
                  //                     setGender('female')
                  //                   }
                  //           } 
                  onSelect={
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
              className = 'w-182 h-12' 
              name = ' address ' 
              value = { address } 
              onChange = { (e) => {
                                    e.preventDefault();
                                    setAddress(e.target.value);
                                  } 
                          }  
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
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-20'
            >
              Relationship
            </label>
            <input 
              type = "text" 
              placeholder = '' 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16'
            >
              Gender
            </label>
            <input 
              type = "text" 
              placeholder = '' 
            />
          </div>

          <div className="grid">
            <label 
              htmlFor = "" 
              className = 'w-20'
            >
              Date of Birth
            </label>
            <input 
              type = "text" 
              placeholder = '__ / __ / ____' 
            />
          </div>
        </div>

        <div className = "flex absolute bottom-0 ml-56 mr-auto gap-12">
              <NavLink 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
                to = "/user/patients/new/info"
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
