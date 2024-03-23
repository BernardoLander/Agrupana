import React , { useState, useContext } from 'react'
import { useUser } from './context/Usuariocontext'
import { Navigate, useNavigate } from 'react-router-dom'
import './App.css'

function App() {

  const {user,setUser} = useUser()
  const navigate = useNavigate()

  function cambiarnombre(){
    console.log("mi nombre es", user )
    navigate('/Login', { replace: true })
  }

  return (
    <div>
      <form >
      <input type="text" placeholder='ingrese nuevo nombre' value={user} onChange={(e) => setUser(e.target.value)} />
      <button type="button" onClick={cambiarnombre}>cambio</button>
      <p>{user}</p>
      </form>
    </div>
  )
}

export default App
