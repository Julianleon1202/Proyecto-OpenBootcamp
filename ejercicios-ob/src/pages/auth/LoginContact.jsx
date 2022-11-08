import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import { useHistory } from 'react-router-dom';

const LoginContact = () => {

    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>

            <button onClick={() => navigate('/register')}>
                Registrate
            </button>
        </div>
    );
}

export default LoginContact;
