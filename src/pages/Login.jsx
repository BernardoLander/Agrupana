import React from 'react'
import { useUser } from '../context/Usuariocontext'
import { useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { auth , db } from "../firebase";
import { useEffect } from 'react';
import { Navigate, useNavigate , Link ,  } from 'react-router-dom'
import { crearUsuario, logearAuth, signInGoogle, logOut , signInFacebook} from "../Controllers/Usuario";



const Login = () => {
  const {user,setUser} = useUser()
  const [correo, setCorreo]= useState('')
  const [password , setPasword] = useState('')
  
  async function Ingresar(){
    if (typeof correo !=='string' || correo.trim()==='' || /\s/.test(correo)) {
      alert("Ingrese un correo valido")
      return
    }
    if (password.length<8 || /\s/.test(password)) {
      alert('La contraseña tiene que ser de 8 o mas caracteres y no debe contener espacios')
      return
    }
    else{
      logearAuth(correo, password)
    }
  }
  async function IniciarGoogle() {
    await signInGoogle()
    
  }
  async function IniciarFacebook(){
    await signInFacebook()
  }

  return (
    <div>
      <form >
        <input type="text" placeholder='Ingrese el correo' value={correo} onChange={(e)=>setCorreo(e.target.value.toLowerCase())}/>
        <input type="password" placeholder='Ingrese la contaseña' value={password} onChange={(e)=>setPasword(e.target.value)}/>
        <button type='button' onClick={Ingresar} to='/pefil'>Ingresar</button>
        <Link to='/perfil'>perfil</Link>
        <button type='button' onClick={IniciarGoogle}>Inicia sesion con google</button>
      </form>
      <button type='button' onClick={logOut}>Cerra sesion</button>    
      <button type='button' onClick={IniciarFacebook}>Inicia sesion con facebook</button>
    </div>
  )
}

export default Login
