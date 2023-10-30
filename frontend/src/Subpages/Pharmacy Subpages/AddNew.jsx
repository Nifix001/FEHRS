import React from 'react'
import { Form, NavLink } from 'react-router-dom'

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
              className = 'w-24'
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
              className = 'w-24'
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
              className = 'w-24'
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
              className = 'w-24'
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
              className = 'w-24'
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
              className = 'w-24'
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
              className = 'w-24'
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
              className = 'w-24'
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
            <h6><input type="radio" name="" id="" /> Tablet</h6>
            <h6><input type="radio" name="" id="" /> Capsules</h6>
            <h6><input type="radio" name="" id="" /> Injection</h6>
            <h6><input type="radio" name="" id="" /> Syrup</h6>
            </div>
          </div>

          <div className=''>
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-24'
            >
              Concentration
            </label>
            <input 
              className='w-182'
              type = "text" 
              placeholder = '500 mg, 5mg/ml, etc.' 
            />
          </div>

          <div className = "grid mb-8">
            <label 
              htmlFor = "" 
              className = 'w-24'
            >
              Drug Description
            </label>
            <textarea 
              className='w-182'
              name = "" 
              id = "" 
              cols = "30" 
              rows = "10" 
              placeholder = 'Enter text here' >  
        </textarea>
          </div>
          </div>

        </div>

        <div className = "flex absolute -bottom-0 ml-56 mr-auto gap-12">
              <NavLink 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
                to = "/user/patients/new/info"
              >
                  Save and Continue
              </NavLink>

              <NavLink 
                type = 'submit' 
                className = 'bg-white text-primary border-2 border-primary py-3 px-20 rounded-md'
                to = '/user/patients'
              >
                Previous
              </NavLink>
        </div>
        
      </Form>
    </React.Fragment>
  )
}

export default AddNew
