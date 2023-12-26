import axios from "axios";


axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;


export default async function processLogin(email, password, setLoading, setToken, e, history, user, setUser, setPatients, setDrugs, setPrescriptions, error, setError ) {
    e.preventDefault();
    setTimeout(() => {
        setLoading(true);
    }, 500);
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
            !user && !error && setUser(loginResponse.data);
            if(loginResponse.data.role_id === 2  ){
                getPatients( csrfToken, setPatients);
                getPrescriptions( csrfToken, setPrescriptions  );
                getDrugs( csrfToken, setDrugs  );
            }else if(loginResponse.data.role_id === 4){
                getPatients( csrfToken, setPatients);
                getPrescriptions( csrfToken, setPrescriptions  );
                setDrugs( [] );
            } else if(loginResponse.data.role_id === 3){
                getDrugs( csrfToken, setDrugs  );
                setPatients([]);
                setPrescriptions([]);
            } else{
                console.log("Who be this!!!");
            }
        } else {
            console.error('XSRF-TOKEN cookie not found in response headers');
        }

        if (user) {
            setTimeout(() => {
                setLoading(false);
                history('/user');
            }, 5000);
        } else {
            console.error(error);
            throw Error('incorrect details')
        }
        
    } catch (error) {
        console.error(error);
        setError( "Incorrect username or password. Please fill correct details" );
        setLoading(false);
    } 
    // finally {

    // }
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




export async function addPatient(setPatients, data){
    try{
        const list = JSON.parse(localStorage.getItem('patients'));
        const newPatient = {
            'id': list.length + 1,
            'firstname': data.firstname,
            'middlename': data.middlename,
            'lastname': data.lastname,
            'email': data.email,
            'matric_no': data.matric_no,
            'phone_no': data.phone_no,
            'prescriptions': []
        }
        setPatients([...list, newPatient])
        await axios.post('http://localhost:8000/api/patient', data)   

    } catch(error){
        console.error(error);
    }
}

export async function editPatient(setPatients, data, token){
    try{
        const list = JSON.parse(localStorage.getItem('patients'));
        const filteredList = list.filter(item => item.id !== data.id);
        const editedPatient = {
            'id': data.id,
            'firstname': data.firstname,
            'middlename': data.middlename,
            'lastname': data.lastname,
            'email': data.email,
            'matric_no': data.matric_no,
            'phone_no': data.phone_no,
            'prescriptions': data.prescriptions,
            'dob': data.dob,
            'gender': data.gender,
            'home_address': data.address,
            // 'nok_firstname': data.nok_FirstName ,
            // 'nok_lastname': data.nokLastName ,
            // 'nok_middlename': data.nokMiddleName ,
            // 'nok_dob': data.nokDob ,
            // 'nok_relationship': data.nokRelationship ,
            // 'nok_gender': data.nokGender ,
            // 'nok_phone': data.nokPhone
        }
        const newPatient = {
            'id': data.id,
            'firstname': data.firstname,
            'middlename': data.middlename,
            'lastname': data.lastname,
            'email': data.email,
            'matric_no': data.matric_no,
            'phone_no': data.phone_no,
            'home_address': data.address,
            'prescriptions': data.prescriptions
        }
        setPatients([...filteredList, newPatient]);
        await axios.put(`http://localhost:8000/api/patient/${data.id}`, editedPatient, {
            headers: {
                Accept: 'application/json',
                'X-XSRF-TOKEN': decodeURIComponent(token),
                
            }
        })   

    } catch(error){
        console.error(error);
    }
}

export async function editPrescription(setPrescriptions, data){
    try{
        const list = JSON.parse(localStorage.getItem('prescriptions'));
        const filteredList = list.filter(item => item.id !== data.id);
        const editedPrescription = {
            'id': data.id,
            'name': data.name,
            'matric_no': data.matric_no,
            'drug_name': data.drug_name,
            'drug_quantity': data.drug_quantity
        }
        setPrescriptions([...filteredList, editedPrescription]);
        await axios.put(`http://localhost:8000/api/prescription/${data.id}`, editedPrescription, {
            headers: {
                Accept: 'application/json',
                // 'X-XSRF-TOKEN': decodeURIComponent(token),
                // 'Referer': '127.0.0.1:8000'
            }
        })   

    } catch(error){
        console.error(error);
    }
}


export async function editDrug(setDrugs, data){
    try{
        const list = JSON.parse(localStorage.getItem('drugs'));
        const filteredList = list.filter(item => item.id !== data.id);
        const editedDrug = {
            'id': data.id,
            'drug_name': data.drug_name,
            'drug_quantity': data.drug_quantity,
            'manufacturing_date': data.manufacturing_date,
            'expiration_date': data.expiration_date
        }
        setDrugs([...filteredList, editedDrug]);
        await axios.put(`http://127.0.0.1:8000/api/drug/${data.id}`, editedDrug, {
            headers: {
                Accept: 'application/json',
                // 'X-XSRF-TOKEN': decodeURIComponent(token),
                // 'Referer': '127.0.0.1:8000'
            }
        })   

    } catch(error){
        console.error(error);
    }
}

export function searchFunction(data, keys, query){
    return data.filter(
        (item) => keys.some(key => item[key].toLowerCase().includes(query))
    )
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
                // Referer: '127.0.0.1:8000'
            }})
    }
    catch(error){
        console.error(error);
    }
}

export async function deleteDrugs(setDrugs ,id){
    try{
        const list = JSON.parse(localStorage.getItem('drugs'));
        const filteredList = list.filter(item => item.id !== id);
    
        setDrugs(filteredList);
        await axios.delete(`http://localhost:8000/api/drugs/${id}`,{
            headers: {
                Accept: 'application/json',
                // 'X-XSRF-TOKEN': decodeURIComponent(token),
                // 'Referer': '127.0.0.1:8000'
            }})
    }
    catch(error){
        console.error(error);
    }
}

export async function deletePrescription(setPrescriptions ,id){
    try{
        const list = JSON.parse(localStorage.getItem('prescriptions'));
        const filteredList = list.filter(item => item.id !== id);
    
        setPrescriptions(filteredList);
        await axios.delete(`http://localhost:8000/api/drugs/${id}`,{
            headers: {
                Accept: 'application/json',
                // 'X-XSRF-TOKEN': decodeURIComponent(token),
                // 'Referer': '127.0.0.1:8000'
            }})
    }
    catch(error){
        console.error(error);
    }
}

export function addNotification(setNotifications, message){
    try{
        const list = JSON.parse(localStorage.getItem('notifications'));
       
        if(list === null || list.length === 0 ){
            const newMessage = {
                'id': 1,
                'message': message
            }
            setNotifications([newMessage])
        } else {
            const newMessage = {
                'id': list.length + 1,
                'message': message
            }
            setNotifications([...list, newMessage])
        }

    }catch(err){
        console.error(err);
    }
}

export function deleteNotification(setNotifications ,id){
    try{
        const list = JSON.parse(localStorage.getItem('notifications'));
        const filteredList = list.filter(item => item.id !== id);
    
        setNotifications(filteredList);
    }
    catch(error){
        console.error(error);
    }
}