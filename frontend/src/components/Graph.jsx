import React from 'react'
import { Link } from 'react-router-dom'
import graph from '../assets/Dashboard/Frame 486.svg'

const Graph = () => {
  return (
    <React.Fragment>
        <div className='flex pt-6  pl-6 gap-4'>
                <img className='-mt-16 scale-y-70' src={graph} alt="graph" />
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <h5 className='font-welcome text-2xl font-medium'>Recent Patients</h5>
                    <p className='font-span text-lg font-normal hover:text-primary '><Link>See more</Link></p>
                </div>
                <div>
                <table className="w-94 h-80 bg-white rounded-md table-auto  text-center">
                    <thead className='border-b text-primary'>
                        <tr className='p-3'>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Matric Number</th>
                        </tr>
                    </thead>
                    <tbody className="font-span text-lg font-normal">
                        <tr>
                        <td>1.</td>
                        <td>Mary Joseph</td>
                        <td>MEE/10/6554</td>
                        </tr>
                        <tr>
                        <td>2.</td>
                        <td>Amala Jones</td>
                        <td>STS/10/4325</td>
                        </tr>
                        <tr>
                        <td>3.</td>
                        <td>Damilola Oyin</td>
                        <td>ICT/09/5622</td>
                        </tr>
                        <tr>
                        <td>4.</td>
                        <td>Selim Jubril</td>
                        <td>MST/12/8924</td>
                        </tr>
                        <tr>
                        <td>5.</td>
                        <td>Paul Shola</td>
                        <td>CVE/11/7652</td>
                        </tr>
                        <tr>
                        <td>6.</td>
                        <td>Adekunle Gold</td>
                        <td>CPE/17/6520</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Graph
