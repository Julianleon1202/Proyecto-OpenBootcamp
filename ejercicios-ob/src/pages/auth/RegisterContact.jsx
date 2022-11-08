import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterContact = () => {

    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <RegisterFormik/>

            <button onClick={() => navigate('/login')}>
                Logueate
            </button>
        </div>
    );
}

export default RegisterContact;