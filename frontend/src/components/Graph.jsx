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
                    { patients.length > 6 && <p className = 'font-span text-base font-normal hover:text-primary '>
                        <Link to="/user/patients"> See more </Link>
                    </p>}
                </div>

                <div>
                    <table className = "w-94 h-80 bg-white rounded-md table-auto  text-center">                 
                        <thead className = 'border-b text-primary text-sm'>
                            <tr className = 'p-4'>
                                <th> SN </th>
                                <th> Name </th>
                                <th> Matric Number </th>
                            </tr>
                        </thead>
                        
                        <tbody className = "font-span text-base font-normal">     
                            {/* <tr>
                                <td> 1. </td>
                                <td> Mary Joseph </td>
                                <td> MEE/10/6554 </td>
                            </tr> */}
                            {
                               patients && patients.slice(0, 6).map(p => {
                                    return (
                                        <React.Fragment key = { p.id } >
                                            <tr>
                                                <td> { p.id }. </td>
                                                <td> { p.lastname } { p.firstname } </td>
                                                <td> { p.matric_no } </td>
                                            </tr>      
                                        </React.Fragment>
                                    )
                                } )
                            }
                           
                            {/* <tr>
                                <td> 2. </td>
                                <td> Amala Jones </td>
                                <td> STS/10/4325 </td>
                            </tr>
                           
                            <tr>
                                <td> 3. </td>
                                <td> Damilola Oyin </td>
                                <td> ICT/09/5622 </td>
                            </tr>
                           
                            <tr>
                                <td> 4. </td>
                                <td> Selim Jubril </td>
                                <td> MST/12/8924 </td>
                            </tr>
                           
                            <tr>
                                <td> 5. </td>
                                <td> Paul Shola </td>
                                <td> CVE/11/7652 </td>
                            </tr>
                           
                            <tr>
                                <td> 6. </td>
                                <td> Adekunle Ishola </td>
                                <td> CPE/17/6520 </td>
                            </tr>

                            <tr>
                                <td> 7. </td>
                                <td> David Olawale </td>
                                <td> CPE/19/6520 </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>    
            </div>  
        </div>
    </React.Fragment>
  )
}

export default Graph
