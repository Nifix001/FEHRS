import * as React from 'react';
import logo from '../assets/futa logo.png';
import { Link, useNavigate } from 'react-router-dom';
import processLogin from '../helpers/helpers';
import { useUser } from '../context/UserContext';
import  { DotLoader } from 'react-spinners'


export default function BasicCard( { signUp } ) {

  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const [loading, setLoading] = React.useState(false);


  const history = useNavigate();
  const { user, setUser, setToken, setPatients, setDrugs, setPrescriptions } = useUser();


  const handleLogin = (e) => {
    processLogin(email, password, setLoading, setToken, e, history, user, setUser, setPatients, setDrugs, setPrescriptions)
  };
  

  const handleSignup = () => {

  }

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

        <form 
            className = 'grid justify-center'
            onSubmit = { handleLogin }
            >
            { !signUp ? <>
            <header> 
              <h1 className = 'text-primary mb-1'> Welcome Back </h1>
            </header>

            <h3 className = 'text-gray-750'> Welcome back, please login with the required information </h3>
            <input 
              type = "text" 
              name = 'Email' 
              placeholder = 'Email' 
              value = { email }  
              onChange = { (e) => setEmail( e.target.value ) } 
              className = {`bg-secondary2 border border-primary rounded w-90 h-10 text-primary mt-3 mb-8 indent-3.5 outline-0 ${loading ? 'cursor-not-allowed': ''}  `} 
              autoComplete='true'
              required
              disabled = { loading }
            />
            <input 
              type = "password" 
              name = 'password' 
              placeholder = 'Password' 
              value = { password } 
              onChange = { (e) => setPassword( e.target.value ) } 
              className = {` bg-secondary2 border border-primary rounded w-90 h-10 text-primary indent-3.5 outline-0  ${ loading ? 'cursor-not-allowed' : '' } `} 
              required 
              disabled = { loading }
            />
            <button 
              type = 'submit' 
              className = {`bg-primary text-white w-90 rounded h-9 mt-16 ${loading ? 'opacity-70 cursor-not-allowed ' : ''} flex items-center gap-6 `}
              disabled = { loading }
            >
               {
                  !loading ?  <span className = 'ml-40' > Login </span>    : 
                  <>
                    <span className = 'ml-32'> Logging in </span>
                    <DotLoader color="#fff" size = { 18 }  />
                  </>
                }
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
                autoComplete='true'
                required
              />
              <input 
                type = "text" 
                name = 'email' 
                placeholder = 'email' 
                value = { email }  
                onChange = { (e) => setEmail( e.target.value ) } 
                className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary   indent-3.5 outline-0 ' 
                autoComplete='true'
                required
              />
              <input 
                type = "password" 
                name = 'password' 
                placeholder = 'Password' 
                value = { password } 
                onChange = { (e) => setPassword( e.target.value ) } 
                className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary indent-3.5 outline-0 ' 
                required 
              />
              <input 
                type = "password" 
                name = 'password' 
                placeholder = 'Confirm Password' 
                value = { password } 
                onChange = { (e) => setPassword( e.target.value ) } 
                className = 'bg-secondary2 border border-primary rounded w-90 h-10 text-primary indent-3.5 outline-0 ' 
                required 
              />
              <button 
                type = 'submit' 
                className = 'bg-primary text-white w-90 rounded h-9  '
                onClick = { handleSignup }
              >
                <span className = 'ml-40' > Sign Up </span>
              </button>
            </div>
            </>
            }
        </form>
    </div>
  );
}