import React, { useState } from 'react'
import { sendPasswordResetEmail } from "firebase/auth";

const Recuperar = () => {
    const [correo , setCorreo] = useState('')
    function enviarcorreo(correo) {
        sendPasswordResetEmail(correo)
    }
  return (
    <div>
        recuperar
        <input type="text"  placeholder='Ingrese su correo' value={correo} onChange={(e)=> setCorreo(e.target.value)}/>
        <button type='button' onClick={enviarcorreo}>Cambiar</button>
    </div>
    
  )
}

export default Recuperar