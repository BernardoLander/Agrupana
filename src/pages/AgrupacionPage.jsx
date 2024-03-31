import React from 'react'
import { useParams } from 'react-router-dom';
import agrupacionesData from '../data/agrupacionesData.json'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
        <div>
          <h1>{agrupacion.nombre}</h1>
          <h2>Quienes Somos?</h2>
          <p>{agrupacion.somos}</p>
          <h2>Por qué pertenecer a {agrupacion.nombre}?</h2>
          <p>{agrupacion.pertenecer}</p>
          <p>Misión: {agrupacion.mision}</p>
          <p>Visión: {agrupacion.vision}</p>
        </div>
        <Footer/>
       
    </div>
  );
}

export default AgrupacionPage
