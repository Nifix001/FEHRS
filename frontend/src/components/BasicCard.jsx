import * as React from 'react';
import logo from '../assets/futa logo.png';
import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function BasicCard( { signUp } ) {

  const [id, setId] = React.useState('');
  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className = 'xl:w-104 2xl:w-151 xl:h-124 2xl:h-178.25 ml-auto mr-auto mt-20 login-card rounded-lg pt-10 basic-card'>
        <header>
          <Link to = "/" className = 'flex gap-2 items-center justify-center mb-6' > 
            <img 
              src = { logo } 
              alt = "FUTA logo"  
              className = 'h-10 w-10 object-contain'
            />
            <h1 className = 'text-primary text-2xl font-extrabold pt-2' > FEHRS </h1>
          </Link>
        </header>

        <Form className = 'grid justify-center'>
            { !signUp ? <>
            <header> 
              <h1 className = 'text-primary mb-1'> Welcome Back </h1>
            </header>

            <h3 className = 'text-gray-750'> Welcome back, please login with the required information </h3>
            <input 
              type = "text" 
              name = 'UniqueId' 
              placeholder = 'UniqueId' 
              value = { id }  
              onChange = { (e) => setId( e.target.value ) } 
              className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary mt-3 mb-8 indent-3.5 outline-0 ' 
              required
            />
            <input 
              type = "password" 
              name = 'password' 
              placeholder = 'Password' 
              value = { password } 
              onChange = { (e) => setPassword( e.target.value ) } 
              className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary indent-3.5 outline-0 ' required 
            />
            <button 
              type = 'submit' 
              className = 'bg-primary text-white w-90 rounded h-9 mt-16 '
            >
              <span className = 'ml-40' > Login </span>
            </button>
            </>
            : <>
              <header> 
              <h1 className = 'text-primary mb-1'> Sign Up </h1>
            </header>

            <h3 className = 'text-gray-750'> Please sign up with the required information </h3>
            <div className = 'flex flex-col justify-around items-center gap-6 mt-2 ' >

              <input 
                type = "text" 
                name = 'Name' 
                placeholder = 'Name' 
                value = { name }  
                onChange = { (e) => setName( e.target.value ) } 
                className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary   indent-3.5 outline-0 ' 
                required
              />
              <input 
                type = "text" 
                name = 'Email' 
                placeholder = 'Email' 
                value = { email }  
                onChange = { (e) => setEmail( e.target.value ) } 
                className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary   indent-3.5 outline-0 ' 
                required
              />
              <input 
                type = "password" 
                name = 'password' 
                placeholder = 'Password' 
                value = { password } 
                onChange = { (e) => setPassword( e.target.value ) } 
                className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary indent-3.5 outline-0 ' required 
              />
              <input 
                type = "password" 
                name = 'password' 
                placeholder = 'Confirm Password' 
                value = { password } 
                onChange = { (e) => setPassword( e.target.value ) } 
                className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary indent-3.5 outline-0 ' required 
              />
              <button 
                type = 'submit' 
                className = 'bg-primary text-white w-90 rounded h-9  '
              >
                <span className = 'ml-40' > Login </span>
              </button>
            </div>
            </>
            }
        </Form>
    </div>
  );
}