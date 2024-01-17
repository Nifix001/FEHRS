import React from 'react'
import { Link } from 'react-router-dom'
import graph from '../assets/Dashboard/Frame 486.svg'
import { useUser } from '../context/UserContext'

const Graph = () => {
    const { patients } = useUser();

     return (
      <React.Fragment>      
        <div className = 'flex pt-6 pl-6'>
            <img 
                className = 'scale-y-70 scale-x-90 -mt-16 -ml-5' 
                src = { graph } 
                alt = "graph" 
            />
            
            <div className = 'ml-12'>
                
                <div className = 'flex justify-between items-center mb-3'>
                    <h5 className = 'font-welcome text-xl font-medium'> Recent Patients </h5>
                    { 
                        patients.length > 6 && <p className = 'font-span text-base font-normal hover:text-primary '>
                          <Link to="/user/patients"> See more </Link>
                        </p>
                    }
                </div>

                <div>
                    <table className = "w-[386px] h-80 bg-white rounded-md table-auto  text-center">                 
                        <thead className = 'border-b text-primary text-sm'>
                            <tr className = 'p-4'>
                                <th className='pl-4'> SN </th>
                                <th> Name </th>
                                <th className='pr-4'> Matric Number </th>
                            </tr>
                        </thead>
                        
                        <tbody className = "font-span text-base font-normal">     
                            {
                               patients && patients.slice( 0, 6 ).map(p => {
                                    return (
                                        <React.Fragment key = { p.id } >
                                            <tr>
                                                <td className='pl-2'> { p.id }. </td>
                                                <td className = ' text-left pl-11 '> { p.lastname } { p.firstname } </td>
                                                <td className = ' text-left pr-4 ' > { p.matric_no } </td>
                                            </tr>      
                                        </React.Fragment>
                                    )
                                } )
                            }
                        </tbody>
                    </table>
                </div>    
            </div>  
        </div>
    </React.Fragment>
  )
}

export default Graph
