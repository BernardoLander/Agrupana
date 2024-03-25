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
    // const userRef = collection(db, 'Usuarios')
    // const q =query (userRef, where('correo','==', correo))
    // const querySnapshot = await getDocs (q)
    //   if(!querySnapshot.empty){
    //     const user2 = querySnapshot.docs[0].data()
    //     console.log('Usuario encontrado, nombre', user2.nombre)
    //     console.log(user2.apellido)
    //     console.log(user2.correo)
    //     // setUser(user2)
    //     // console.log('context')
    //     // console.log('Usuario encontrado, nombre', user.nombre)
    //     // console.log(user.apellido)
    //     // console.log(user.correo)
    //     setUser(user2)

    //   }
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
