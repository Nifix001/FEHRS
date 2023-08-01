import { Link } from "react-router-dom"
import logo from "../assets/Frames.png"

const Welcome = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="" />
      </header>
      <div>
      <h2>Welcome to <br /> FEHRS</h2>
      <h4>FUTA Electronic Health Record System</h4>
      </div>

      <div>
        <Link>Login</Link>
        <Link>Sign up</Link>
      </div>
    </div>
  )
}

export default Welcome
