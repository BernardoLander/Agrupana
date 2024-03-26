import React from 'react'
import { useUser } from '../context/Usuariocontext'
import { useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { auth , db } from "../firebase";
import { useEffect } from 'react';
import { Navigate, useNavigate , Link ,  } from 'react-router-dom'
import { logearAuth} from "../Controllers/Usuario";



const Login = () => {
  const {user,setUser} = useUser()
  const [correo, setCorreo]= useState('')
  const [password , setPasword] = useState('')
  
  async function Ingresar(){
    logearAuth(correo, password)

  }

  return (
    <div>
      <form >
        <input type="text" placeholder='Ingrese el correo' value={correo} onChange={(e)=>setCorreo(e.target.value.toLowerCase())}/>
        <input type="password" placeholder='Ingrese la contaseña' value={password} onChange={(e)=>setPasword(e.target.value.toLowerCase())}/>
        <button type='button' onClick={Ingresar} to='/pefil'>Ingresar</button>
        <Link to='/perfil'>perfil</Link>
      </form>
    </div>
  )
}

export default Login
