import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h4>
                El nombre del contacto es: { contact.nombre }
            </h4>
            <h4>
                El apellido del contacto es: { contact.apellido }
            </h4>
            <h4>
                El email del contacto es: { contact.email }
            </h4>
            <h4>
                El estado es: { contact.conectado ? 'Contacto en línea':'Contacto no disponible'}
                
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contacto :PropTypes.instanceOf(Contacto),
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
};


export default ContactComponent;
