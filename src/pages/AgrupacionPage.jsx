import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Comments from '../components/Comments';
import picvis from '../images/Vision.png'
import picmis from '../images/Mision.png'
import Carousel from '../components/Carousel';
import styles from './AgrupacionPage.module.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // make sure to import your firebase instance

const AgrupacionPage = () => {
    const { agrupacionId } = useParams();
    const [agrupacion, setAgrupacion] = useState(null);

    useEffect(() => {
        const fetchAgrupacion = async () => {
            const agrupacionDoc = doc(db, 'Agrupaciones', agrupacionId);
            const agrupacionData = await getDoc(agrupacionDoc);
            if (agrupacionData.exists) {
                setAgrupacion(agrupacionData.data());
            } else {
                console.log("No such document!");
            }
        };

        fetchAgrupacion();
    }, [agrupacionId]);

    if (!agrupacion) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar/>
            <div>
                <h1>{agrupacion.nombre}</h1>
                <h2>Quienes Somos?</h2>
                <p>{agrupacion.somos}</p>
                <h2>Por qué pertenecer a {agrupacion.nombre}?</h2>
                <p>{agrupacion.pertenecer}</p>
                <p>Misión: {agrupacion.mision}</p>
                <p>Visión: {agrupacion.vision}</p>
            </div>
            <div>
                <h2>Experiencia de los Estudiantes</h2>
                <Comments/>
            </div>
            <Footer jsx="true" />
        </div>
    );
}

export default AgrupacionPage