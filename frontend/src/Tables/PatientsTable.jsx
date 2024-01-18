import React from 'react'

const PatientsTable = ( { patients } ) => {
  return (
    <React.Fragment>
      <table className = " w-260 bg-white rounded-md  text-center mt-6 table-auto">
            <thead className = 'border-b '>
                <tr className = 'table-row'>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-6 py-2'> S/N </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-6 py-2'> Name </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal  text-left pl-6'> Matric Number </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-10'> Phone </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-10'> Email </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal text-left pl-6'> Diagnosis </td>
                  <td className = 'text-tertiary-5 font-span text-sm font-normal pl-4'> Options </td>
                </tr>
            </thead>

            <tbody className = "font-span text-lg font-normal my-4 gap-16">
              { patients }                
            </tbody>
            
        </table>
    </React.Fragment>
  )
}

export default PatientsTable
