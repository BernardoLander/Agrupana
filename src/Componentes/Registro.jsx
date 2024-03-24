import React, { useState } from 'react'
import { crearUsuario } from '../Controllers/Usuario'

const Registro = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [correo, setCorreo] = useState('')
  const [password,setPassword] = useState('')
  const estudiante = "@correo.unimet.edu.ve"
  const admin = "@unimet.edu.ve" 

  async function ValidarCorreo(){
    if(typeof nombre !=='string' || nombre.trim() === '' || !/^[a-zA-Z\s]*$/.test(nombre)){
      alert("el nombre no es valido")
      return
    }
    if (typeof apellido !=='string' || apellido.trim() ==='' || !/^[a-zA-Z\s]*$/.test(apellido)){
      alert("el apellido no es valido")
      return
    }
    if(password.length<8){
      alert('la contraseña tiene que ser de 8 o mas caracteres')
      return
    }
    switch (true) {
      case correo.includes(estudiante):
        console.log("el correo es de estudiante")
        await crearUsuario({nombre , apellido , correo , password})

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
        <input type="text" placeholder='Ingresa tu nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        <input type="text" placeholder='Ingresa tu apellido'value={apellido}  onChange={(e)=>setApellido(e.target.value)}/>
        <input type="text" placeholder='Ingresa tu correo' value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
        <input type="password" placeholder='Ingresa tu contraseña'value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type='button' onClick={ValidarCorreo}>ingresar</button>
      </form>
    </div>
  )
}

export default Registro
