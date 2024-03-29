import React, { useState } from 'react'
import { crearUsuario , registrarAuth } from '../Controllers/Usuario'
import { collection , query, where, getDocs } from "firebase/firestore";
import { auth , db } from "../firebase";


const Registro = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [password,setPassword] = useState('')
  const estudiante = "@correo.unimet.edu.ve"
  const admin = "@unimet.edu.ve" 

  async function ValidarCorreo(){
    const usuarioRef = collection(db, 'Usuarios')
    const q = query(usuarioRef , where('correo','==',correo))
    const querySnapshot = await getDocs(q)
    if(!querySnapshot.empty){
      alert('El correo ya esta registrado')
      return
    }
    if (typeof correo !=='string' || correo.trim()==='' || /\s/.test(correo)) {
      alert("Ingrese un correo valido")
      return
    }
    if(typeof nombre !=='string' || nombre.trim() === '' || !/^[a-zA-Z\s]*$/.test(nombre) || nombre.length<=2  ){
      alert("El nombre no es valido")
      return
    }
    if (typeof apellido !=='string' || apellido.trim() ==='' || !/^[a-zA-Z\s]*$/.test(apellido) || apellido.length<=2 ){
      alert("El apellido no es valido")
      return
    }
    if(password.length<8 || /\s/.test(password)){
      alert('La contraseña tiene que ser de 8 o mas caracteres y no debe contener espacios')
      return
    }
    switch (true) {
      case correo.includes(estudiante):
        console.log("el correo es de estudiante")
        await crearUsuario({nombre , apellido , correo , password})
        await registrarAuth(correo, password)
        break;
      case correo.includes(admin):
        console.log("el correo es de admin")
        break;
      default:
        console.log("el correo no pertenece a la universidad")        
        break;
    }
  }
  return (
    <div style={{border:'3px'}}>
      <form>
        <input type="text" placeholder='Ingresa tu nombre' value={nombre} onChange={(e)=>setNombre(e.target.value.toLowerCase())}/>
        <input type="text" placeholder='Ingresa tu apellido'value={apellido}  onChange={(e)=>setApellido(e.target.value.toLowerCase())}/>
        <input type="text" placeholder='Ingresa tu correo' value={correo} onChange={(e)=> setCorreo(e.target.value.toLowerCase())}/>
        <input type="password" placeholder='Ingresa tu contraseña'value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type='button' onClick={ValidarCorreo}>ingresar</button>
        
      </form>
    </div>
  )
}

export default Registro
