import React from 'react'
import { useNavigate } from 'react-router-dom';

const Password = () => {
  
  const location = useNavigate();

  return (
    <div className = '  h-[83.2vh] w-[60vw] flex flex-col gap-4 ' >
        <div className = ' w-full h-12 rounded-md bg-white flex items-center p-3 cursor-pointer'
          onClick = {
            (e) => {
              e.preventDefault();
              location('/user/settings')
            }
          }
        >
          <h3 className = 'text-xs' >Change Password</h3>
        </div>
        <div className = ' w-full h-full rounded-xl bg-white p-9 ' >
          <form action="">
            <div className='flex flex-col mb-28 gap-3 '>
              <div className = 'grid' >
                <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Enter Old Password </label>
                <input type="password" name="" id="" placeholder='Enter Old Password' className = 'border outline-none block py-4 pl-4 rounded-lg pr-4 w-94 text-lg ' />
              </div>
              <div className = 'grid' >
                <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Enter New Password </label>
                <input type="password" name="" id="" placeholder='Enter New Password' className = 'border outline-none block py-4 pl-4 rounded-lg pr-4 w-94 text-lg ' />
              </div>
              <div className = 'grid' >
                <label htmlFor="" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Enter New Password </label>
                <input type="password" name="" id="" placeholder='Enter New Password' className = 'border outline-none block py-4 pl-4 rounded-lg pr-4 w-94 text-lg ' />
              </div>
            </div>
            <div className='flex justify-center gap-4'>
              <button className = 'border px-6 py-2 rounded-md bg-primary text-white '>Change Password</button>
              <button className = 'border px-6 py-2 rounded-md border-primary text-primary '>Cancel</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Password
