import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { useUser } from '../context/Usuariocontext';
import { signOut } from 'firebase/auth';
import styles from './Navbar.module.css';
import Logo from '../images/Logo.jpg'
import Perfil from '../images/usuario.png'


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
    <nav className='navbar navbar-expand-lg '>
      <div className={styles.headline}>
        <a className="navbar-brand" href="#">
          <img src={Logo}  className={styles.logoAgrupana1}/>
        </a>

        <div className= {styles.inicioWrapper}>
          <li className={styles.inicio}>
            <Link className="nav-link " to='/'>Inicio</Link>
          </li>
        </div>
        <div className= {styles.agrupacionesWrapper}>
          <li className={styles.agrupaciones}>
            <Link className="nav-link" to='/agrupaciones'>Agrupaciones Estudiantiles</Link>
          </li>
        </div>
        {user && user.role === 'admin' && (
            <Link to="/create-agrupation"><button>Create Agrupation</button></Link>
        )}
        {!user && (
          <>
            <Link className={styles.registrate} to='/registro'>Regístrate</Link>
            <Link to="/login">Iniciar Sesion</Link>
          </>

        )}
        {user && (
          <>
            <Link className={styles.groupIcon} to="/perfil">
              <img src={Perfil} />
            </Link>
            
            <button className={styles.registrate} onClick={handleSignOut}>Cerrar sesion</button>
          </>
        )}
      </div>

    </nav>
);
};

export default Navbar;