import React from 'react'
import Graph from '../components/Graph'
import SummaryCard from '../components/SummaryCard'

const Dashboard = () => {
  return (
    <React.Fragment>
        <div className='w-281 h-142.5 bg-tertiary-4 relative top-20 left-60 -ml-0.5 mt-6 overflow-x-hidden pb-8'>
            <header>
                <p className='font-span text-base font-normal  ml-8 mt-6'>Dashboard &gt; Summary</p>
            </header>
            <SummaryCard />
            <Graph />
        </div>
    </React.Fragment>
  )
}

export default Dashboard
