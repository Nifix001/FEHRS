import React from 'react'

const PrescriptionTable = ({prescriptions}) => {
  return (
    <React.Fragment>
      <table className=" w-260 bg-white rounded-md  text-center mt-6 table-auto">
            <thead className='border-b '>
                <tr className='p-3 table-row'>
                <td className='text-tertiary-5 font-span text-lg font-thin text-left pl-6'>Name</td>
                <td className='text-tertiary-5 font-span text-lg font-thin  text-left pl-6'>Matric Number</td>
                <td className='text-tertiary-5 font-span text-lg font-thin text-left pl-20'>Drug</td>
                <td className='text-tertiary-5 font-span text-lg font-thin text-left pl-6'>Qty</td>
                <td className='text-tertiary-5 font-span text-lg font-thin'>Options</td>
                </tr>
            </thead>
            <tbody className="font-span text-lg font-normal my-4 gap-16">
              {prescriptions}                
            </tbody>
        </table>
    </React.Fragment>
  )
}

export default PrescriptionTable
