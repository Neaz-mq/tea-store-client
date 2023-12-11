import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddTea from './components/AddTea.jsx';
import UpdateTea from './components/UpdateTea.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/tea')
  },
  {
    path:"addTea",
    element: <AddTea></AddTea>
   
  },

  {
    path:"updateTea/:id",
    element: <UpdateTea></UpdateTea>,
    loader: ({params}) => fetch(`http://localhost:5000/tea/${params.id}`)
  
  },
  {
    path:"/signup",
    element: <SignUp></SignUp>
  },
  {
    path:"/signin",
    element: <SignIn></SignIn>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
