import React, { useState, useEffect } from 'react';
import { useUser } from "../context/Usuariocontext";
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';

const UserAgrupationsPage = () => {
    const { user } = useUser();
    const [agrupaciones, setAgrupaciones] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAgrupations = async () => {
            const userDoc = await getDoc(doc(db, 'Usuarios', user.uid));
            const userData = userDoc.data();
            setAgrupaciones(userData.agrupaciones);
        };

        fetchAgrupations();
    }, [user]);

    const handleBackClick = () => {
        navigate('/perfil');
    };

    return (
        <div>
            <h1>Mis Agrupaciones</h1>
            <ul>
                {agrupaciones.map((agrupacionId, index) => (
                    <li key={index}>{agrupacionId}</li>
                ))}
            </ul>
            <button onClick={handleBackClick}>Back to Profile</button>
        </div>
    );
}

export default UserAgrupationsPage;