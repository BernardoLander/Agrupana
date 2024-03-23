import { useContext , useState , useEffect , createContext   } from "react";

const UserContext = createContext()
export const useUser =()=> useContext(UserContext)

export function UserContextProvider({children}){
    const [user , setUser] = useState('')
    console.log(user,"hola")
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
    
}


// export function useUser(){
//     return useContext(UserContext)
// }