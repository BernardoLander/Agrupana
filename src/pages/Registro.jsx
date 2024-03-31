import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, db, signInWithPopup, createUserWithEmailAndPassword, collection, query, where, getDocs, getDoc } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import './Registro.css';
import { MessageContext } from '../MessageContext';
import { updateProfile } from 'firebase/auth';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (shouldNavigate) {
      navigate('/');
    }
  }, [shouldNavigate]);

  const estudiante = "@correo.unimet.edu.ve";
  const admin = "@unimet.edu.ve";

  async function ValidarCorreo() {
    const usuarioRef = collection(db, 'Usuarios');
    const q = query(usuarioRef, where('correo', '==', email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      alert('El correo ya esta registrado');
      return false;
    }
    // ... existing validation checks ...

    switch (true) {
      case email.includes(estudiante):
        console.log("el correo es de estudiante");
        return true;
      case email.includes(admin):
        console.log("el correo es de admin");
        return true;
      default:
        console.log("el correo no pertenece a la universidad");
        return false;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    if (password.length < 8 || /\s/.test(password)) {
      setErrorMessage('The password must be 8 or more characters and should not contain spaces');
      return;
    }
    if (typeof email !== 'string' || email.trim() === '' || /\s/.test(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    if (typeof name !== 'string' || name.trim() === '' || !/^[a-zA-Z\s]*$/.test(name) || name.length <= 2) {
      setErrorMessage("The name is not valid");
      return;
    }
    if (typeof lastName !== 'string' || lastName.trim() === '' || !/^[a-zA-Z\s]*$/.test(lastName) || lastName.length <= 2) {
      setErrorMessage("The last name is not valid");
      return;
    }
    if (typeof phone !== 'string' || phone.trim() === '' || !/^[0-9]*$/.test(phone) || phone.length < 10) {
      setErrorMessage("The phone number is not valid");
      return;
    }

    const isValid = await ValidarCorreo();
    if (!isValid) {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      const userDoc = {
        uid: userCredential.user.uid,
        email: email,
        name: name,
        lastName: lastName,
        phone: phone
      };
      await setDoc(doc(db, 'Usuarios', userCredential.user.uid), userDoc);

      setMessage('Registration successful!');
      setTimeout(() => {
        setShouldNavigate(true);
      }, 2000);

    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userDocRef = doc(db, 'Usuarios', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        await setDoc(userDocRef, { uid: user.uid, email: user.email, name: user.displayName });
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <MessageContext.Provider value={{ message, setMessage }}>
        <div className="register-form">
          <h2>Register</h2>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value.toLowerCase())} />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value.toLowerCase())} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} />
          <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button onClick={handleSubmit}>Register</button>
          <button onClick={handleGoogleSignIn}>Register with Google</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">You have successfully registered!</p>}
        </div>
      </MessageContext.Provider>
  );
}

export default Registro;