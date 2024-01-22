import { ArrowLeft3 } from 'iconsax-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../helpers/helpers';
import { useUser } from '../../context/UserContext';
import ConfirmChange from '../../modal/ConfirmChange';



const Password = () => {
  
  const { token } = useUser();
  const location = useNavigate();
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password3, setPassword3] = useState('');
  const [error, setError] = useState('');
  const [confirm , setConfirm] = useState(false);

  
  
  const data = {
    'current_password': password1,
    'password': password2,
    'password_confirmation': password3,
  };

  
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setError('');
    if (name === 'password1') setPassword1(value);
    if (name === 'password2') setPassword2(value);
    if (name === 'password3') setPassword3(value);
  };

  
  
  const handleConfirm = (e) => {
    e.preventDefault();
    if (password3 !== password2) {
      setError('The passwords do not match, please check again!');
    } else {
      changePassword(setError, data, token);
      // console.log("hello");
    }
  };

  return (
    <div className="h-[83.2vh] w-[60vw] flex flex-col gap-4">
      <div
        className="w-full h-12 rounded-md bg-white flex items-center p-3 cursor-pointer gap-1"
        onClick={(e) => {
          e.preventDefault();
          location('/user/settings');
        }}
      >
        <ArrowLeft3 size={12} />
        <h3 className="text-xs">Change Password</h3>
      </div>
      <div className="w-full h-full rounded-xl bg-white p-9">
        <form action="">
          <div className="flex flex-col mb-28 gap-3">
            {['password1', 'password2', 'password3'].map((inputName, index) => (
              <div key={index} className="grid">
                <label
                  htmlFor={inputName}
                  className="bg-white p-2 text-xs relative top-4 left-2 w-fit"
                >
                  {inputName === 'password1' ? 'Enter Old Password' : 'Enter New Password'}
                </label>
                <input
                  type="password"
                  name={inputName}
                  id={inputName}
                  value={eval(inputName)}
                  placeholder={
                    inputName === 'password1' ? 'Enter Old Password' : 'Enter New Password'
                  }
                  className={`border ${
                    error && 'border-red-600'
                  } outline-none block py-4 pl-4 rounded-lg pr-4 w-94 text-lg`}
                  required
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            ))}
            {error && <div className="text-xs py-2 text-red-600">{error}</div>}
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="border px-6 py-2 rounded-md bg-primary text-white"
              onClick={(e) => {
                                e.preventDefault();
                                setConfirm(true)
                              }}
            >
              Change Password
            </button>
            <button className="border px-6 py-2 rounded-md border-primary text-primary">
              Cancel
            </button>
          </div>
          { confirm && <ConfirmChange handleConfirm={handleConfirm} setConfirm={setConfirm} /> }
        </form>
      </div>
    </div>
  );
};

export default Password;
