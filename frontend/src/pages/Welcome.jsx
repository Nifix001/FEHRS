import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/futa logo.png"

const Welcome = () => {
  return (
    <React.Fragment>
      <div className = "bg-background object-cover w-screen h-screen">
        <header className = "pt-8 pl-8 flex gap-3 items-center justify-start ">
          <img 
            className = "w-10 h-10 object-contain rounded-full " 
            src = { logo } 
            alt = "logo" 
          />
          <h1 className = "text-white text-2xl font-extrabold opacity-90" > FEHRS </h1>
        </header>

        <section>
          <h2 className = "text-center mt-24">
            <span className = "font-welcome text-8xl text-white font-bold tracking-wide">
              Welcome to
            </span> 
            <br />
           {/* <span className = "font-span text-8xl text-gray-300 opacity-70  font-semibold tracking-wide bg-clip-text"> FEHRS </span> */}
            <h2 className = "text-stroke text-8xl bg-clip-text text-transparent"> FEHRS </h2>
          </h2>

          <h4 className = "text-center font-welcome font-normal text-white text-3xl mt-6 leading-8"> FUTA Electronic Health Record System </h4>

          <div className = "flex justify-center items-center mt-20">
            <Link 
              to = "/login" 
              className = "font-span bg-transparent text-white text-l font-bold text-center mr-4 px-14 py-2 border border-solid border-gray-300 rounded-lg hover:bg-primary hover:border-primary"
            >
              Login
            </Link>

            {/* <Link 
              className = "font-span bg-transparent text-white text-l font-bold text-center px-14 py-2 border border-solid border-gray-300 rounded-lg hover:bg-primary hover:border-primary"> Sign up </Link> */}
          </div>
        </section>
      </div>
    </React.Fragment>
  )
}

export default Welcome
