import { useState } from "react";
import axios from "axios";

// axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true;


export default async function processLogin(email, password, setLoading, setToken, e) {
    e.preventDefault();

    try {
        const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');

        console.log(response);
        
    //   // Check if 'set-cookie' is present in the response headers
    //   if (response.headers && response.headers['set-cookie']) {
    //     // Find the 'XSRF-TOKEN' cookie
    //     const xsrfCookie = response.headers['set-cookie']
    //         .find(cookie => cookie.startsWith('XSRF-TOKEN'));

    //     if (xsrfCookie) {
    //         // Extract the CSRF token value
    //         const csrfToken = xsrfCookie.split('=')[1].split(';')[0];

    //         console.log(csrfToken);
        
            // Check if the CSRF request was successful (status 200)
            if (response) {
                // Get the CSRF token from the cookies
                console.log(document.cookie);
                const csrfToken = document.cookie.split('; ')
                                    .find(row => row.startsWith('XSRF-TOKEN='))
                                    .split('=')[1];
                console.log('CSRF Token:', csrfToken);
  
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
        } else {
            console.error('XSRF-TOKEN cookie not found in response headers');
        }
    // } else {
    //     console.error('No set-cookie header found in response');
    // }
} catch (error) {
    console.error(error);
} finally {
    setLoading(false);
}
}