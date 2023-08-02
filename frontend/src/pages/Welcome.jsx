import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Frames.png"

const Welcome = () => {
  return (
    <React.Fragment>
      <header>
        <img src={logo} alt="" />
      </header>
      <section>
      <h2>Welcome to <br /> <span>FEHRS</span></h2>
      <h4>FUTA Electronic Health Record System</h4>
      <div>
        <Link>Login</Link>
        <Link>Sign up</Link>
      </div>
      </section>
    </React.Fragment>
  )
}

export default Welcome
