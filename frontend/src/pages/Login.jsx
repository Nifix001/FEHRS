import React from 'react'
import logo from '../assets/Frames.png'
import { Form } from 'react-router-dom'

const Login = () => {
  return (
    <React.Fragment>
      <section className='grid w-screen h-screen'>
        <header><img src={logo} alt="" /></header>
        <Form>
            <header>FUTA Electronic Health Record System</header>
            <input type="text" name='uniqueId' placeholder='Unique ID' />
            <input type="text" name='password' placeholder='Password' />
            <button type='submit' className='bg-primary'>Login</button>
        </Form>
      </section>
    </React.Fragment>
  )
}

export default Login
