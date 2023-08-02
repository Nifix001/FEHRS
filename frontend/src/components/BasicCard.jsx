import * as React from 'react';
import logo from '../assets/Frames.png';
import { Form } from 'react-router-dom';


export default function BasicCard() {
  return (
    <div className='xl:w-104 2xl:w-151 xl:h-124 2xl:h-178.25 ml-auto mr-auto mt-20 login-card rounded-lg pt-10 basic-card'>
        <header><img src={logo} alt="FEHRS logo"  className='h-10 w-28 ml-auto mr-auto mb-10'/></header>
        <Form>
            <header>Welcome Back</header>
            <h3>Welcome back, please login with the required information</h3>
            <input type="text" name='uniqueId' placeholder='Unique ID' />
            <input type="text" name='password' placeholder='Password' />
            <button type='submit' className='bg-primary text-white'>Login</button>
        </Form>
    </div>
  );
}