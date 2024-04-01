import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'
import GroupPage from './pages/GroupPage';
import PerfilUsuario from './pages/PerfilUsuario';
import HomePage from './pages/HomePage';
import AdditionalInfo from './pages/additional-info';
import AgrupacionPage from './pages/AgrupacionPage';
import CreateAgrupation from './pages/CreateAgrupation';
import CreateGroup from "./pages/CreateGroup.jsx";
import EditAgrupation from "./pages/EditAgrupation.jsx";

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
        path:'/additional-info',
        element:<AdditionalInfo/>
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
        path: '/agrupacion/:agrupacionId',
        element: <AgrupacionPage/>
    },
    {
        path: '/create-agrupation',
        element: <CreateAgrupation/>
    },
    {
        path: '/create-group',
        element: <CreateGroup/>
    },
    {
        path: '/edit-agrupation/:agrupacionId',
        element: <EditAgrupation/>
    }


])