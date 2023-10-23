import React from 'react'

const DrugTable = ( { drugs } ) => {
  return (
    <React.Fragment>
        <table className = " w-260 bg-white rounded-md  text-center mt-6 table-auto">
            <thead className = 'border-b '>
                <tr className = 'table-row'>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal py-2'> S/N </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-6'> Drug Name </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-4'> Quantity (pcs) </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-8'> MFG date </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-8'> EXP date </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal'> Options </td>
                </tr>
            </thead>

            <tbody className = "font-span text-lg font-normal my-4 gap-16">
                { drugs }
            </tbody>

        </table>
    </React.Fragment>
  )
}

export default DrugTable
