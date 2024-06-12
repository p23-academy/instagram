import {isUserAuthenticated} from "../../data/auth/authRepo.js";
import {Outlet, redirect} from "react-router-dom";
import Topbar from "../topbar/Topbar.jsx";

export const appLoader = async () => {
  const isAuthenticated = await isUserAuthenticated()
  if (!isAuthenticated) {
    return redirect(`/login`)
  }
  return {}
}

const App = () => {
  return (
    <div className={"h-screen w-screen flex flex-col items-center"}>
      <Topbar/>
      <Outlet/>
    </div>
  )
}

export default App