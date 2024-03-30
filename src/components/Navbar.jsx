import React, { useState, useEffect } from 'react'
import {Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css';
import Logo from '../images/Logo.jpg'

const Navbar = () => {
  const location = useLocation();
  const [isAuthPage, setIsAuthPage] = useState(false);

  useEffect(() => {
    setIsAuthPage(location.pathname === '/login' || location.pathname === '/registro');
  }, [location]);

  return (
      <div>
        <nav className="navbar navbar-expand-lg " >
          <div className={styles.headline}>

            <a className="navbar-brand" href="#">
              <img src={Logo}  className={styles.logoAgrupana1}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx auto">
                {!isAuthPage ? (
                    <>
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

                      <li className="nav-item">
                        <Link className="nav-link" to='/login'>Iniciar Sesión</Link>
                      </li>

                      <div className = {styles.registrateWrapper}>
                        <li className={styles.registrate}>
                          <Link className="nav-link" to='/registro'>Regístrate</Link>
                        </li>
                      </div>
                    </>
                ) : (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" to='/login'>Iniciar Sesión</Link>
                      </li>

                      <div className = {styles.registrateWrapper}>
                        <li className={styles.registrate}>
                          <Link className="nav-link" to='/registro'>Regístrate</Link>
                        </li>
                      </div>
                    </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar