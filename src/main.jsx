import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './context/Usuariocontext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router = {router} />
    </UserContextProvider>
  </React.StrictMode>
)