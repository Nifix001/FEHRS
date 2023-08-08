import React from 'react'
import graph from '../assets/Dashboard/Frame 486.svg'

const Graph = () => {
  return (
    <React.Fragment>
        <div className='flex'>
            <div>
                <img src={graph} alt="" />
            </div>
            <div>
                <h5></h5>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Graph
