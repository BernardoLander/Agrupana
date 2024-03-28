import { collection,addDoc , query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut , createUserWithEmailAndPassword , signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup , deleteUser, FacebookAuthProvider} from "firebase/auth";
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
        await signInWithEmailAndPassword(auth, correo, password)
        
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
async function buscarCorreo() {
    const user = auth.currentUser
    const usuarioRef = collection(db, 'Usuarios')
    const q = query(usuarioRef , where('correo','==', user.email))
    const querySnapshot = await getDocs(q)
    if(!querySnapshot.empty){
      alert('El correo ya esta registrado')
      return
    }
    else{
        const nombreCompleto = user.displayName.split(' ')
        const correo = user.email
        const nombre = nombreCompleto[0]
        console.log(nombre)
        const apellido = nombreCompleto[1]
        const password = ' '
        crearUsuario({nombre , apellido, correo , password})
        console.log('registrado')
    }


}

export const signInGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    responseGoogle.setCustomParameters({ hd: '@correo.unimet.edu.ve' });
    try {
        const result = await signInWithPopup(auth, responseGoogle);
        const user = result.user;
        console.log('USUARIO:', user.email);
    
        const correo = user.email;
        const estudiante = "@correo.unimet.edu.ve";
        const admin = "@unimet.edu.ve";
        switch (true) {
            case correo.includes(estudiante):
                buscarCorreo()
                break;
            case correo.includes(admin):
                break;

        
            default:
                alert('El correo no pertenece a la UNIMET')
                deleteUser(auth.currentUser)
                logOut();
                break;
        }
    } catch (error) {
      console.log('Error', error);
    }
};

export const signInFacebook = async ()=>{
    const responseFacebook = new FacebookAuthProvider()
    // responseFacebook.getCustomParameters({hd: '@correo.unimet.edu.ve'})
    await signInWithPopup(auth ,responseFacebook)
        .then(result => {
            console.log (result)
            console.log('iniciando con facebook')

        })
        .catch(err => {
            console.log(err)
        })

}

