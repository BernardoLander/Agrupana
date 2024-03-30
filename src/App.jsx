import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import AuthNavbar from './components/AuthNavbar'
import { logOut } from './Controllers/Usuario'
import { useUser } from './context/Usuariocontext'
import { useLocation } from 'react-router-dom'
import './App.css'

function App() {
    const {user,setUser} = useUser()
    const location = useLocation()
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <div>
            {currentPath === '/login' || currentPath === '/registro' ? <AuthNavbar /> : <Navbar />}
            <form >
                <button type='button' onClick={logOut}>Cerra sesion</button>
            </form>
        </div>
    )
}

export default App