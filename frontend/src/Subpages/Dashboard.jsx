import React from 'react'
import SummaryCard from '../components/SummaryCard'

const Dashboard = () => {
  return (
    <React.Fragment>
        <div className='w-281 h-142.5 bg-white relative top-20 left-60 -ml-0.5 mt-4'>
            <header>
                <p className='font-span text-base font-normal  ml-6'>Dashboard &gt; Summary</p>
            </header>
            <SummaryCard />
        </div>
    </React.Fragment>
  )
}

export default Dashboard
