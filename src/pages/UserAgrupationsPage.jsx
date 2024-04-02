import React, { useState, useEffect } from 'react';
import { useUser } from "../context/Usuariocontext";
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';
import styles from './UserAgrupationsPage.module.css';

const UserAgrupationsPage = () => {
    const { user } = useUser();
    const [agrupaciones, setAgrupaciones] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAgrupations = async () => {
            const userDoc = await getDoc(doc(db, 'Usuarios', user.uid));
            const userData = userDoc.data();
            const agrupacionesData = await Promise.all(userData.agrupaciones.map(async (agrupacionId) => {
                const agrupacionDoc = await getDoc(doc(db, 'Agrupaciones', agrupacionId));
                return agrupacionDoc.data().nombre; // return the name of the agrupation
            }));
            setAgrupaciones(agrupacionesData);
        };

        fetchAgrupations();
    }, [user]);

    const handleBackClick = () => {
        navigate('/perfil');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mis Agrupaciones</h1>
            <ul className={styles.agrupationList}>
                {agrupaciones.map((agrupacionName, index) => (
                    <li key={index} className={styles.agrupationItem}>{agrupacionName}</li>
                ))}
            </ul>
            <button className={styles.backButton} onClick={handleBackClick}>Back to Profile</button>
        </div>
    );
}

export default UserAgrupationsPage;