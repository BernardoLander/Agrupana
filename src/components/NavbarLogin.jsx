import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavbarLogin.module.css'
const NavbarLogin = () => {
  return (
    <div>
      <div className={styles.iniciarSesinChild}>
        <ul className="nav nav-underline">
          <li className="nav-item">
              <a className={styles.iniciarSesin1} aria-current="page" href="#">Iniciar Sesión</a>
          </li>
          <li className="nav-item">
              <Link className={styles.regstrate} to='/registro'>Registro</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavbarLogin

