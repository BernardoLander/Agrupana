import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import './Login.module.css';
import { auth, googleProvider, db, signInWithPopup } from '../firebase';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
            if (!userDoc.exists()) {
                setError('User not found in Firestore.');
                return;
            }

            navigate('/Homepage');
            setLoggedIn(true);
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('No user found with this email.');
            } else if (error.code === 'auth/wrong-password') {
                setError('Incorrect password.');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (!userDoc.exists()) {
                setError('User not found in Firestore.');
                return;
            }

            navigate('/Homepage');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar sesión</h2>
            <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar sesión</button>
            <button onClick={handleGoogleSignIn}>Iniciar sesión con Google</button>
            {error && <p className="error-message">{error}</p>}
            {loggedIn && <p className="success-message">¡Has iniciado sesión correctamente!</p>}
        </div>
    );
}

export default Login;