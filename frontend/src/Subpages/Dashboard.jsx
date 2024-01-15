import React from 'react'
import Graph from '../components/Graph'
import SummaryCard from '../components/SummaryCard'
import { useUser } from '../context/UserContext'
import NoAccess from './NoAccess'

const Dashboard = () => {

  const { user } = useUser();
  const allowed = user.role_id === 2;

  return (
    <React.Fragment>
      { allowed ?  <div 
            className = 'w-[1111px] h-full bg-tertiary-4 border-l relative top-20 left-60 -ml-0.5 overflow-x-hidden     overflow-y-hidden'>
          <div className = 'scale-95'>
            <header>
              <p className = 'font-span text-base font-normal  ml-8 mt-2'> Dashboard &gt; Summary </p>
            </header>

            <SummaryCard />
            
            <Graph />
          </div>
        </div>
        : <NoAccess />
      }
    </React.Fragment>
  )
}

export default Dashboard
