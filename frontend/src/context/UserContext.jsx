import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

const user = localStorage.getItem('user');
const UserContext = createContext();
// const [ user, setUser] = useLocalStorage('user', {});

export function useUser(){
    return useContext(UserContext);
}

function UserProvider({children}){

    
    return (
        <UserContext.Provider value={{
            user
        }} >
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider