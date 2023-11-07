import React from 'react'
import { Link } from 'react-router-dom'

const Reports = () => {
  return (
    <React.Fragment>
      <div div className = 'w-fit h-160.5 bg-[#f9f9f9] border-l  relative top-20 left-60 -ml-0.5 py-6 px-14 patients bg-opacity-60 '>
        <div className = 'flex gap-7 ' >
          <div className = ' bg-white h-52 w-[36vw] rounded-md grid px-2 py-8 ' >
            <h1> Overview </h1>
            <div className="flex justify-around items-center "> 
              <div className="grid">
                <h3> 2190 </h3>
                <h4> Total Patients </h4>
              </div>
              <div className="grid">
                <h3> 1830 </h3>
                <h4> Visited Patients </h4>
              </div>
              <div className="grid">
                <h3> 432 </h3>
                <h4> Admitted Patients </h4>
              </div>
            </div>
            <hr className = 'p-2'  />
            <div className="flex justify-around items-center "> 
              <div className="grid">
                <h3> 439 </h3>
                <h4> Tests done </h4>
              </div>
              <div className="grid">
                <h3> 1490 </h3>
                <h4> Treated Patients </h4>
              </div>
              <div className="grid">
                <h3> 1432 </h3>
                <h4> Prescribed Drugs </h4>
              </div>
              <div className="grid">
                <h3> 0 </h3>
                <h4> Death </h4>
              </div>
            </div>
          </div>
          <div className = ' bg-white h-52 w-[36vw] rounded-md  grid px-2 py-8 ' >
            <div className = " flex justify-between " >
              <h1> Doctors on Duty </h1>
              <Link to = "/user" > see more </Link>
            </div>
            <table>
              <thead>
                <tr>
                  <td> Name </td>
                  <td> Date </td>
                  <td> Time </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> Dr. Kayode </td>
                  <td> 23/05/23 </td>
                  <td> 07:00  </td>
                </tr> 
                <tr>
                  <td> Dr. Shola </td>
                  <td> 23/05/23 </td>
                  <td> 15:00 </td>
                </tr> 
                <tr>
                  <td> Dr. Oluwamuyiwa </td>
                  <td> 23/05/23 </td>
                  <td> 20:00 </td>
                </tr> 
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Reports
