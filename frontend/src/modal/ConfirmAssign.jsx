// ConfirmAssign.jsx

import React from 'react';

const ConfirmAssign = ({ setConfirm, role, user, setSelectedRoles, onRoleAssigned }) => {
  const handleConfirm = (e, assignedRole) => {
    e.preventDefault();

    // Check if a role is selected
    if (!assignedRole) {
      console.error("Please select a role");
      return;
    }

    setConfirm(false);
    setSelectedRoles(assignedRole);

    // Call the onRoleAssigned callback if it's a function
    if (typeof onRoleAssigned === 'function') {
      onRoleAssigned(assignedRole);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-10  flex items-center justify-center">
      <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className="text-lg font-semibold mb-4">Are you sure you want to assign the role?</h1>
        <div className="flex gap-4">
          <button
            className="border px-6 py-3 rounded-md bg-primary outline-none text-white font-semibold"
            onClick={(e) => handleConfirm(e, role)}
          >
            Yes, I want to!
          </button>
          <button
            className="border-2 border-primary px-6 py-3 rounded-md bg-white text-primary"
            onClick={(e) => {
              e.preventDefault();
              setConfirm(false);
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAssign;
