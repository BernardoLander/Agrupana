import { collection,addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";

export async function crearUsuario({nombre , apellido , correo , password}) {
    const userCollection =collection(db ,'Usuarios')
    const data = {nombre , apellido , correo , password}
    await addDoc (userCollection, data )
}