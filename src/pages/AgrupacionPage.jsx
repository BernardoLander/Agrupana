import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import agrupacionesData from '../data/agrupacionesData.json'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Comments from '../components/Comments';

const AgrupacionPage = () => {
  const navigate = useNavigate();
    const { agrupacionId } = useParams();
    // Buscar la agrupación por su ID
    const agrupacion = agrupacionesData.find(agrupacion => agrupacion.ID === String(agrupacionId));
  // Verifica si agrupacionesData es null o undefined antes de usarlo
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
          <h1>{agrupacion.nombre}</h1>
          <img src={agrupacion.logo}/>
          <h2>Quienes Somos?</h2>
          <p>{agrupacion.somos}</p>
          <img src={agrupacion.imagen}/>
          <h2>Por qué pertenecer a {agrupacion.nombre}?</h2>
          <p>{agrupacion.pertenecer}</p>
          <p>Misión: {agrupacion.mision}</p>
          <p>Visión: {agrupacion.vision}</p>
        </div>
        <div>
            <h2>Experiencia de los Estudiantes</h2>
            <button type='button' onClick={pagesDonacion}>Hacer una donacion</button>
            <Comments/>
        </div>
        <Footer/>
       
    </div>
  );
}

export default AgrupacionPage
