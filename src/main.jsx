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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path:"addTea",
    element: <AddTea></AddTea>
   
  },

  {
    path:"updateTea",
    element: <UpdateTea></UpdateTea>
  
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
