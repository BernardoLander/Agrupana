import React from 'react'
import Navbar from '../components/Navbar';
import Unimet from '../images/Unimet.jpg'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <section>
        <h1>EXPLOTA TUS HABILIDADES</h1>
        <h3>Y únete a nuestras agrupaciones</h3>
        <img src={Unimet} />
      </section>

    </div>
  )
}

export default HomePage
