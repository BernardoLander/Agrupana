import {createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupPage from './pages/GroupPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export const router = createBrowserRouter([

    {
        path: '/',
        element: <HomePage/>

    },
    {
        path: '/agrupaciones',
        element: <GroupPage/>
    },
    {
        path: '/inicio_sesion',
        element: <Login/>
    },
    {
        path: '/registrarse',
        element: <SignUp/>
    },

])