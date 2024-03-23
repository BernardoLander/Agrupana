import React from 'react'
import { useUser } from '../context/Usuariocontext'

const Login = () => {
    const {user,setUser} = useUser()
    
  return (
    <div>
      {user}
    </div>
  )
}

export default Login
