import React from 'react'
import { Link } from 'react-router-dom'

import calendar from "../assets/Calendar.png";
import graph from "../assets/reportgraph.png";
import dot from '../assets/carbon_overflow-menu-horizontal.svg'

import PatientsTable from '../Tables/PatientsTable';
import Patientsdata from '../database/Patientsdata';
import { useUser } from '../context/UserContext';


const Reports = () => {
  
  const { patients } = useUser();


  const patient = patients.map( p  =>  {
    
    return(

        <tr key = { p.id } >
          <td className = 'py-4 text-left pl-6 text-base'> {`${p.firstname} ${p.lastname}`} </td>
          <td className = 'text-left pl-6 text-base'> { p.matric_no } </td>
          <td className = 'text-left pl-6 text-base'> 0{ p.phone_no } </td>
          <td className = 'text-left text-base'> { p.email } </td>
          <td className = 'text-left pl-3 text-base'> 
              { p.prescriptions.map(d => {
                    return (
                      <span key = { d.id } > { d.diagnosis } </span>
                      )
                    }) }
          </td>
          <td className = 'pl-8'>
            <div className = 'flex items-center justify-start pl-1 '> 
              <Link>
                <img 
                  src = { dot }  
                  alt ="dot" 
                />
              </Link>
            </div>
          </td>
        </tr>
      )
    }
  )

  return (
    <React.Fragment>
      <div div className = 'w-[1111px] h-fit bg-[#f9f9f9] border-l  relative top-20 left-60 -ml-0.5 py-6 px-14 reports bg-opacity-60 grid gap-6 '>
        <div className = 'flex gap-7 ' >
          <div className = ' bg-white h-52 w-[36vw] rounded-md flex flex-col gap-4 px-2 py-4  shadow-sm' >
            <h1 className = ' text-[18px] font-semibold ' > Overview </h1>
            <div className="flex justify-around items-center "> 
              <div className="flex flex-col gap-2 items-center justify-center text-[14px]">
                <h3> 2190 </h3>
                <h4> Total Patients </h4>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center text-[14px]">
                <h3> 1830 </h3>
                <h4 className = ' text-[#DBA362] ' > Visited Patients </h4>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center text-[14px]">
                <h3> 432 </h3>
                <h4 className = ' text-[#845EBC] ' > Admitted Patients </h4>
              </div>
            </div>
            <hr className = ' p-0.5'  />
            <div className="flex justify-around items-center "> 
              <div className="flex flex-col gap-2 items-center justify-center text-[14px]">
                <h3> 439 </h3>
                <h4 className = ' text-[#2B5ABC] ' > Tests done </h4>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center text-[14px]">
                <h3> 1490 </h3>
                <h4 className = ' text-[#27AE60] ' > Treated Patients </h4>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center text-[14px]">
                <h3> 1432 </h3>
                <h4 className = ' text-[#C616AA] ' > Prescribed Drugs </h4>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center text-[14px]">
                <h3> 0 </h3>
                <h4 className = ' text-[#DA1212] ' > Death </h4>
              </div>
            </div>
          </div>
          <div className = ' bg-white h-52 w-[36vw] rounded-md  grid px-2 py-8 shadow-sm ' >
            <div className = " flex justify-between px-2 " >
              <h1 className = ' text-[18px] font-semibold '> Doctors on Duty </h1>
              <Link to = "/user" className = ' text-[14px] '  > See All </Link>
            </div>
            <table className = ' text-[14px]' >
              <thead className = ' border-b'>
                <tr>
                  <td> Name </td>
                  <td> Date </td>
                  <td> Time </td>
                </tr>
              </thead>
              <tbody>
                <tr className = ' border-b ' >
                  <td> Dr. Kayode </td>
                  <td> 23/05/23 </td>
                  <td> 07:00  </td>
                </tr> 
                <tr className = ' border-b ' >
                  <td> Dr. Shola </td>
                  <td> 23/05/23 </td>
                  <td> 15:00 </td>
                </tr> 
                <tr className = '' >
                  <td> Dr. Oluwamuyiwa </td>
                  <td> 23/05/23 </td>
                  <td> 20:00 </td>
                </tr> 
              </tbody>
            </table>
          </div>
        </div>
        <div className = 'bg-white h-[370px] w-[74vw] rounded-md shadow-sm p-3 flex flex-col' >
          <div className = 'flex justify-between w-full ' >
            <h1> Patient Overview </h1>
            <button className = ' flex items-center gap-2 justify-center text-sm p-2 border-2 rounded-md' >
              <img src = { calendar } alt="" /> 
              Monthly 
            </button>
          </div>
          <img src = { graph } alt="" className = 'p-4'  />
          <div className = ' flex items-center justify-around ml-auto mr-auto gap-4 ' >
            <div className = 'flex justify-around items-center gap-1 ' >
              <div className = ' rounded-full border-2 w-[14px] h-[14px] ' > </div>
              <h3> Non-admitted </h3>
            </div>
            <div className = 'flex justify-around items-center gap-1 ' >
              <div className = ' rounded-full border-2 w-[14px] h-[14px] ' > </div>
              <h3> Admitted </h3>
            </div>
          </div>
        </div>
        <div className = ' bg-white h-fit w-[74vw] rounded-md shadow-sm ' >
          <header className = 'flex w-full items-center relative py-3' > <h1 className = ' text-xl font-semibold pl-6 absolute top-4 '> History </h1> </header>
          <div className = 'scale-95 -ml-4 ' >
            <PatientsTable patients = { patient.slice(0,7) } />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Reports
