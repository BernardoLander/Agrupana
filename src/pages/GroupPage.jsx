import { useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import {getClasifiacion} from '../Controllers/Agrupacion'
import {getAgrupacionesbyId, buscaragrupacion} from '../Controllers/Agrupacion'


const GroupPage = () => {
  const [category, setCategory] = useState(null);  
  const [group, setGroup] = useState(null);
  useEffect(() => {
    const load = async () => {
      const category = await getClasifiacion();
      console.log(category)
      setCategory(category);
      buscaragrupacion(category)
      setGroup(group)
      
    };
    load();
  }, [])


  // useEffect(() => {
  //   const load = async () => {
  //     const group = await getAgrupacionesbyId();
  //     setGroup(group);
  //   };
  //   load();
  // }, [])
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <h1>Agrupaciones Estudiantiles</h1>
        <div style= {{display: 'flex', flexDirection: 'column', gap: 62}}> 
            {category?.map(category => (
              <div key={category.id}>
                {/*
                <h2>
                  <Link to={`/clubes/${club.id}`}>{club.nombre}</Link>
                </h2>
            */}
                
                <h3>{category.nombre}</h3>
                <p>{category.agrupaciones}</p>
              </div>
            ))}
            <div>{group}</div>
        </div>

    </div>
  )
}

export default GroupPage
