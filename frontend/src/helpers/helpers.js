import { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { useUser } from "../context/UserContext";
import { redirect, useLocation } from "react-router-dom";

// axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true;

export default async function processLogin(email, password, setLoading, setToken, e, history, user, setUser) {
    e.preventDefault();
    // const { user } = useUser();


    try {
        const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
        // console.log(response);      
            if (response) {
                // Get the CSRF token from the cookies
                // console.log(document.cookie);
                const csrfToken = document.cookie.split('; ')
                                    .find(row => row.startsWith('XSRF-TOKEN='))
                                    .split('=')[1];
                // console.log('CSRF Token:', csrfToken);
  
            // Set the CSRF token in state or wherever you need it
            setToken(csrfToken);
            
            // Continue with your login logic using the obtained CSRF token
            const loginResponse = await axios.post('http://localhost:8000/f/login', {
                "email": email,
                "password": password
            }
            , {
                headers: {
                    Accept: 'application/json',
                    'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
                    // origin: 'localhost:8000'
                }
            }
            );
            console.log(loginResponse);
            // localStorage.setItem('user', JSON.stringify(loginResponse.data));
            !user && setUser(loginResponse.data);
            history('/user');
        } else {
            console.error('XSRF-TOKEN cookie not found in response headers');
        }
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}