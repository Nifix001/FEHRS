import React from 'react'
import { NavLink } from 'react-router-dom'

const PaForm2 = () => {
  return (
    <React.Fragment>
      <div className = "grid grid-cols-3 grid-rows-2 gap-x-6">
        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-20'
          >
            Blood Group
          </label>
          <input type = "text" />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-16' 
          > 
           Genotype 
          </label>
          <input type = "text" />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-16'
          >
            Allergies
          </label>
          <input type = "text" />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-40'
          > 
            Chronic diseases or conditions
          </label>
          <input type = "text" />
        </div>
      </div>
      
      <hr className = 'my-10' />

      <header> 
        <h1> Previous illness or Test </h1> 
      </header>

      <div className = "grid grid-cols-2 grid-rows-2 gap-x-6">
        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-40'
          >
            Previous illness or surgeries 
          </label>
          <input type = "text" />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-8'
          > 
            Date
          </label>
          <input 
            type = "text" 
            placeholder = '__ /__ /____' 
          />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-40'
          >
            Previous illness or surgeries 
          </label>
          <input type = "text" />
        </div>

        <div className = "grid">
          <label 
            htmlFor = "" 
            className = 'w-8'
          >
            Date
          </label>
          <input 
            type = "text" 
            placeholder = '__ / __ /____' 
          />
        </div>
      </div>
      <div className = "flex absolute bottom-0 ml-56 mr-auto gap-12">
              <NavLink 
                type = 'submit' 
                className = 'bg-primary text-white py-3 px-20 rounded-md'
                to = '/user/patients/new/test'
              >
                  Save and Continue
              </NavLink>


              <NavLink 
                type = 'submit' 
                className = 'bg-white text-primary border-2 border-primary py-3 px-20 rounded-md'
                to = '/user/patients/new/personal'
              >
                Previous
              </NavLink>
        </div>
    </React.Fragment>
  )
}

export default PaForm2
