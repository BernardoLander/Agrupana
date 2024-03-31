import React, { useState, useEffect } from 'react';
import { useUser } from "../context/Usuariocontext";
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';
import { auth , db } from "../firebase";
import { updateProfile } from 'firebase/auth';

const PerfilUsuario = () => {
  const {user,setUser} = useUser();
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    console.log('User:', user); // Log the user object
    if (user.email !== undefined) {
      buscar();
    }
  }, [user]);

  async function buscar(){
    console.log('Fetching user data...'); // Log when we start fetching user data
    const userRef = collection(db, 'Usuarios');
    const q = query(userRef, where('correo', '==', user.email));
    const querySnapshot = await getDocs(q);
    if(!querySnapshot.empty){
      const user2 = querySnapshot.docs[0].data();
      setUser(user2);
      setName(user2.nombre);
      setEmail(user2.correo);
      setPhone(user2.phone);
      setIsLoadingUser(false);
      console.log('User data fetched:', user2); // Log the fetched user data
    }
  }

  const handleUpdateProfile = async () => {
    try {
      // Update the profile in Firestore
      await updateDoc(doc(db, 'Usuarios', user.uid), {
        nombre: name,
        correo: email,
        phone: phone
      });

      // Update the profile in Firebase Authentication
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      setSuccessMessage('Profile updated successfully.');
    } catch (error) {
      setError('Error updating profile.');
    }
  };

  return (
      <div>
        {!isLoadingUser && <p>Nombre de usuario: {name}</p>}
        {!isLoadingUser && <p>Apellido: {user.apellido.charAt(0).toUpperCase() + user.apellido.slice(1)}</p>}
        {!isLoadingUser && <p>Correo: {email}</p>}
        {!isLoadingUser && <p>Phone: {phone}</p>}
        {!isLoadingUser && <button onClick={handleUpdateProfile}>Actualizar</button>}
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
  )
}

export default PerfilUsuario;