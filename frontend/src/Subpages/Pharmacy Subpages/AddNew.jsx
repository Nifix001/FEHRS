import React from 'react'
import { Form } from 'react-router-dom'

const AddNew = () => {
  return (
    <React.Fragment>
      <Form  className = '' >
        <header>
          <h3> Add New Drugs </h3>
        </header>

        <div className = "grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3 paform1 ">
          
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              Drug Name
            </label>
            <input 
              type = "text" 
              placeholder = 'Acetaminophen and Codeine'  
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              Brand Name(optional)
            </label>
            <input 
              type = "text" 
              placeholder = '(Tylenol with Codeine)' 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              Package Size
            </label>
            <input 
              type = "text" 
              placeholder = '30 tablets per bottle ' 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              Manufacturer/Supplier
            </label>
            <input 
              type = "text" 
              placeholder = '' 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              Bactch/Lot Number
            </label>
            <input 
              type = "text" 
              placeholder = '___ /__ /_____' 
            />
          </div>
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              Manufacturing Date
            </label>
            <input 
              type = "text" 
              placeholder = '___ /__ /_____' 
            />
          </div>
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              Expiration Date
            </label>
            <input 
              type = "text" 
              placeholder = '___ /__ /_____' 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-28'
            >
              NAFDAC Number
            </label>
            <input 
              type = "text" 
              placeholder = '' 
            />
          </div>

          <div className='grid'>
            <label className='mb-4'>
              Dosage Form
            </label>
            <div className='grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-2'>
            <h6 ><input type="radio" name="" id="" /> Tablet</h6>
            <h6><input type="radio" name="" id="" /> Capsules</h6>
            <h6><input type="radio" name="" id="" /> Injection</h6>
            <h6><input type="radio" name="" id="" /> Syrup</h6>
            </div>
          </div>
          
        </div>
      </Form>
    </React.Fragment>
  )
}

export default AddNew
