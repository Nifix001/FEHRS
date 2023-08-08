import React from 'react'
import { Form } from 'react-router-dom'

const PaForm1 = () => {
  return (
    <React.Fragment>
        <div className="grid grid-cols-3 grid-rows-2">
          <div className="grid">
            <label htmlFor="" className='w-16'>First Name</label>
            <input type="text" placeholder='Ayomide' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-16'>Last Name</label>
            <input type="text" placeholder='Kanayo' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-20'>Other Name</label>
            <input type="text" placeholder='Festus' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-24'>Matric Number</label>
            <input type="text" placeholder='___ /__ /_____' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-24'>Date of Birth</label>
            <input type="text" placeholder='__ /__ /____' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-24'>Phone Number</label>
            <div className="flex">
              {/* <div>
                <img src="" alt="" />
                <h4>+234</h4>
                <img src="" alt="" />
              </div> */}
              <input type="text" placeholder='' />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="grid">
            <label htmlFor="" className='w-16'>Gender</label>
            <div className="flex">
              <div className="flex">
                <input type="radio" name="" id="" />
                <h4>Male</h4>
              </div>
              <div className="flex">
                <input type="radio" name="" id="" />
                <h4>Female</h4>
              </div>
            </div>
          </div>
          <div className="grid">
            <label htmlFor="" className='w-24'>Home Address</label>
            <input type="text" placeholder='Enter Text Here' />
          </div>
        </div>
        <hr />
        <header>Next of Kin</header>
        <div className="grid grid-cols-3 grid-rows-2">
          <div className="grid">
            <label htmlFor="" className='w-16'>First Name</label>
            <input type="text" placeholder='Ayomide' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-16'>Last Name</label>
            <input type="text" placeholder='Kanayo' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-20'>Other Name</label>
            <input type="text" placeholder='Festus' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-20'>Relationship</label>
            <input type="text" placeholder='' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-16'>Gender</label>
            <input type="text" placeholder='' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-20'>Date of Birth</label>
            <input type="text" placeholder='__ / __ / ____' />
          </div>
        </div>
    </React.Fragment>
  )
}

export default PaForm1
