import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

// const user = localStorage.getItem('user');
const UserContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

function UserProvider({children}){
    
    const [ user, setUser] = useLocalStorage('user', null);
    const [ patients, setPatients ] = useLocalStorage('patients', null);
    const [ drugs, setDrugs ] = useLocalStorage('drugs', null)
    
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            patients,
            setPatients, 
            drugs, 
            setDrugs
        }} >
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider