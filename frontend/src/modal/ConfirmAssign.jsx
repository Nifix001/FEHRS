import React from 'react'

const ConfirmAssign = () => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className='text-lg font-semibold mb-4'> Are you sure you want to change the password? </h1>
        <div className='flex gap-4'>
            <button
                className="border px-6 py-3 rounded-md bg-primary outline-none text-white font-semibold"
                onClick = {(e) =>  {
                                    e.preventDefault()
                                    // handleConfirm(e);
                                    // setConfirm(false);
                                } }
            >
                Yes, I want to!
            </button>
            <button
                className="border-2 border-primary px-6 py-3 rounded-md bg-white text-primary"
            //   onClick={(e) => handleConfirm(e)}
                onClick={(e) => {
                    e.preventDefault();
                    // setConfirm(false);
                }}
            >
                No
            </button>
        </div>
        </div>
    </div>
  )
}

export default ConfirmAssign
