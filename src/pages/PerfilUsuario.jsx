import React, { useState, useEffect } from 'react';
import { useUser } from "../context/Usuariocontext";
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from "../firebase";
import { updateProfile } from 'firebase/auth';

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
            setName(userData.nombre);
            setLastName(userData.apellido);
            setEmail(userData.correo);
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
        nombre: name,
        apellido: lastName,
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
      <div className="profile-container">
        <h2>Mi Perfil</h2>
        <div className="profile-info">
          <div>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label>Apellido:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} disabled/>
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" value={phone} disabled/>
          </div>
        </div>
        <button className="btn-update" onClick={handleUpdateProfile}>Actualizar</button>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
  );
}

export default PerfilUsuario;