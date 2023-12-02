import React from 'react'

const Admin = () => {
  return (
    <div className = '  h-[83.2vh] w-[60vw] flex flex-col gap-4 ' >
        <div className = ' w-full h-12 rounded-md bg-white ' >
          <h3>Admin Mangement</h3>
        </div>
        <div className = ' w-full h-full rounded-xl bg-white ' >
          <form action="">
            <h1>Assign a Role</h1>
            <div className='flex flex-col'>
              <div className='flex'>
                <input type="radio" name="" id="" />
                <div className='flex flex-col'>
                  <label htmlFor="">Doctor</label>
                  <p>Assign as Doctor</p>
                </div>
              </div>
              <div className='flex'>
                <input type="radio" name="" id="" />
                <div className='flex flex-col'>
                  <label htmlFor="">Phamarcist</label>
                  <p>Assign as Phamarcist</p>
                </div>
              </div>
              <div className='flex'>
                <input type="radio" name="" id="" />
                <div className='flex flex-col'>
                  <label htmlFor="">Chief Host</label>
                  <p>Assign as Chief Host</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <button>Assign Role</button>
              <button>Cancel</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Admin
