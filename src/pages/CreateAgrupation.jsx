import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreateAgrupation = () => {
    const [nombre, setNombre] = useState('');
    const [somos, setSomos] = useState('');
    const [pertenecer, setPertenecer] = useState('');
    const [mision, setMision] = useState('');
    const [vision, setVision] = useState('');
    const [group, setGroup] = useState('');
    const [groups, setGroups] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGroups = async () => {
            const groupsCollection = collection(db, 'Categoria');
            const groupDocs = await getDocs(groupsCollection);
            const groups = groupDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setGroups(groups);
        };

        fetchGroups();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();

        const docRef = await addDoc(collection(db, 'Agrupaciones'), {
            nombre,
            somos,
            pertenecer,
            mision,
            vision
        });

        const groupDoc = doc(db, 'Categoria', group);
        const groupData = await getDoc(groupDoc);
        const groupAgrupaciones = groupData.data().agrupaciones || [];

        await updateDoc(groupDoc, {
            agrupaciones: [...groupAgrupaciones, docRef.id]
        });

        setNombre('');
        setSomos('');
        setPertenecer('');
        setMision('');
        setVision('');
        setGroup('');

        // Redirect to the GroupPage
        navigate('/agrupaciones');
    };

    return (
        <div>
            <h1>Create Agrupation Page</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
                <textarea value={somos} onChange={(e) => setSomos(e.target.value)} placeholder="Quienes Somos?" required />
                <textarea value={pertenecer} onChange={(e) => setPertenecer(e.target.value)} placeholder="Por qué pertenecer?" required />
                <textarea value={mision} onChange={(e) => setMision(e.target.value)} placeholder="Misión" required />
                <textarea value={vision} onChange={(e) => setVision(e.target.value)} placeholder="Visión" required />
                <select value={group} onChange={(e) => setGroup(e.target.value)} required>
                    <option value="">Select a group</option>
                    {groups.map((group) => (
                        <option key={group.id} value={group.id}>{group.nombre}</option>
                    ))}
                </select>
                <button type="submit">Create Agrupation</button>
            </form>
        </div>
    );
};

export default CreateAgrupation;