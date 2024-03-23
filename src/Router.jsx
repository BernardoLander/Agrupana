import {createBrowserRouter} from 'react-router-dom'
import Login from './Componentes/Login'
import Registro from './Componentes/Registro'
import App from "./App";

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
        element:<App/>

    }

])