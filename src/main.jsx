import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './componests/Shop/Shop';
import Home from './componests/Layout/Home';
import Orders from './componests/Orders/Orders';
import Inventory from './componests/Inventory/Inventory';
import Login from './componests/Login/Login';
import cardProductsLoader from './Lodars/CardProductLodar';

const router = createBrowserRouter([

  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },

      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cardProductsLoader
      },

      {
        path:'inventory',
        element: <Inventory></Inventory>
      },

      {
        path: 'login',
        element: <Login></Login>
      }

    ]
    
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
