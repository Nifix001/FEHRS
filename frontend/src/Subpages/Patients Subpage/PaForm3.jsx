import React from 'react'

const PaForm3 = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="grid">
          <label htmlFor="">Test Type</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="">Date of Test</label>
          <input type="text" placeholder='__ /__ /____' />
        </div>
        <div className="grid">
          <label htmlFor="">Test Location</label>
          <input type="text" />
        </div>
      </div>
      <div className="grid">
        <label htmlFor="">Comment</label>
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter text here' ></textarea>
      </div>
    </React.Fragment>
  )
}

export default PaForm3
