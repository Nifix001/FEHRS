import { ArrowLeft3 } from 'iconsax-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext';

const Admin = () => {

  const location = useNavigate();
  const  { user } = useUser();

  return (
    <div className = '  h-[83.2vh] w-[60vw] flex flex-col gap-4 ' >
     { user.role_id === 2 ?
     <>
          <div className = ' w-full h-12 rounded-md bg-white flex items-center p-3 cursor-pointer gap-1 '
                onClick = {
                  (e) => {
                    e.preventDefault();
                    location('/user/settings')
                  }
                }
          >
            <ArrowLeft3 size={12} />
            <h3 className = 'text-xs' >Admin Mangement</h3>
          </div>
          <div className = ' w-full h-full rounded-xl bg-white p-9 ' >
            <form action="">
              <h1 className = 'text-2xl my-10' >Assign a Role</h1>
              <div className='flex flex-col gap-10 mb-24 '>
                <div className='flex items-center gap-6 '>
                  <input type="radio" name="role" id="" className = ' w-7 h-7 accent-black ' />
                  <div className='flex flex-col'>
                    <label htmlFor="" className = 'font-bold text-base' >Doctor</label>
                    <p className = 'text-sm text-gray-400' >Assign as Doctor</p>
                  </div>
                </div>
                <div className='flex items-center gap-6 '>
                  <input type="radio" name="role" id="" className = ' w-7 h-7 accent-black ' />
                  <div className='flex flex-col'>
                    <label htmlFor="" className = 'font-bold text-base' >Phamarcist</label>
                    <p className = 'text-sm text-gray-400' >Assign as Phamarcist</p>
                  </div>
                </div>
                <div className='flex items-center gap-6 '>
                  <input type="radio" name="role" id="" className = ' w-7 h-7 accent-black ' />
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
     </>
      : <div className='w-full h-full rounded-xl bg-white p-9 flex items-center justify-center'>
          <div className=' flex flex-col items-center justify-center' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className=' text-sm mt-1 '> You do not have access to this page. Please contact the admin for more information. </p>
          </div>
      </div>
      }
    </div>
  )
}

export default Admin
