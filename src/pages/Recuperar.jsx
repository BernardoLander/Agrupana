import React, { useState } from 'react'
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const Recuperar = () => {
  const [email , setEmail]= useState("")
  // const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  return (
    <div>
        recuperar
        <input type="text" placeholder='Ingrese tu correo electronico' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type='button' onClick={sendPasswordResetEmail}>Cambiar</button>
        <h2>{email}</h2>

    </div>
  )
}

export default Recuperar