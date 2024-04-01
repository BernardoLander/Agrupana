import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Comments from '../components/Comments';
import picvis from '../images/Vision.png'
import picmis from '../images/Mision.png'
import Carousel from '../components/Carousel';
import styles from './AgrupacionPage.module.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // make sure to import your firebase instance
import GroupInfo from '../components/GroupInfo';



const AgrupacionPage = () => {
  const navigate = useNavigate();
    const { agrupacionId } = useParams();
    const [agrupacion, setAgrupation] = useState(null); // Ensure setAgrupation is defined here

    useEffect(() => {
        const fetchAgrupation = async () => {
            const agrupationDoc = doc(db, 'Agrupaciones', agrupacionId);
            const agrupationData = await getDoc(agrupationDoc);
            if (agrupationData.exists()) {
                console.log('Fetched data:', agrupationData.data()); // Log the fetched data
                setAgrupation(agrupationData.data()); // Ensure setAgrupation is used here
            } else {
                console.log(`No document exists with the id ${agrupacionId}`);
                setAgrupation(null); // Ensure setAgrupation is used here
            }
        };

        fetchAgrupation().catch(error => {
            console.log('Error fetching agrupation:', error); // Log any errors that occur
        });
    }, [agrupacionId]);

    if (!agrupacion) {
        return <p>Loading...</p>;
    }

    return (
        <div>
              <Navbar/>
            <div>
                <h1>{agrupacion.nombre}</h1>
                <img src={agrupacion.logo}/>
                <h2>Quienes Somos?</h2>
                <p>{agrupacion.somos}</p>
                <img src={agrupacion.imagen}/>
                <h2>Por qué pertenecer a {agrupacion.nombre}?</h2>
                <p>{agrupacion.pertenecer}</p>
                <Carousel json={agrupacion}
                />
                <GroupInfo group = {agrupacion}/>
        
                <div>
                    <h2>Experiencia de los Estudiantes</h2>
                    <Comments/>
            </div>
            <Footer jsx="true" />
            </div>
        </div>
    );
}

export default AgrupacionPage;
