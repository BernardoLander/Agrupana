import React, { useState } from 'react'
import { useUser } from "../context/Usuariocontext";
import { collection, query, where, getDocs } from 'firebase/firestore'
import { auth , db } from "../firebase";

const PerfilUsuario = () => {
  const {user,setUser} = useUser()
  const [isLoadingUser, setIsLoadingUser] = useState(true)

  if (user.email !== undefined) {
    buscar()
  }
  
  async function buscar(){
    const userRef = collection(db, 'Usuarios')
    const q =query (userRef, where('correo','==', user.email))
    const querySnapshot = await getDocs (q)
    if(!querySnapshot.empty){
      const user2 = querySnapshot.docs[0].data()
      // console.log('Usuario encontrado en el componente perfil, nombre', user2.nombre)
      // console.log(user2.apellido)
      // console.log(user2.correo)
      setUser(user2)
      setIsLoadingUser(false)
    }
  }

  return (
    <div>
        {!isLoadingUser && <p>Nombre de usuario: {user.nombre.charAt(0).toUpperCase() + user.nombre.slice(1)}</p>}
        {!isLoadingUser && <p>Apellido: {user.apellido.charAt(0).toUpperCase() + user.apellido.slice(1)}</p>}
        {!isLoadingUser && <p>Correo: {user.correo}</p>}
    </div>
  )
}

export default PerfilUsuario
