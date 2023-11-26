import React from 'react'

const Personal = () => {
  return (
    <div className = '  h-[83.2vh] w-[60vw] bg-white rounded-xl '>
      <form action="">
        <h1> Personal Info </h1>
        <div className = ' flex gap-4 items-center ' >
             <div className = 'w-20 h-20 rounded-full bg-gray-400' ></div>
             <div className = "flex flex-col gap-2 items-start ">
                <button className = ' bg-slate-400 text-white ' > Upload photo  </button>
                <button> Remove </button>
             </div>
        </div>
        <div>
          <label htmlFor = ""> Portfolio </label>
          <button> Doctor </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 ">
          <div className = 'flex flex-col' >
            <label htmlFor = ""> First Name </label>
            <input type="text" placeholder = 'Kanayo'  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = ""> Last Name </label>
            <input type="text" placeholder = 'Olumuyiwa'  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = ""> Gender </label>
            <input type="text" placeholder = 'Male'  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = ""> Date of Birth </label>
            <input type="text" placeholder = '30/12/1993'  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = ""> Phone Number </label>
            <input type="text" placeholder = 'Olumuyiwa'  />
          </div>
          <div className = 'flex flex-col ' >
             <label htmlFor = ""> State </label>
            <input type="text" placeholder = 'Lagos'  />
          </div>
        </div>
        <button> Update Profile </button>
      </form>
    </div>
  )
}

export default Personal
