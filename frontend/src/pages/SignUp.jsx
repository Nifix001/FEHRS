import React from 'react'
import logo from '../assets/Frames.png'
import { Form } from 'react-router-dom'
import BasicCard from '../components/BasicCard'


const SignUp = () => {

    const signUp = Boolean(true);

  return (
    <React.Fragment>
      <section className = 'w-full h-full'>
        <BasicCard signUp = { signUp }  />
      </section>
    </React.Fragment>
  )
}

export default SignUp