import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'
import GroupPage from './pages/GroupPage';
import PerfilUsuario from './pages/PerfilUsuario';
import HomePage from './pages/HomePage';
import  Recuperar  from "./pages/Recuperar";

export const router = createBrowserRouter([

    {
        path: '/login',
        element: <Login/> 
    },
    {
        path: '/registro',
        element: <Registro/>
    },

    {
        path:'/',
        element:<HomePage/>

    },
    {
        path:'/perfil',
        element:<PerfilUsuario/>

    },
    {
        path:'/agrupaciones',
        element: <GroupPage/>

    },
    {
        path:'/cambiar',
        element: <Recuperar/> 
    }

//falta home
])