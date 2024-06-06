import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login, {loginAction} from "./ui/login/Login.jsx";
import Profile, {profileLoader} from "./ui/profile/Profile.jsx";
import Image, {imageLoader} from "./ui/profile/images/Image.jsx";
import './data/firebase/firebase.js'
import App, {appLoader} from "./ui/app/App.jsx";
import NewImage, {uploadAction} from "./ui/new/NewImage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    action: loginAction,
    element: <Login/>,
  },
  {
    path: "/app",
    loader: appLoader,
    element: <App/>,
    children: [
      {
        path: "/app/profile/:id",
        loader: profileLoader,
        element: <Profile/>,
        children: [
          {
            path: "/app/profile/:id/:image",
            loader: imageLoader,
            element: <Image/>,
          }
        ]
      },
      {
        path: "/app/new",
        element: <NewImage/>,
        action: uploadAction
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
