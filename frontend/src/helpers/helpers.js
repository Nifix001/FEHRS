import axios from "axios";


axios.defaults.withCredentials = true;

export default async function processLogin(email, password, setLoading, token, setToken, e, history, user, setUser, setPatients, setDrugs ) {
    e.preventDefault();

    try {
        const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');

        if (response) {
                // Get the CSRF token from the cookies
                const csrfToken = document.cookie.split('; ')
                                    .find(row => row.startsWith('XSRF-TOKEN='))
                                    .split('=')[1];

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
                }
            }
            );
            // console.log(loginResponse);
            !user && setUser(loginResponse.data);
            history('/user');
            getPatients( csrfToken, setPatients);
            getDrugs( csrfToken, setDrugs  )
        } else {
            console.error('XSRF-TOKEN cookie not found in response headers');
        }
        
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
}

export async function getPatients( csrfToken, setPatients) {
    // e.preventDefault();

    try {
        const response = await axios.get('http://localhost:8000/api/patient', {
            headers: {
                Accept: 'application/json',
                'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
                // 'Referer': '127.0.0.1:8000'
            }
        })
        const patients = response.data.patient_record;
        // localStorage.setItem("patients", JSON.stringify(patients))
        setPatients(patients)
    } catch( error ){
        console.error( error );
    }
}

export async function getDrugs( csrfToken, setPatients) {
    // e.preventDefault();

    try {
        const response = await axios.get('http://localhost:8000/api/drugs', {
            headers: {
                Accept: 'application/json',
                'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
                // 'Referer': '127.0.0.1:8000'
            }
        })
        const patients = response.data.patient_record;
        // localStorage.setItem("patients", JSON.stringify(patients))
        setPatients(patients)
    } catch( error ){
        console.error( error );
    }
}