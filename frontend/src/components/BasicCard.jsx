import * as React from 'react';
import logo from '../assets/Frames.png';
import { Form } from 'react-router-dom';


export default function BasicCard() {
  return (
    <div className='xl:w-104 2xl:w-151 xl:h-124 2xl:h-178.25 ml-auto mr-auto mt-20 login-card rounded-lg pt-10 basic-card'>
        <header><img src={logo} alt="FEHRS logo"  className='h-10 w-28 ml-auto mr-auto mb-10'/></header>
        <Form className='grid justify-center'>
            <header className='text-primary mb-1'>Welcome Back</header>
            <h3 className='text-gray-750'>Welcome back, please login with the required information</h3>
            <input type="text" name='uniqueId' placeholder='Unique ID'  className='bg-secondary2 border border-primary rounded w-90 h-10 text-primary mt-3 mb-8 indent-3.5' />
            <input type="text" name='password' placeholder='Password' className='bg-secondary2 border border-primary rounded w-90 h-10 text-primary indent-3.5' />
            <button type='submit' className='bg-primary text-white w-90 rounded h-9 mt-16 '><span className='ml-40' >Login</span></button>
        </Form>
    </div>
  );
}