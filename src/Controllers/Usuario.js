import { collection,addDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { useUser } from "../context/Usuariocontext";



export async function crearUsuario({nombre , apellido , correo , password}) {
    const userCollection =collection(db ,'Usuarios')
    const data = {nombre , apellido , correo , password}
    await addDoc (userCollection, data )
}
export async function registrarAuth(correo , password){
    try {
        await createUserWithEmailAndPassword(auth, correo,password)
        console.log('Usuario registrado con exito')
        
    } catch (error) {
        console.log('Error al registrar al usuario')
        
    }
}

export async function logearAuth(correo, password){
    try {
        await signInWithEmailAndPassword(auth, correo, password)
        console.log('se pudo logear auth')

    } catch (error) {
        console.log('No se pudo logear auth')
    }
}

export async function logOut(){
    await signOut(auth);
    console.log("Sesion cerrada")

}
