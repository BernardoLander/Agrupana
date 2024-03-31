import React, { useState, useEffect } from 'react';
import { useUser } from "../context/Usuariocontext";
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { updateProfile } from 'firebase/auth';
import styles from './PerfilUsuario.module.css'
import Perfil from '../images/usuario.png'

const PerfilUsuario = () => {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (user) {
      const getUserData = async () => {
        try {
          const userDoc = await getDoc(doc(db, 'Usuarios', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserData(userData);
            setName(userData.name); // Changed from 'nombre' to 'name'
            setLastName(userData.lastName); // Changed from 'apellido' to 'lastName'
            setEmail(userData.email); // No change needed
            setPhone(userData.phone);
          } else {
            setError('User not found in Firestore.');
          }
        } catch (error) {
          setError('Error fetching user data from Firestore.');
        }
      };
      getUserData();
    }
  }, [user]);

  const handleUpdateProfile = async () => {
    try {
      // Update the profile in Firestore
      await updateDoc(doc(db, 'Usuarios', user.uid), {
        name: name, // Changed from 'nombre' to 'name'
        lastName: lastName, // Changed from 'apellido' to 'lastName'
      });

      // Update the profile in Firebase Authentication
      await updateProfile(user, {
        displayName: `${name} ${lastName}`,
      });

      setSuccessMessage('Profile updated successfully.');
    } catch (error) {
      setError('Error updating profile.');
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.perfilDeUsuario}>
      <div className={styles.ttulo}>
        <b >PERFIL DE USUARIO</b>
      </div>
      <div className={styles.perfilDeUsuarioItem} />

      <div className={styles.groupParent}>
        <img className={styles.groupIcon1} src={Perfil}/>
        <div className={styles.groupChild} />
        <div className={styles.correoDelUsuario}>{email}</div>
        <div className={styles.nombreYApellido}>{name}, {lastName}</div>
        <div className={styles.cambiarFotoWrapper}>CAMBIAR FOTO</div>
      </div>

      <div className={styles.nombre}>Nombre</div>
      <input className={styles.perfilDeUsuarioInner} type="text" value={name} onChange={(e) => setName(e.target.value)}/>

      <div className={styles.telfono}>Teléfono</div>
      <input className={styles.rectangleDiv} type="text" value={phone} disabled/>

      <div className={styles.apellido}>Apellido</div>
      <input className={styles.perfilDeUsuarioChild1} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

      <div className={styles.correoElectrnico}>Correo Electrónico</div>
      <input className={styles.perfilDeUsuarioChild2} type="email" value={email} disabled/>

      <button className={styles.guardarCambiosWrapper} onClick={handleUpdateProfile}>Guardar Cambios</button>
      <div className={styles.cambiarContrasea}>Cambiar Contraseña</div>
      <div className={styles.perfilDeUsuarioChild} 
        //link
      >
        VER MIS AGRUPACIONES
      </div>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      
    </div>


  );
}

export default PerfilUsuario;