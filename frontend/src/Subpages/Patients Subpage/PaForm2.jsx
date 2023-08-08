import React from 'react'

const PaForm2 = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-3 grid-rows-2">
        <div className="grid">
          <label htmlFor="" className='w-20'>Blood Group</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="" className='w-16'>Genotype</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="" className='w-16'>Allergies</label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="" className='w-40'>Chronic diseases or conditions</label>
          <input type="text" />
        </div>
      </div>
      <hr />
      <header>Previous illness 0r Test</header>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="grid">
          <label htmlFor="" className='w-40'>Previous illness or surgeries </label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="" className='w-8'>Date</label>
          <input type="text" placeholder='__ /__ /____' />
        </div>
        <div className="grid">
          <label htmlFor="" className='w-40'>Previous illness or surgeries </label>
          <input type="text" />
        </div>
        <div className="grid">
          <label htmlFor="" className='w-8'>Date</label>
          <input type="text" placeholder='__ / __ /____' />
        </div>
      </div>
    </React.Fragment>
  )
}

export default PaForm2
