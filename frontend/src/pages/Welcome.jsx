import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Frame 46.png"

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="bg-background object-cover w-screen h-screen">
      <header>
        <img className="w-36 h-13 pt-6 " src={logo} alt="logo" />
      </header>
      <section>
      <h2 className="text-center mt-28"><span className="font-welcome text-8xl text-white font-bold tracking-wide">Welcome to</span> <br /><span className="font-span text-8xl text-gray-300 opacity-70  font-semibold tracking-wide">FEHRS</span></h2>
      <h4>FUTA Electronic Health Record System</h4>
      <div className="flex">
        <Link>Login</Link>
        <Link>Sign up</Link>
      </div>
      </section>
      </div>
    </React.Fragment>
  )
}

export default Welcome
