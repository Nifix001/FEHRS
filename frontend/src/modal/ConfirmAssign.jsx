import React from 'react'


const ConfirmAssign = ({ setConfirm, role, user, setSelectedRoles, active }) => {

    const handleRoleButtonClick = (userId, assignedRole) => {
        console.log(user);
        console.log(role);
        setSelectedRoles((prevSelectedRoles) => {
          // Clear the selected role if the same role is clicked again
          const newSelectedRoles = { ...prevSelectedRoles };
          if (newSelectedRoles[userId] === assignedRole) {
            delete newSelectedRoles[userId];
          } else {
            newSelectedRoles[userId] = assignedRole;
          }
          console.log(newSelectedRoles[active]);
          return newSelectedRoles[active];
        });
      };
      
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-10  flex items-center justify-center">
        <div className="relative p-8 bg-white w-fit mx-auto my-12 rounded-2xl shadow-lg flex flex-col items-center">
        <h1 className='text-lg font-semibold mb-4'> Are you sure you want to assign role? </h1>
        <div className='flex gap-4'>
            <button
                className="border px-6 py-3 rounded-md bg-primary outline-none text-white font-semibold"
                onClick = {(e) =>  {
                                    e.preventDefault()
                                    setConfirm(false);
                                    handleRoleButtonClick(user.id, role)
                                    // handleConfirm(e);
                                } }
            >
                Yes, I want to!
            </button>
            <button
                className="border-2 border-primary px-6 py-3 rounded-md bg-white text-primary"
            //   onClick={(e) => handleConfirm(e)}
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
  )
}

export default ConfirmAssign
