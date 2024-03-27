import {collection, getDocs, getDoc, doc, query, where} from 'firebase/firestore'
import {db} from '../firebase'

export async function getClasifiacion() {
    try{
        const categoryCollection = collection(db, 'Categorías');
        const  categoryDocs = await getDocs(categoryCollection);
        const categories = categoryDocs.docs.map((category) =>(category.data()));
        return(categories);
    } catch (error) {
        console.error('Error al obtener los datos de los clubes', error);
        return [];
    }
}


/*export async function getCategory(id) {
    try{
        const clubCollection = collection(db, 'clubes');
        const  clubDoc = await getDoc(doc(clubCollection, id));
        const club = clubDoc.data();
        return club;
    } catch (error) {
        console.error('Error al obtener los datos de los clubes', error);
        return [];
    }
}*/

export async function getAgrupacionesbyId() {
    try{
        const categoryCollection = collection(db, 'Categorías');
        const  categoryDocs = await getDocs(categoryCollection);
        const agrupacionesID = categoryDocs.docs.map((category) =>(category.agrupaciones));
        console.log(agrupacionesID)
        const q = query(collection(db, "Agrupaciones"), where("id", "==", agrupacionesID));
        const querySnapshot = await getDocs(q);
        const agrupaciones = querySnapshot.docs.map((agrupacion) =>(agrupacion.data()));
        console.log(agrupaciones);
    }catch (error){
        console.error('Error al obtener los datos de los clubes', error);
    }

}



/*
export async function getVideoGameById(titulo) {
    try{
        const gamesCollection = collection(db, 'juegos');
        const gamesDocs = await getDocs(gamesCollection, titulo);
        const games = gamesDocs.docs.map((club) =>(club.data()));
        return games;
    } catch (error) {
        console.error('Error al obtener los datos de los clubes', error);
        return [];
    }

}*/