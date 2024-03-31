import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import PhotoCard from '../components/PhotoCard';
import Footer from '../components/Footer';

import homejson from '../assets/homepageCarouselInfo.json'
import Unimet from '../images/Unimet.jpg'
import dj from '../images/dj.png'
import Metromun from '../images/Metromun.png'



const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <section className="container">
      <style jsx>{`
        .container {
          display: flex;
          margin-top: 91px;
          width: 100%;
          max-width: 1203px;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
        }
        
        .title {
          color: #000;
          text-transform: uppercase;
          font: 700 72px Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
        }
        
        .subtitle {
          color: #000;
          margin-top: 22px;
          font: 400 32px Roboto Condensed, -apple-system, Roboto, Helvetica, sans-serif;
        }
        
        .hero-image {
          aspect-ratio: 2.94;
          object-fit: cover;
          width: 100%;
          margin-top: 57px;
        }
        
        @media (max-width: 991px) {
          .container {
            margin-top: 40px;
          }
          
          .title {
            font-size: 40px;
          }
          
          .hero-image {
            margin-top: 40px;
          }
        }
      `}</style>
        <h1 className="title">Explota tus Habilidades</h1>
        <p className="subtitle">Y únete a nuestras agrupaciones</p>
        <img src={Unimet} className="hero-image" />
        
        <PhotoCard
          title="Descubre quién eres"
          description="Encuentra tus habilidades, abre tu círculo social y sobretodo diviértete al máximo. No te limites, puedes pertenecer a más de una agrupación"
          image={dj}
          btnMessage={"REGÍSTRATE GRATIS"}
          link = '/registro'
        />
        
        <PhotoCard
          title="Únete a la agrupación de tus sueños"
          description="¿Aún no formas parte de un grupo estudiantil? Regístrate en la agrupación de tu preferencia. Selecciona la categoría y déjate llevar por la experencia."
          image={Metromun}
          isReversed
          btnMessage={"VER AGRUPACIONES"}
          link = '/agrupaciones'
        />
      </section>
      <Carousel
      json={homejson}/>
      <Footer/>

    </div>
  )
}

export default HomePage
