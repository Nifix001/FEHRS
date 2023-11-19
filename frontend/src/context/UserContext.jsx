import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

// const user = localStorage.getItem('user');
const UserContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

function UserProvider({children}){
    
    const [ user, setUser] = useLocalStorage('user', null);
    
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }} >
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider