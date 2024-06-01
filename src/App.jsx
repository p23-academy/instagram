import './App.css'
import {Link} from "react-router-dom";

function App() {

  return (
    <div className={"w-screen h-screen flex flex-col justify-center items-center"}>
      <h1 className={"text-2xl"}>Home</h1>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
    </div>
  )
}

export default App
