import React, { useState } from 'react'

const PrescribeDrug = ( { onClose } ) => {

  const [inputSets, setInputSets] = useState([{ id: 1, value: '' }]);

  const handleInputChange = (id, value) => {
    const updatedInputSets = inputSets.map(set =>
      set.id === id ? { ...set, value } : set
    );
    setInputSets(updatedInputSets);
  };

  const handleAddInputSet = () => {
    setInputSets(prevInputSets => [
      ...prevInputSets,
      { id: prevInputSets.length + 1, value: '' },
    ]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Process the form data as needed
    console.log(inputSets);
  };


  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
        <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg px-16">
          {/* <button
            className="absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
            onClick={onClose}
          >
            Close
          </button> */}
          <h2 className="text-2xl font-semibold mb-4">Prescribe Drugs</h2>
          <button
          className = "absolute top-8 right-5 p-2 cursor-pointer text-xs text-red-400"
          onClick = { onClose } 
         >
          Close
        </button>
          <div className="flex">
              {/* <p>Are you sure you want to prescribe the following drugs?</p> */}
              <div>
                {inputSets.map(inputSet => (
                  <div key={inputSet.id} className="input-group flex gap-6">
                    <div className="flex flex-col relative">
                      <label htmlFor="" className='text-xs' > Drug </label>
                      <input type="text"
                      className='border p-2'  />
                    </div>
                    <div className="flex flex-col relative">
                      <label htmlFor={`input${inputSet.id}`} className='text-xs' >{`Quantity ${inputSet.id}:`}</label>
                      <input
                        type="text"
                        className='border p-2'
                        id={`input${inputSet.id}`}
                        name={`input${inputSet.id}`}
                        value={inputSet.value}
                        onChange={e => handleInputChange(inputSet.id, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
                <button type="button" onClick={handleAddInputSet}>
                  {/* Add */}
                  +
                </button>
              </div>
                                      
              </div>
              <div className = "flex w-full items-center justify-center mt-8 gap-6">
                 <button className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md'  > Prescribe </button>       
                 <button 
                    className = ' bg-primary text-white px-12 py-[12px] text-sm  rounded-md' 
                    onClick = { onClose }
                >   Cancel 
                </button>                                                    
          </div>
        </div>
      </div>
  )
}

export default PrescribeDrug
