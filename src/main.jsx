import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login, {loginAction} from "./ui/login/Login.jsx";
import Profile, {profileLoader} from "./ui/profile/Profile.jsx";
import Image, {imageLoader} from "./ui/profile/images/Image.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    action: loginAction,
    element: <Login/>,
  },
  {
    path: "/profile/:id",
    loader: profileLoader,
    element: <Profile/>,
    children: [
      {
        path: "/profile/:id/:image",
        loader: imageLoader,
        element: <Image/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
