import React from 'react'
import { useParams } from 'react-router-dom';
import agrupacionesData from '../data/agrupacionesData.json'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Comments from '../components/Comments';
import picvis from '../images/Vision.png'
import picmis from '../images/Mision.png'
import Carousel from '../components/Carousel';
import styles from './AgrupacionPage.module.css'

const AgrupacionPage = () => {
    const { agrupacionId } = useParams();
    // Buscar la agrupación por su ID
    const agrupacion = agrupacionesData.find(agrupacion => agrupacion.ID === String(agrupacionId));
  // Verifica si agrupacionesData es null o undefined antes de usarlo
  if (!agrupacion) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <Navbar/>
      <div >
        <h1>{agrupacion.nombre}</h1>
        <img src={agrupacion.logo}/>
        <section >
          <img  className={styles.frmulaSaeItem} src={agrupacion.imagen}/>
          <h2 >¿Quiénes Somos?</h2>
          <p>{agrupacion.somos}</p>
          <h2 > ¿Por qué pertenecer a Fórmula SAE?</h2>
          <p>{agrupacion.pertenecer}</p>
          <Carousel json={agrupacionesData[String(agrupacionId)]} picvis={picvis} picmis={picmis}/>

          <b>
            Experiencia de los Estudiantes
          </b>
          <Comments/>
        </section>
      </div>
      <Footer/>
     
    </div>
  );
}

export default AgrupacionPage
