import React from 'react'

const DrugTable = ({drugs}) => {
  return (
    <React.Fragment>
        <table className=" w-260 bg-white rounded-md  text-center mt-6 table-auto">
            <thead className='border-b '>
                <tr className='p-3 table-row'>
                <td className='text-tertiary-5 font-span text-lg font-thin'>S/N</td>
                <td className='text-gray-222 font-span text-lg font-thin text-left pl-6'>Drug Name</td>
                <td className='text-gray-222 font-span text-lg font-thin'>Quantity (pcs)</td>
                <td className='text-gray-222 font-span text-lg font-thin'>MFG date</td>
                <td className='text-gray-222 font-span text-lg font-thin'>EXP date</td>
                <td className='text-gray-222 font-span text-lg font-thin'>Options</td>
                </tr>
            </thead>
            <tbody className="font-span text-lg font-normal my-4 gap-16">
                
                {drugs}
            </tbody>
        </table>
    </React.Fragment>
  )
}

export default DrugTable
