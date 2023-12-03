import React from 'react'

const Personal = () => {
  return (
    <div className = '  h-[83.2vh] w-[60vw] bg-white rounded-xl p-9 '>
      <form action="">
        <h1 className = ' font-bold mb-6 '> Personal Info </h1>
        <div className = ' flex gap-6 items-center mb-2 ' >
             <div className = 'w-20 h-20 rounded-full bg-gray-200' ></div>
             <div className = "flex flex-col gap-2 items-start ">
                <button className = ' bg-primary text-white px-3 py-[5px] text-sm rounded-md ' > Upload photo  </button>
                <button className = 'text-sm text-red-400 px-4' > Remove </button>
             </div>
        </div>
        <div className = 'mb-4' >
          <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-3 left-2 ' > Portfolio </label>
          <button className = 'block border py-3 pl-3 rounded-lg text-sm pr-56' > Doctor </button>
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
          <div className = 'flex flex-col ' >
             <label htmlFor = "" className = ' bg-white p-2 text-xs relative top-4 left-2 w-fit '> Gender </label>
            <input type="text" placeholder = 'Male' className = 'border outline-none block py-3 pl-3 rounded-lg text-sm pr-4 w-72 '  />
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
