import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import styles from './EditAgrupation.module.css';

const EditAgrupation = () => {
    const { agrupacionId } = useParams();
    const [nombre, setNombre] = useState('');
    const [somos, setSomos] = useState('');
    const [pertenecer, setPertenecer] = useState('');
    const [mision, setMision] = useState('');
    const [vision, setVision] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAgrupation = async () => {
            const agrupationDoc = doc(db, 'Agrupaciones', agrupacionId);
            const agrupationData = await getDoc(agrupationDoc);
            if (agrupationData.exists()) {
                const data = agrupationData.data();
                setNombre(data.nombre);
                setSomos(data.somos);
                setPertenecer(data.pertenecer);
                setMision(data.mision);
                setVision(data.vision);
            } else {
                console.log(`No document exists with the id ${agrupacionId}`);
            }
        };

        fetchAgrupation();
    }, [agrupacionId]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const agrupationDoc = doc(db, 'Agrupaciones', agrupacionId);
        await updateDoc(agrupationDoc, {
            nombre,
            somos,
            pertenecer,
            mision,
            vision
        });

        // Redirect to the AgrupationPage
        navigate(`/agrupacion/${agrupacionId}`);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Edit Agrupation</h1>
            <form onSubmit={onSubmit}>
                <input className={styles.inputField} type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
                <textarea className={styles.textAreaField} value={somos} onChange={(e) => setSomos(e.target.value)} placeholder="Quienes Somos?" required />
                <textarea className={styles.textAreaField} value={pertenecer} onChange={(e) => setPertenecer(e.target.value)} placeholder="Por qué pertenecer?" required />
                <textarea className={styles.textAreaField} value={mision} onChange={(e) => setMision(e.target.value)} placeholder="Misión" required />
                <textarea className={styles.textAreaField} value={vision} onChange={(e) => setVision(e.target.value)} placeholder="Visión" required />
                <button className={styles.saveButton} type="submit">Update Agrupation</button>
            </form>
        </div>
    );
};

export default EditAgrupation;