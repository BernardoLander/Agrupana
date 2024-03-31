import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { useUser } from '../context/Usuariocontext';
import { signOut } from 'firebase/auth';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user } = useUser();
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Handle user state changes
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      {!user && (
          <>
            <Link to="/registro">Registrate</Link>
            <Link to="/login">Iniciar Sesion</Link>
          </>
      )}
      {user && (
          <>
            <Link to="/perfil">Perfil</Link>
            <button onClick={handleSignOut}>Cerrar sesion</button>
          </>
      )}
    </nav>
);
};

export default Navbar;