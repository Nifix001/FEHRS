import React from 'react'
import { Form } from 'react-router-dom'

const AddNew = () => {
  return (
    <React.Fragment>
      <Form  className=''>
        <header><h3>Add New Drugs</h3></header>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3 paform1 ">
        <div className="grid">
            <label htmlFor="" className='w-16'>Drug Name</label>
            <input type="text" placeholder='Acetaminophen and Codeine'  />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-16'>Brand Name(optional)</label>
            <input type="text" placeholder='(Tylenol with Codeine)' />
          </div>
          <div className="grid">
            <label htmlFor="" className='w-16'>Package Size</label>
            <input type="text" placeholder='30 tablets per bottle ' />
          </div>
        </div>
      </Form>
    </React.Fragment>
  )
}

export default AddNew
