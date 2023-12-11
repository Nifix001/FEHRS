import { ArrowDown2, User } from 'iconsax-react'
import React, { useState, useRef} from 'react'
import { useUser } from '../../context/UserContext';

const Personal = () => {

  const [ portDropdown, setPortDropdown ] = useState(false);
  const [ genderDropdown, setGenderDropdown ] = useState(false);
  const [ gender, setGender ] = useState("Male");
  const [  portOptions, setPortOptions ] = useState( " Doctor " );
  const inputRef = useRef(null);
  // const [image, setImage] = useState("");
  const { image, setImage } = useUser();

  const handleImage = (e) => {
    e.preventDefault();
    inputRef.current.click();
  }

  const imageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  }
  
  const port = ["Doctor", "Admin", "Pharmacist"]
  const gen = ["Male", "Female"]


  return (
    <div className = '  h-[83.2vh] w-[60vw] bg-white rounded-xl p-9 '>
      <form action="">
        <h1 className = ' font-bold mb-6 '> Personal Info </h1>
        <div className = ' flex gap-6 items-center mb-2 ' >
             <div className = 'w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-white cursor-pointer' > {image ? <img src = { URL.createObjectURL(image) } alt="" className='rounded-full object-fill h-full w-full'/> : <User size = {50} />} </div>
             <input type = "file" ref = { inputRef } style = {{ display: "none" }} accept = 'image/jpeg, image/png' onChange = { imageChange }
              />
             <div className = "flex flex-col gap-2 items-start ">
                <button className = ' bg-primary text-white px-3 py-[5px] text-sm rounded-md '  onClick = { handleImage } > Upload photo  </button>
                <button className = 'text-sm text-red-400 px-4' 
                        onClick = { (e) => { e.preventDefault()
                                             setImage('')
                                            } 
                                  } 
                > Remove </button>
             </div>
        </div>
        <div className = 'mb-4 relative ' >
          <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-3 left-2 ' > Portfolio </label>
          <button className = 'border py-3 w-[240px] px-3 rounded-lg text-sm flex justify-between items-center' onClick={(e) => {
            e.preventDefault();
            setPortDropdown(!portDropdown)
          } } > 
                <span> { portOptions } </span>
                <ArrowDown2 size="20" />
           </button>
           {
            portDropdown && <div className = "absolute w-[240px] bg-white p-2 border z-10 rounded-b-md ">
              <ul>
                {
                  port.map(
                    item => (
                      <li key = { item } onClick = { () => {
                                                            setPortOptions(item)
                                                            setPortDropdown(false)
                                                          } 
                                                        }
                      className = 'cursor-pointer hover:bg-primary hover:text-white text-sm py-1 rounded-md pl-2 '  > { item }  </li>     
                    )
                  )
                }
              </ul>
            </div>
           }
        </div>
        <div className="grid grid-cols-2 grid-rows-3 ">
          <div className = 'flex flex-col' >
            <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> First Name </label>
            <input type="text" placeholder = 'Kanayo' className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Last Name </label>
            <input type="text" placeholder = 'Olumuyiwa' className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '  />
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
          <div className = 'flex flex-col ' >
             <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Date of Birth </label>
            <input type="date" placeholder = '30/12/1993' className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Phone Number </label>
            <input type="tel" placeholder = 'Olumuyiwa' className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> State </label>
            <input type="text" placeholder = 'Lagos' className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '  />
          </div>
        </div>
        <div className = ' flex w-full justify-center mt-[68px] ' >
          <button className = ' bg-primary text-white px-4 py-[6px] text-sm  rounded-md'  > Update Profile </button>
        </div>
      </form>
    </div>
  )
}

export default Personal
