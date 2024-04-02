import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import './Login.module.css';
import { auth, googleProvider, db, signInWithPopup, facebookProvider } from '../firebase';
import NavbarLogin from '../components/NavbarLogin';
import styles from './Login.module.css'
import Google from '../images/google.png'
import Facebook from '../images/facebook.png'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!username || !password) {
            setError('Please fill in all fields.');
            return;
        }

        const estudiante = "@correo.unimet.edu.ve";
        const admin = "@unimet.edu.ve";

        if (!username.includes(estudiante) && !username.includes(admin)) {
            setError('Invalid email. Please enter a valid university email.');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const userDoc = await getDoc(doc(db, 'Usuarios', userCredential.user.uid));
            if (!userDoc.exists()) {
                setError('User not found in Firestore.');
                return;
            }

            // Check if the user is an admin
            if (userCredential.user.email.includes(admin)) {
                // Handle admin login
                // You can redirect the admin to a different page or set a different state
            }

            navigate('/');
            setLoggedIn(true);
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/user-not-found') {
                setError('No user found with this email.');
            } else if (error.code === 'auth/wrong-password') {
                setError('Incorrect password.');
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            const userDocRef = doc(db, 'Usuarios', user.uid);
            const userDoc = await getDoc(userDocRef);
            if (!userDoc.exists()) {
                await setDoc(userDocRef, { uid: user.uid, email: user.email });
            }

            navigate('/');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleFacebookSignIn = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const user = result.user;
            const userDocRef = doc(db, 'Usuarios', user.uid);
            const userDoc = await getDoc(userDocRef);
            if (!userDoc.exists()) {
                // User not found in Firestore, create a new document
                await setDoc(userDocRef, { uid: user.uid, email: user.email });
            }

            navigate('/');
        } catch (error) {
            console.error(error);
            
        }finally {
            setLoading(false);
        }
    };

    const handleForgotPasswordClick = () => {
        navigate('/recuperar');
    };

    return (
        <div className={styles.iniciarSesin}>
            <div className={styles.iniciarSesinChild}/>
            <NavbarLogin/>
            <div className={styles.component1}>
                <div className={styles.correoElectrnico}>Correo Electrónico</div>
                <input className={styles.component1Child}
                       type="text"
                       placeholder="estudiante@correo.unimet.edu.ve"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                />
                <div className={styles.contrasea}>Contraseña</div>
                <input className={styles.component1Item}
                       type="password"
                       placeholder="Contraseña"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.iniciarSesinWrapper} onClick={handleLogin} disabled={loading}>Iniciar sesión
                </button>
                <div className={styles.olvidSuContrasea} onClick={handleForgotPasswordClick}>¿Olvidó su contraseña?
                </div>
                <div className={styles.accesoRpidoCon}>-- Acceso rápido con --</div>
                <img
                    className={`${styles.flatColorIconsgoogle} ${styles.iconHover}`}
                    src={Google}
                    onClick={handleGoogleSignIn} disabled={loading}
                />
                <img
                    className={`${styles.frameIcon} ${styles.iconHover}`}
                    src={Facebook}
                    onClick={handleFacebookSignIn} disabled={loading}
                />
                {error && <p className="error-message">{error}</p>}
                {loggedIn && <p className="success-message">¡Has iniciado sesión correctamente!</p>}

            </div>
        </div>
    );
}

export default Login;