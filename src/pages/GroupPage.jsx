import { useState } from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import agrupacionesData from '../data/agrupacionesData.json'
import categoriaData from'../data/categoriaData.json'
import Footer from '../components/Footer'
import PhotoCard from '../components/PhotoCard'

const GroupPage = () => {
  const grupoArray = Object.values(categoriaData);
  const [searchTerm, setSearchTerm]= useState('');
  const [searchResults, setSearchResults]= useState(grupoArray);
  const handleSearch = () => {
      const results = grupoArray.filter(grupo => 
          grupo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);

  }

  return (
    <div>
  
        <Navbar/>
        <h1>Agrupaciones Estudiantiles</h1>
        <div>
          <input 
            type='text'
            placeholder='Buscar Agrupación Estudiantil'
            value = {searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
          {searchResults.map((grupo)=>
            <div key= {grupo.ID}>
              <h3>{grupo.nombre}</h3>
              <ul>
                {grupo.agrupaciones.map(agrupacionId => {
                  const agrupacion = agrupacionesData.find(agrupacion => agrupacion.ID === agrupacionId);
                  return <li key={agrupacionId}>
                    <Link to={`/agrupacion/${agrupacionId}`}>{agrupacion ? agrupacion.nombre : 'Agrupación no encontrada'}</Link>
                    
                    </li>;
                })}
    
              </ul>
            </div>
          )}
        </div>
       <Footer></Footer>        
  
    </div>
  )
}

export default GroupPage
