import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';
import PerfilUsuario from './pages/PerfilUsuario';
import CreateAgrupation from './pages/CreateAgrupation';


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registro" component={Registro} />
                <Route path="/perfil" component={PerfilUsuario} />
                <Route path="/create-agrupation" component={CreateAgrupation} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
}

export default App;