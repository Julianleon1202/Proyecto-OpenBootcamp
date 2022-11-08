import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    return (
        <div>
            <h1>Página de bienvenida, ¿Cómo está usted?</h1>

            <button onClick={() => navigate('/contacts')}>
                Ir a los contactos
            </button>

        </div>
    );
}

export default HomePage;
