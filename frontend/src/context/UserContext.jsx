import { createContext, useContext, useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

// const user = localStorage.getItem('user');
const UserContext = createContext();

export function useUser(){
    return useContext(UserContext);
}

function UserProvider({children}){
    
    const [ user, setUser] = useLocalStorage('user', null);
    const [ patients, setPatients ] = useLocalStorage('patients', null);
    const [ drugs, setDrugs ] = useLocalStorage('drugs', null);
    const [ prescriptions, setPrescriptions ] = useLocalStorage('prescriptions', null);
    const [ token , setToken]  = useState('');

    async function deletePatient(id){
        // setPatients(list => {
        //     return list.filter(item => item.id !== id)
        // })
        // await axios.post(`http://localhost:8000/api/patient/${id}`,{
        //     headers: {
        //         Accept: 'application/json',
        //         'X-XSRF-TOKEN': decodeURIComponent(token),
        //     }})
    }

    
    return (
        <UserContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
            patients,
            setPatients, 
            drugs, 
            setDrugs,
            prescriptions,
            setPrescriptions,
            deletePatient
        }} >
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider