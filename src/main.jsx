import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './Components/Register.jsx';
import Login from "./Components/Login.jsx";
import Feed from "./Components/Feed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"login",
    element: <Login/>,
  },
  {
    path: "register",
    element: <Register/>
  },
  {
    path:"feed",
    element:<Feed />,
  },
  {
    path:"profile",
    element:<Profile/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />

);