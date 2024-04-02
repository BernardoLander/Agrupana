import React, { useState } from 'react'
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import styles from './Recuperar.module.css';

const Recuperar = () => {
    const [email , setEmail]= useState("")
    const navigate = useNavigate();

    const handlePasswordReset = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            navigate('/login');

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

        }
    };

    return (
        <div className={styles.container}>
            Recuperar contraseña:
            <input className={styles.inputField} type="text" placeholder='Ingrese tu correo electronico' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button className={styles.submitButton} type='button' onClick={handlePasswordReset}>Cambiar</button>
        </div>
    )
}

export default Recuperar