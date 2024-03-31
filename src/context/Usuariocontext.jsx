import { onAuthStateChanged } from "firebase/auth";
import { useContext , useState , useEffect , createContext   } from "react";
import { auth } from "../firebase";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const UserContext = createContext()
export const useUser =()=> useContext(UserContext)

export function UserContextProvider({children}){
    const [user , setUser] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const userDoc = await getDoc(doc(db, 'Usuarios', firebaseUser.uid));
                const userData = userDoc.data();
                setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    role: userData.role, // Add role to user state
                });
            } else {
                setUser(null);
            }
        });
    }, []);


    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
    
}
