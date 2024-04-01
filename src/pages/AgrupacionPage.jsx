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
    const pagesDonacion = async () => {
        navigate('/donacion')
      }

    return (
        <div>
              <Navbar/>
            <div>
                <h1 className='groupName'>{agrupacion.nombre}</h1>
                <img src={agrupacion.logo} className='logo'/>
                <h2 className='whoIs'>Quienes Somos?</h2>
                <p className='whoIstext'>{agrupacion.somos}</p>
                <img src={agrupacion.imagen} className='picture'/>
                <h2 className='why'>Por qué pertenecer a {agrupacion.nombre}?</h2>
                <p className='whyText'>{agrupacion.pertenecer}</p>
                <style jsx>{`
                    .container {
                    text-align: center;
                    }
                    h1, h2, p {
                    font-family: sans-serif;
                    font-size: 16px;
                    line-height: 1.5;
                    }
                    h1 {
                    margin-top: 0;
                    }

                    h2 {
                    margin-top: 20px;
                    }

                    p {
                    margin-top: 10px;
                    }
                    img {
                    display: block;
                    margin: 0 auto;
                    }

                    .groupName {
                    font-size: 24px;
                    }

                    .logo {
                    width: 200px;
                    }

                    .whoIs {
                    margin-top: 40px;
                    }

                    .whoIstext {
                    width: 80%;
                    margin: 0 auto;
                    }

                    .picture {
                    width: 400px;
                    margin-top: 40px;
                    }

                    .why {
                    margin-top: 40px;
                    }

                    .whyText {
                    width: 80%;
                    margin: 0 auto;
                    }
                `}</style>
                <Carousel json={agrupacion}
                />
                <GroupInfo group = {agrupacion}/>
        
                <div>
                    <h2>Experiencia de los Estudiantes</h2>
                    <button type='button' onClick={pagesDonacion}>Hacer una donacion</button>
                    <Comments/>
            </div>
            <Footer jsx="true" />
            </div>
        </div>
    );
}

export default AgrupacionPage;
