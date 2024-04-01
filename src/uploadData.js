import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import groupsData from '../data/categoriaData.json';
import agrupacionesData from '../data/agrupacionesData.json';

// Function to upload groups data
async function uploadGroupsData() {
    const groupsCollection = collection(db, 'Groups');
    for (const group of groupsData) {
        await addDoc(groupsCollection, group);
    }
}

// Function to upload agrupations data
async function uploadAgrupacionesData() {
    const agrupacionesCollection = collection(db, 'Agrupations');
    for (const agrupation of agrupacionesData) {
        await addDoc(agrupacionesCollection, agrupation);
    }
}

// Call the functions to upload the data
uploadGroupsData();
uploadAgrupacionesData();