import React from 'react'
import { Link } from 'react-router-dom'

const NavbarRegistro = () => {
    return (
        <div>
          <ul className="nav nav-underline">
            <li className="nav-item">
                <Link className="nav-link" to='/login'>Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Registro</a>
            </li>
            </ul>
        </div>
      )
}

export default NavbarRegistro
