import { createContext, useContext } from "react"


const UserContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

function UserProvider({children}){
    return (
        <UserContext.Provider>
            { children }
        </UserContext.Provider>
    )
}