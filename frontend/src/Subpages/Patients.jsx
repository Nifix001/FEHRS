import React from 'react'
import { Outlet } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import NoAccess from './NoAccess';

const Patients = () => {

  const { user } = useUser();

  const userAllowed = user.role_id === 1 || user.role_id === 4;

  return (  
    <React.Fragment>
      { userAllowed  ? 
          <div className = 'w-[80vw] h-160.5 bg-white border-l  relative top-20 left-60 -ml-0.5 py-2 px-3 patients bg-opacity-60 '>
                <Outlet /> 
          </div>  
          : 
          <NoAccess />
        }
    </React.Fragment>
  )
}

export default Patients
