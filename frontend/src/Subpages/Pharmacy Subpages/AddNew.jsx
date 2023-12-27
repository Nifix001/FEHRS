import React, { useState } from 'react'
import { Form, NavLink } from 'react-router-dom'

const AddNew = () => {

  const [ name, setName ] = useState();
  const [ quantity, setQuantity ] = useState();
  const [ brand, setBrand ] = useState();
  const [ size, setSize ] = useState();
  const [ supplier, setSupplier ] = useState();
  const [ batch, setBatch ] = useState();
  const [ manufacture, setManufacture ] = useState();
  const [ expiration, setExpiration ] = useState();
  const [ nafdac, setNafdac ] = useState();
  const [ dosage, setDosage ] = useState();
  const [ concentration, setConcentration ] = useState();
  const [ description, setDescription ] = useState();


  const rawData = {
    "drug_name" : name,
    "drug_quantity" : quantity,
    "brand_name" : brand ,
    "package_size" : size ,
    "manufacturer" : supplier ,
    "batch_no" : batch ,
    "manufacturing_date" : manufacture,
    "expiring_date" : expiration ,
    "nafdac_number" : nafdac ,
    "dosage_form" : dosage ,
    "concentration" : concentration ,
    "drug_description" : description
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <React.Fragment>
      <Form  className = 'new-drugs' >
        <header>
          <h3> Add New Drugs </h3>
        </header>

        <div className = "grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-3">
          
          <div className = "flex flex-col">
            <label 
              htmlFor = "" 
              className = 'w-10'
            >
              Drug Name
            </label>
            <input 
              type = "text" 
              placeholder = 'Acetaminophen and Codeine' 
              value = { name } 
            />
          </div>

          <div className = "flex flex-col">
            <label 
              htmlFor = "" 
              className = 'w-10'
            >
              Drug Quantity
            </label>
            <input 
              type = "text" 
              placeholder = '1' 
              value = { quantity } 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-24 text-center'
            >
              Brand Name(optional)
            </label>
            <input 
              type = "text" 
              placeholder = '(Tylenol with Codeine)'
              value = { brand } 
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-10 text-center'
            >
              Package Size
            </label>
            <input 
              type = "text" 
              placeholder = '30 tablets per bottle ' 
              value = { size }
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Manufacturer/Supplier
            </label>
            <input 
              type = "text" 
              placeholder = '' 
              value = { supplier }
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Bactch/Lot Number
            </label>
            <input 
              type = "text" 
              placeholder = '___ /__ /_____' 
              value = { batch }
            />
          </div>
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Manufacturing Date
            </label>
            <input 
              type = "text" 
              placeholder = '___ /__ /_____' 
              value = { manufacture }
            />
          </div>
          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              Expiration Date
            </label>
            <input 
              type = "text" 
              placeholder = '___ /__ /_____' 
              value = { expiration }
            />
          </div>

          <div className = "grid">
            <label 
              htmlFor = "" 
              className = 'w-16 text-center'
            >
              NAFDAC Number
            </label>
            <input 
              type = "text" 
              placeholder = '' 
              value = { nafdac }
            />
          </div>

          <div className="flex gap-4 ">
            <div className="grid">
              <div className = "grid">
                <label 
                  htmlFor = "" 
                  className = 'w-20 text-center'
                >
                  Concentration
                </label>
                <input 
                  className='w-182'
                  type = "text" 
                  placeholder = '500 mg, 5mg/ml, etc.' 
                  value = { concentration }
                />
              </div>

              <div className = "grid mb-8">
                <label 
                  htmlFor = "" 
                  className = 'w-20 text-center'
                >
                  Drug Description
                </label>
                <textarea 
                  className='w-182'
                  name = "" 
                  id = "" 
                  cols = "30" 
                  rows = "10" 
                  placeholder = 'Enter text here' 
                  value = { description }>  
                </textarea>
              </div>
            </div>
              <div className='flex flex-col gap-4 '>
                <label className=''>
                  Dosage Form
                </label>
                <div className = ' grid grid-cols-2 grid-rows-2 gap-x-8 '>
                  <h6 className = ' flex gap-1 ' ><input type="radio" name="dosage" id="" /> Tablet</h6>
                  <h6 className = ' flex gap-1 ' ><input type="radio" name="dosage" id="" /> Capsules</h6>
                  <h6 className = ' flex gap-1 ' ><input type="radio" name="dosage" id="" /> Syrup</h6>
                  <h6 className = ' flex gap-1 ' ><input type="radio" name="dosage" id="" /> Injection</h6>
                </div>
              </div>

            </div>
          </div>





        <div className = "flex mx-auto gap-12 items-center justify-center ">
              <button 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
                onClick = { handleSubmit }
              >
                  Save
              </button>

              {/* <NavLink 
                type = 'submit' 
                className = 'bg-white text-primary border-2 border-primary py-3 px-20 rounded-md'
                to = '/user/patients'
              >
                Previous
              </NavLink> */}
        </div>
        
      </Form>
    </React.Fragment>
  )
}

export default AddNew
