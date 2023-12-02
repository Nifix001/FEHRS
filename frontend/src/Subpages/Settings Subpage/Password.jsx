import React from 'react'

const Password = () => {
  return (
    <div className = '  h-[83.2vh] w-[60vw] flex flex-col gap-4 ' >
        <div className = ' w-full h-12 rounded-md bg-white ' >
          <h3>Change Password</h3>
        </div>
        <div className = ' w-full h-full rounded-xl bg-white ' >
          <form action="">
            <div className='flex flex-col'>
            <input type="password" name="" id="" placeholder='Enter Old Password'/>
            <input type="password" name="" id="" placeholder='Enter New Password'/>
            <input type="password" name="" id="" placeholder='Enter New Password'/>
            </div>
            <div className='flex'>
              <button>Change Password</button>
              <button>Cancel</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Password
