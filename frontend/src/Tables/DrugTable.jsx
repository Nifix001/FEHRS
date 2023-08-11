import React from 'react'

const DrugTable = () => {
  return (
    <React.Fragment>
        <table className="h-192.25 w-287.25 bg-white rounded-md table-auto  text-center">
                    <thead className='border-b '>
                        <tr className='p-3'>
                        <td className='text-tertiary-5 font-span text-lg font-thin'>S/N</td>
                        <td className='text-gray-222 font-span text-lg font-thin'>Drug Name</td>
                        <td className='text-gray-222 font-span text-lg font-thin'>Quantity (pcs)</td>
                        <td className='text-gray-222 font-span text-lg font-thin'>MFG date</td>
                        <td className='text-gray-222 font-span text-lg font-thin'>EXP date</td>
                        <td className='text-gray-222 font-span text-lg font-thin'>Options</td>
                        </tr>
                    </thead>
                    <tbody className="font-span text-lg font-normal">
                        <tr>
                        <td>1.</td>
                        <td>Mary Joseph</td>
                        <td>MEE/10/6554</td>
                        </tr>
                        </tbody>
                        </table>
    </React.Fragment>
  )
}

export default DrugTable
