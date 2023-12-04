// EditModal.js

import React from 'react';

const EditPatient = ({ isOpen, onClose, patient }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div className="relative p-8 bg-white w-96 mx-auto my-12 rounded-md shadow-lg">
        <button
          className="absolute top-0 right-0 p-2 cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-2xl font-semibold mb-4">Edit Patient</h2>
        {/* Add your edit form components here */}
        {/* You can use the patient prop to pre-fill the form */}
      </div>
    </div>
  );
};

export default EditPatient;
