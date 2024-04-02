import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import styles from './CreateGroup.module.css';


const CreateGroup = () => {
    const [nombre, setNombre] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, 'Categoria'), {
            nombre,
            agrupaciones: []
        });

        setNombre('');

        // Redirect to the GroupPage
        navigate('/agrupaciones');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create Group Page</h1>
            <form onSubmit={onSubmit}>
                <input className={styles.inputField} type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
                <button className={styles.createButton} type="submit">Create Group</button>
            </form>
        </div>
    );
};

export default CreateGroup;