import React, { useState } from 'react'
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Recuperar = () => {
    const [correo, setCorreo] = useState('')
    function enviarcorreo(correo) {
      sendPasswordResetEmail(correo)
        
    }
  return (
    <div>
        recuperar
        <input type="text" placeholder='Ingrese tu correo electronico' value={correo} onChange={(e)=>setCorreo(e.target.value)} />
        <button type='button' onClick={enviarcorreo}>Cambiar</button>

    </div>
  )
}

export default Recuperar