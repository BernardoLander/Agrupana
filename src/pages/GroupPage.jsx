import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase'; // make sure to import your firebase instance
import { useUser } from '../context/Usuariocontext';
import PhotoCard from '../components/PhotoCard'
const GroupPage = () => {
    const { user } = useUser();
    const [grupoArray, setGrupoArray] = useState([]);
    const [searchTerm, setSearchTerm]= useState('');
    const [searchResults, setSearchResults]= useState([]);

    const fetchAgrupacionName = async (agrupacionId) => {
        const agrupacionDoc = doc(db, 'Agrupaciones', agrupacionId);
        const agrupacionData = await getDoc(agrupacionDoc);
        if (agrupacionData.exists()) {
            return agrupacionData.data().nombre;
        } else {
            console.log(`No document exists with the id ${agrupacionId}`);
            return null;
        }
    };

    useEffect(() => {
        const fetchGroups = async () => {
            const groupsCollection = collection(db, 'Categoria');
            const groupDocs = await getDocs(groupsCollection);
            const groups = await Promise.all(groupDocs.docs.map(async doc => {
                const data = doc.data();
                const agrupacionNames = await Promise.all(data.agrupaciones.map(fetchAgrupacionName));
                const validAgrupacionNames = agrupacionNames.filter(name => name !== null);
                const validAgrupaciones = data.agrupaciones.slice(0, validAgrupacionNames.length);
                return { id: doc.id, ...data, agrupaciones: validAgrupaciones, agrupacionNames: validAgrupacionNames };
            }));
            setGrupoArray(groups);
            setSearchResults(groups);
        };

        fetchGroups();
    }, []);

    const handleSearch = () => {
        const results = grupoArray.filter(grupo =>
            grupo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }

    return (
        <div>
            <div>
            <Navbar/>
            </div>

            <h1>Agrupaciones Estudiantiles</h1>
            <div>
                <input
                    type='text'
                    placeholder='Buscar Agrupación Estudiantil'
                    value = {searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
                {searchResults.map((grupo, index)=>
                    <div key= {index}>
                        <PhotoCard 
                            title={grupo.nombre}
                            description = {grupo.agrupacionNames.map((name, index) =>
                                <li key={`${grupo.ID}-${index}`}>
                                    <Link to={`/agrupacion/${grupo.agrupaciones[index]}`}>{name}</Link>
                                </li>
                            )}
                            isReversed={grupo.ID % 2 === 0}
                            image = {grupo.imagen}
                            btnMessage=''
                            link = ''
                        />
                        
                    </div>
                )}
            </div>
            {user && user.role === 'admin' && (
                <Link to="/create-agrupation"><button>Create Agrupation</button></Link>
            )}
        </div>
    );
}

export default GroupPage