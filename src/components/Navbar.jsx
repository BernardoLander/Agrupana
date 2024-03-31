import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useUser } from '../context/Usuariocontext';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const { user } = useUser();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Handle user state changes
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/agrupaciones">Agrupaciones</Link>
        {user ? (
            <>
              <Link to="/perfil">Perfil</Link>
              <button onClick={handleSignOut}>Cerrar sesion</button>
            </>
        ) : (
            <>
              <Link to="/login">Iniciar Sesion</Link>
              <Link to="/registro">Registrate</Link>
            </>
        )}
      </nav>
  );
};

export default Navbar;