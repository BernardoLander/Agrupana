import React , { useState, useContext } from 'react'
import { useUser } from './context/Usuariocontext'
import { Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import { logOut } from './Controllers/Usuario'

function App() {

  const {user,setUser} = useUser()
  const navigate = useNavigate()

  return (
    <div>
      <form >
      <button type='button' onClick={logOut}>Cerra sesion</button>
      </form>
    </div>
  )
}

export default App
