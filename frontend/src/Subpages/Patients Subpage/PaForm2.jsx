import React from 'react'

const PaForm2 = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="grid">
          <label htmlFor="">Blood Group</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="">Genotype</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="">Allergies</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="">Chronic diseases or conditions</label>
          <input type="text" />
        </div>
      </div>
      <hr />
      <header>Previous illness 0r Test</header>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="grid">
          <label htmlFor="">Previous illness or surgeries </label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="">Date</label>
          <input type="text" placeholder='__ /__ /____' />
        </div>
        <div className="grid">
          <label htmlFor="">Previous illness or surgeries </label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="">Date</label>
          <input type="text" placeholder='__ / __ /____' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default PaForm2
