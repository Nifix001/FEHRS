import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Frame 46.png"

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="bg-background object-cover w-screen h-screen">
      <header>
        <img className="w-36 h-13" src={logo} alt="logo" />
      </header>
      <section>
      <h2 className="welcome">Welcome to <br /><span className="span text-inherit">FEHRS</span></h2>
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
