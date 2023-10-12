import React from 'react'

const HistoryTable = ( { history } ) => {
  return (
    <React.Fragment>
       <table className = " w-260 bg-white rounded-md  text-center mt-6 table-auto">
            <thead className = 'py-3 border-b '>
                <tr className = 'table-row'>
                  <td className = 'text-tertiary-5 font-span text-lg font-thin text-left pl-6 py-3'> Name </td>
                  <td className = 'text-tertiary-5 font-span text-lg font-thin  text-left pl-6'> Drug </td>
                  <td className = 'text-tertiary-5 font-span text-lg font-thin text-left pl-8'> Qty </td>
                  <td className = 'text-tertiary-5 font-span text-lg font-thin text-left pl-20'> Date </td>
                  <td className = 'text-tertiary-5 font-span text-lg font-thin text-left pl-16'> Diagnosis </td>
                  <td className = 'text-tertiary-5 font-span text-lg font-thin'> Options </td>
                </tr>
            </thead>

            <tbody className = "font-span text-lg font-normal my-4 gap-16">
              { history }              
            </tbody>
            
        </table>
    </React.Fragment>
  )
}

export default HistoryTable
