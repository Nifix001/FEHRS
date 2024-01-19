import React from 'react'

const PrescribeDrug = ( { onClose } ) => {


  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg">
          {/* <button
            className="absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
            onClick={onClose}
          >
            Close
          </button> */}
          <h2 className="text-2xl font-semibold mb-4">Prescribe Drugs</h2>
          <button
          className = "absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick = { onClose } 
         >
          Close
        </button>
          <div className="flex">
              {/* <p>Are you sure you want to prescribe the following drugs?</p> */}
                                      
              </div>
              <div className = "flex w-full items-center justify-center mt-8 gap-6">
                 <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md'  > Prescribe </button>                                                       
          </div>
        </div>
      </div>
  )
}

export default PrescribeDrug
