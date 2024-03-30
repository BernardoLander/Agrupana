import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../components/AuthNavbar.module.css"
import Logo from '../images/Logo.jpg'

const AuthNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg " >
                <div className={styles.headline}>
                    <a className="navbar-brand" href="#">
                        <img src={Logo}  className={styles.logoAgrupana1}/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Iniciar Sesión</Link>
                            </li>
                            <div className = {styles.registrateWrapper}>
                                <li className={styles.registrate}>
                                    <Link className="nav-link" to='/registro'>Regístrate</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AuthNavbar