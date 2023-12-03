import React from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

  const location = useNavigate();

  return (
    <div className = '  h-[83.2vh] w-[60vw] flex flex-col gap-4 ' >
        <div className = ' w-full h-12 rounded-md bg-white flex items-center p-3 cursor-pointer '
              onClick = {
                (e) => {
                  e.preventDefault();
                  location('/user/settings')
                }
              }
        >
          <h3 className = 'text-xs' >Admin Mangement</h3>
        </div>
        <div className = ' w-full h-full rounded-xl bg-white p-9 ' >
          <form action="">
            <h1 className = 'text-2xl my-10' >Assign a Role</h1>
            <div className='flex flex-col gap-10 mb-24 '>
              <div className='flex items-center gap-6 '>
                <input type="radio" name="role" id="" className = ' w-7 h-7 ' />
                <div className='flex flex-col'>
                  <label htmlFor="" className = 'font-bold text-base' >Doctor</label>
                  <p className = 'text-sm text-gray-400' >Assign as Doctor</p>
                </div>
              </div>
              <div className='flex items-center gap-6 '>
                <input type="radio" name="role" id="" className = ' w-7 h-7 ' />
                <div className='flex flex-col'>
                  <label htmlFor="" className = 'font-bold text-base' >Phamarcist</label>
                  <p className = 'text-sm text-gray-400' >Assign as Phamarcist</p>
                </div>
              </div>
              <div className='flex items-center gap-6 '>
                <input type="radio" name="role" id="" className = ' w-7 h-7 ' />
                <div className='flex flex-col'>
                  <label htmlFor="" className = 'font-bold text-base' >Chief Host</label>
                  <p className = 'text-sm text-gray-400' >Assign as Chief Host</p>
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-4'>
              <button className = 'border px-6 py-2 rounded-md bg-primary text-white '>Assign Role</button>
              <button className = 'border px-6 py-2 rounded-md border-primary text-primary '>Cancel</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Admin
