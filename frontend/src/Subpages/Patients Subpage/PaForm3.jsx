import React from 'react'
import { NavLink } from 'react-router-dom'

const PaForm3 = () => {
  return (
    <React.Fragment>
      
      <div className = "flex gap-6">
        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-16'
          >
            Test Type
          </label>
          <input type = "text" />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-20'
          >
            Date of Test
          </label>
          <input 
            type = "text" 
            placeholder = '__ /__ /____' 
          />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-20'
          >
            Test Location
          </label>
          <input type = "text" />
        </div>
      </div>

      <div className = "grid">
        <label 
          htmlFor = "" 
          className = 'w-16'
        >
          Comment
        </label>
        <textarea 
          name = "" 
          id = "" 
          cols = "30" 
          rows = "10" 
          placeholder = 'Enter text here' >  
        </textarea>
      </div>
      <div className = "flex absolute bottom-0 ml-56 mr-auto gap-12">
              <NavLink 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
                to = '/user/patients/new/confirm'
              >
                  Save and Continue
              </NavLink>


              <NavLink 
                type = 'submit' 
                className = 'bg-white text-primary border-2 border-primary py-3 px-20 rounded-md'
                to = '/user/patients/new/info'
              >
                Previous
              </NavLink>
        </div>
    </React.Fragment>
  )
}

export default PaForm3
