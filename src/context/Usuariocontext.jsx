import { onAuthStateChanged } from "firebase/auth";
import { useContext , useState , useEffect , createContext   } from "react";
import { auth } from "../firebase";

const UserContext = createContext()
export const useUser =()=> useContext(UserContext)

export function UserContextProvider({children}){
    const [user , setUser] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            console.log(user!==null ? 'Usuario loggeado':'Usuario no loggeado')
            setUser(user)
        });
    },[])
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
    
}
