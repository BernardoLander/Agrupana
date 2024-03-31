import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLogin = () => {
  return (
    <div>
      <ul className="nav nav-underline">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Iniciar Sesión</a>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to='/registro'>Registro</Link>
        </li>
        </ul>
    </div>
  )
}

export default NavbarLogin

