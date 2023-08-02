import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Frames.png"

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="bg-background object-cover w-screen h-screen">
        
      <header>
        <img src={logo} alt="" />
      </header>
      <section>
      <h2>Welcome to <br /><span>FEHRS</span></h2>
      <h4>FUTA Electronic Health Record System</h4>
      <div>
        <Link>Login</Link>
        <Link>Sign up</Link>
      </div>
      </section>
      </div>
    </React.Fragment>
  )
}

export default Welcome
