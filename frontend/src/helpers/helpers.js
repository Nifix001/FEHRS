import axios from "axios";


axios.defaults.withCredentials = true;

export default async function processLogin(email, password, setLoading, setToken, e, history, user, setUser, setPatients, setDrugs, setPrescriptions ) {
    e.preventDefault();
    setTimeout(() => {
        setLoading(true);
    }, 1000);
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
            getPatients( csrfToken, setPatients);
            getDrugs( csrfToken, setDrugs  );
            getPrescriptions( csrfToken, setPrescriptions  );
        } else {
            console.error('XSRF-TOKEN cookie not found in response headers');
        }
        
    } catch (error) {
        console.error(error);
    } finally {
        setTimeout(() => {
            setLoading(false);
            history('/user');
        }, 12000);
    }
}

export async function getPatients( csrfToken, setPatients) {
    try {
        const response = await axios.get('http://localhost:8000/api/patient', {
            headers: {
                Accept: 'application/json',
                'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
                // 'Referer': '127.0.0.1:8000'
            }
        })
        const patients = response.data.patient_record;
        setPatients(patients);
    } catch( error ){
        console.error( error );
    }
}

export async function getDrugs( csrfToken, setDrugs) {
    try {
        const response = await axios.get('http://localhost:8000/api/drugs', {
            headers: {
                Accept: 'application/json',
                'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
                // 'Referer': '127.0.0.1:8000'
            }
        })
        const drugs = response.data.details;
        setDrugs(drugs);
    } catch( error ){
        console.error( error );
    }
}

export async function getPrescriptions( csrfToken, setPrescriptions) {
    try {
        const response = await axios.get('http://localhost:8000/api/prescription', {
            headers: {
                Accept: 'application/json',
                'X-XSRF-TOKEN': decodeURIComponent(csrfToken),
                // 'Referer': '127.0.0.1:8000'
            }
        })
        setPrescriptions(response.data.records);
    } catch( error ){
        console.error( error );
    }
}


export async function deletePatient(setPatients ,id, token){
    try{
        const list = JSON.parse(localStorage.getItem('patients'));
        const filteredList = list.filter(item => item.id !== id);
    
        setPatients(filteredList);
        await axios.delete(`http://localhost:8000/api/patient/${id}`,{
            headers: {
                Accept: 'application/json',
                // 'X-XSRF-TOKEN': decodeURIComponent(token),
                'Referer': '127.0.0.1:8000'
            }})
    }
    catch(error){
        console.error(error);
    }
}